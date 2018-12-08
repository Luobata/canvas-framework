/**
 * @desc 图形的父类
 */

import Canvas from '@/basic/canvas';
import Log from '@/basic/log';
import EventCenter from '@/event/event-center';
import MouseEvent from '@/event/mouse';
import { IeventHandler, isMouseType, mouseType } from '@/interface/event';
import Path from '@/UI/path';
import { IPoint } from '@/interface/point';

/**
 * default class
 */
export default abstract class Shape extends Log {
    public mouseEvent: MouseEvent;
    // public eventCenter: EventCenter;
    public path: Path;

    protected ctx: CanvasRenderingContext2D;
    protected pixealRatio: number;

    private eventCache: IeventHandler[] = [];

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
        // 如果有cache拿出来
        if (this.eventCache.length) {
            for (const i of this.eventCache) {
                this.on(i.name, i.handler);
            }
            this.eventCache = [];
        }
    }

    public on(name: string, cb: Function): void {
        // 兼容如果在bind之前先绑定事件的情况

        if (!this.mouseEvent) {
            this.eventCache.push({
                name,
                handler: cb,
            });

            return;
        }
        if (isMouseType(name)) {
            this.mouseEvent.on(name, cb);
            return;
        }

        throw new Error(`${name} is a illegal event name.`);
    }

    public off(name: string, cb: Function): void {
        if (!this.mouseEvent) {
            return;
        }

        if (isMouseType(name)) {
            this.mouseEvent.off(name, cb);
        }
    }

    public abstract onShape(p: IPoint): boolean;

    public abstract destroyed(): void;

    public abstract render(): void;

    protected abstract pathInit(): void;

    private eventInit(eventCenter: EventCenter): void {
        this.mouseEvent = new MouseEvent(this, eventCenter);
    }
}
