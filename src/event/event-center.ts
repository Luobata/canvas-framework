/**
 * @desc event center for dispatch event
 */

import Shape from '@/UI/graphics/shape';
import { mouseType, mouseTypeArr } from '@/interface/event';

type event = keyof mouseType;

interface eventType {
    // ['key' in event]: Shape[];
}
/**
 * default class
 */
export default class EventCenter {
    protected targets: Shape[];

    constructor() {
        this.init();
    }

    public cleanTargets(): void {
        this.targets = [];
    }

    public addTarget(shape: Shape): void {
        this.targets.push(shape);
    }

    public addEvent(name: mouseType, cb: Function): void {}

    public init(): void {
        // TODO 是否需要节流
        // TODO 是否需要拆开绑定
        mouseTypeArr.map(
            (v: string): void => {
                // TODO: document 改成cansvas 怎么把canvas绑定到当前节点上
                document.addEventListener(v, (me: MouseEvent): void => {});
            },
        );
    }
}
