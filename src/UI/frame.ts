/**
 * @desc frame 帧动画渲染底层
 */
import { context } from '@/basic/canvas';

export interface IFrameConf {
    framePerSecond?: number;
}

/**
 * default class
 */
export default class Frame {
    public contextList: context[] = [];

    private framePerSecond: number = 60;

    constructor(contextList: context[]) {
        this.update(contextList);
    }

    public render(): void {
        // TODO 如果有动画处理的时候的处理逻辑
        requestAnimationFrame(() => {
            for (const i of this.contextList) {
                i.render();
            }
        });
    }

    public update(contextList: context[]): void {
        this.contextList = contextList;
    }
}
