// export interface IMyImage {
//     src: any
// }

export default {
    src: (imageContent) => {
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 164 180"><defs><style>.a{isolation:isolate;}.b{fill:url(#a);}.c{mix-blend-mode:multiply;opacity:0.75;}.d,.e{fill:#fff;}.e{font-size:50px;font-family:SegoeUIBlack, Segoe UI;}</style><linearGradient id="a" x1="1.42" y1="7.26" x2="167.53" y2="177.82" gradientUnits="userSpaceOnUse"><stop offset="0.07" stop-color="#0078c3"/><stop offset="0.44" stop-color="#cc2741"/><stop offset="1" stop-color="#eeb405"/></linearGradient></defs><g class="a"><rect class="b" width="164" height="180"/><image class="c" width="83" height="83" transform="translate(45 85)" xlink:href="data:image/png;base64,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"/><path class="d" d="M78.31,93.28a2.17,2.17,0,0,1,2.17,2.17v23.19h23.19a2.17,2.17,0,0,1,2.15,1.88l0,.29c0,14.41-11.68,24.64-26.08,24.64a26.09,26.09,0,0,1-26.09-26.09C53.67,105,63.9,93.28,78.31,93.28Z"/><image class="c" width="60" height="59" transform="translate(76 78)" xlink:href="data:image/png;base64,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"/><path class="d" d="M87,86a26.09,26.09,0,0,1,26.09,26.09,2.18,2.18,0,0,1-2.18,2.17H87a2.17,2.17,0,0,1-2.17-2.17V88.2A2.17,2.17,0,0,1,87,86Z"/><text class="e" transform="translate(71.29 66.72)" style="filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7)); text-align: right;">${ imageContent }</text></g></svg>
`
    }
}

