import {
  BaseImageCardView,
  IImageCardParameters,
  IExternalLinkCardAction,
  IQuickViewCardAction,
  ICardButton
} from '@microsoft/sp-adaptive-card-extension-base';
import * as strings from 'WunderkindAdaptiveCardExtensionStrings';
import { IWunderkindAdaptiveCardExtensionProps, IWunderkindAdaptiveCardExtensionState, QUICK_VIEW_REGISTRY_ID } from '../WunderkindAdaptiveCardExtension';

import myImage from './SVGImage';

export class CardView extends BaseImageCardView<IWunderkindAdaptiveCardExtensionProps, IWunderkindAdaptiveCardExtensionState> {

  private timer: number = 0;
  /**
   * Buttons will not be visible if card size is 'Medium' with Image Card View.
   * It will support up to two buttons for 'Large' card size.
   */
  public get cardButtons(): [ICardButton] | [ICardButton, ICardButton] | undefined {
    return [
      {
        title: strings.QuickViewButton,
        action: {
          type: 'QuickView',
          parameters: {
            view: QUICK_VIEW_REGISTRY_ID
          }
        }
      }
    ];
  }

  public get data(): IImageCardParameters {

    const imageContent = this.state.timerCounter;
    
    console.debug(myImage.src(imageContent));
    console.debug("data:image/svg+xml;base64,"+btoa(myImage.src(imageContent)));
    return {
      primaryText: this.state.timerCounter+" * π = "+(this.state.timerCounter * Math.PI).toString(),
      imageUrl: "data:image/svg+xml;base64,"+btoa(myImage.src(imageContent))
    };
  }

  public get onCardSelection(): IQuickViewCardAction | IExternalLinkCardAction | undefined {
    return {
      type: 'ExternalLink',
      parameters: {
        target: 'https://www.bing.com'
      }
    };
  }
}
