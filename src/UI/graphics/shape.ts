/**
 * @desc 图形的父类
 */

import Log from '@/basic/log';
import Canvas from '@/basic/canvas';
import MouseEvent from '@/event/mouse';
import { mouseType, isMouseType } from '@/interface/event';
import Path from '@/UI/path';
import EventCenter from '@/event/event-center';

/**
 * default class
 */
export default class Shape extends Log {
    public mouseEvent: MouseEvent;
    // public eventCenter: EventCenter;
    public path: Path;

    protected ctx: CanvasRenderingContext2D;
    protected pixealRatio: number;

    constructor() {
        super();
    }

    /**
     * bind ctx for render
     * @param ctx
     */
    public bind(canvas: Canvas, pixealRatio: number): void {
        this.ctx = canvas.ctx;
        this.pixealRatio = pixealRatio;
        // this.eventCenter = canvas.mouseCenter;
        this.eventInit(canvas.eventCenter);
    }

    public destroyed(): void {}

    public render(): void {}

    protected pathInit(): void {}

    private eventInit(eventCenter: EventCenter): void {
        this.mouseEvent = new MouseEvent(this, eventCenter);
    }

    private on(name: string, cb: Function): void {
        if (isMouseType(name)) {
            this.mouseEvent.on(name, cb);
        }
    }
}
