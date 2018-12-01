/**
 * @desc event center for dispatch event
 * 每一个canvas对应一个eventCenter 只应该被在canvas初始化的时候被实例化一次
 */

import Shape from '@/UI/graphics/shape';
import { mouseTypeArr } from '@/interface/event';
import Canvas from '@/basic/canvas';

type event = 'mouse' | 'keybord';
// type event = keyof mouseType;

// TODO 如何限制interface只能为由mouseType moueTypeArr中的字符串作为key的event
type eventType = {
    [K in event]?: {
        [key: string]: Shape[];
    }
};
/**
 * default class
 */
export default class EventCenter {
    protected targets: Shape[] = [];
    protected canvas: Canvas;

    private eventDispatchList: eventType;

    constructor(canvas: Canvas) {
        this.canvas = canvas;
        this.init();
    }

    public cleanTargets(type: event = 'mouse'): void {
        this.targets = [];
    }

    public addTarget(shape: Shape, type: event = 'mouse'): void {
        this.targets.push(shape);
        if (this.eventDispatchList[type]) {
            // this.eventDispatchList[type].push(shape)
        }
    }

    public addEvent(name: string, cb: Function): void {}

    public init(): void {
        this.eventDispatchList = {
            mouse: {},
        };
        // TODO 是否需要节流
        // TODO 是否需要拆开绑定
        mouseTypeArr.map(
            (v: string): void => {
                // TODO: document 改成cansvas 怎么把canvas绑定到当前节点上
                this.canvas.dom.addEventListener(
                    v,
                    (me: MouseEvent): void => {},
                );
            },
        );
    }
}
