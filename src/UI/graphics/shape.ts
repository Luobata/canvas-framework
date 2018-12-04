/**
 * @desc 图形的父类
 */

import Canvas from '@/basic/canvas';
import Log from '@/basic/log';
import EventCenter from '@/event/event-center';
import MouseEvent from '@/event/mouse';
import { isMouseType, mouseType } from '@/interface/event';
import Path from '@/UI/path';

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
     * @param canvas Canvas class for binding
     */
    public bind(canvas: Canvas, pixealRatio: number): void {
        this.ctx = canvas.ctx;
        this.pixealRatio = pixealRatio;
        // this.eventCenter = canvas.mouseCenter;
        this.eventInit(canvas.eventCenter);
    }

    public destroyed(): void {
        // TODO destroyed
    }

    public render(): void {
        // TODO render
    }

    protected pathInit(): void {
        // TODO pathInit
    }

    private eventInit(eventCenter: EventCenter): void {
        this.mouseEvent = new MouseEvent(this, eventCenter);
    }

    private on(name: string, cb: Function): void {
        if (isMouseType(name)) {
            this.mouseEvent.on(name, cb);
        }
    }
}
