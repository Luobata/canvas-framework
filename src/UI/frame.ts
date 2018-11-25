/**
 * @desc frame 帧动画渲染底层
 */

/**
 * default class
 */
export interface IFrameConf {
    framePerSecond?: number;
}
export default class Frame {
    private framePerSecond: number = 60;

    constructor(conf: IFrameConf) {
        Object.assign(this, conf);
    }
}
