import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseAdaptiveCardExtension } from '@microsoft/sp-adaptive-card-extension-base';
import { CardView } from './cardView/CardView';
import { QuickView } from './quickView/QuickView';
import { WunderkindPropertyPane } from './WunderkindPropertyPane';

export interface IWunderkindAdaptiveCardExtensionProps {
  title: string;
  description: string;
  iconProperty: string;
}

export interface IWunderkindAdaptiveCardExtensionState {
  description: string;
  timerCounter: number;
}

const CARD_VIEW_REGISTRY_ID: string = 'Wunderkind_CARD_VIEW';
export const QUICK_VIEW_REGISTRY_ID: string = 'Wunderkind_QUICK_VIEW';

export default class WunderkindAdaptiveCardExtension extends BaseAdaptiveCardExtension<
  IWunderkindAdaptiveCardExtensionProps,
  IWunderkindAdaptiveCardExtensionState
> {
  private _deferredPropertyPane: WunderkindPropertyPane | undefined;
  private timerId: number = 0;

  public onInit(): Promise<void> {
    this.state = {
      description: this.properties.description,
      timerCounter: 0
    };

    this.cardNavigator.register(CARD_VIEW_REGISTRY_ID, () => new CardView());
    this.quickViewNavigator.register(QUICK_VIEW_REGISTRY_ID, () => new QuickView());

    this.setDataPooling("");

    return Promise.resolve();
  }

  public get title(): string {
    return this.properties.title;
  }



  protected get iconProperty(): string {
    return this.properties.iconProperty || require('./assets/SharePointLogo.svg');
  }

  private getData = async (value) => {
    return new Promise((resolve, reject) => {
      this.setState({ description: this.properties.description+this.state.timerCounter+1, timerCounter: this.state.timerCounter + 1 })
      
      resolve();
    })

  }

  protected loadPropertyPaneResources(): Promise<void> {
    return import(
      /* webpackChunkName: 'Wunderkind-property-pane'*/
      './WunderkindPropertyPane'
    )
      .then(
        (component) => {
          this._deferredPropertyPane = new component.WunderkindPropertyPane();
        }
      );
  }

  private setDataPooling = (newCountry: string) => {
    console.debug("restart")
    this.timerId = setInterval(async () => {
      console.debug("run", new Date());
      await this.getData("");
    }, 5000);
  }

  protected renderCard(): string | undefined {
    return CARD_VIEW_REGISTRY_ID;
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return this._deferredPropertyPane!.getPropertyPaneConfiguration();
  }
}
