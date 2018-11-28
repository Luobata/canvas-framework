/**
 * @desc 图形的父类
 */

import Log from '@/basic/log';
import MouseEvent from '@/event/mouse';
import { mouseTypeArr } from '@/interface/event';
import Path from '@/UI/path';

/**
 * default class
 */
export default class Shape extends Log {
    public mouseEvent: MouseEvent;
    public path: Path;

    protected ctx: CanvasRenderingContext2D;
    protected pixealRatio: number;

    constructor() {
        super();

        this.eventInit();
    }

    /**
     * bind ctx for render
     * @param ctx
     */
    public bind(ctx: CanvasRenderingContext2D, pixealRatio: number): void {
        this.ctx = ctx;
        this.pixealRatio = pixealRatio;
    }

    public destroyed(): void {}

    public render(): void {}

    protected pathInit(): void {}

    private eventInit(): void {
        this.mouseEvent = new MouseEvent();
    }

    private on(name: string, cb: Function): void {
        if (mouseTypeArr.indexOf(name) !== -1) {
            this.mouseEvent.on(name, cb);
        }
    }
}
