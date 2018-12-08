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
    public path: Path;

    protected ctx: CanvasRenderingContext2D;
    protected pixealRatio: number;

    // eventCache用于在canvas实例化绑定之前存储事件
    private eventCache: IeventHandler[] = [];
    // eventList用于存储所有绑定的事件
    private eventList: IeventHandler[] = [];

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
        this.eventInit(canvas.eventCenter);
        // 如果有cache拿出来
        if (this.eventCache.length) {
            for (const i of this.eventCache) {
                this.on(i.name, i.handler);
            }
            this.eventCache = [];
        }
    }

    /**
     * event on
     * @param name event-name
     * @param cb event-callback
     */
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
            this.eventList.push({
                name,
                handler: cb,
            });
            this.mouseEvent.on(name, cb);
            return;
        }

        throw new Error(`${name} is a illegal event name.`);
    }

    /**
     * event off
     * @param name event-name
     * @param cb event-callback
     */
    public off(name: string, cb: Function): void {
        if (!this.mouseEvent) {
            return;
        }

        if (isMouseType(name)) {
            this.mouseEvent.off(name, cb);
        }
    }

    /**
     * shape destroy off all the eventList
     */
    public destroyed(): void {
        for (const i of this.eventList) {
            this.off(i.name, i.handler);
        }

        this.eventList = [];
    }

    /**
     * abstract method
     * judge point is on the shape
     * @param p point with mouse
     */
    public abstract onShape(p: IPoint): boolean;

    /**
     * abstract method
     * render the shape
     */
    public abstract render(): void;

    /**
     * abstract method
     * init the path
     */
    protected abstract pathInit(): void;

    /**
     * init all the event
     * @param eventCenter event-center
     */
    private eventInit(eventCenter: EventCenter): void {
        this.mouseEvent = new MouseEvent(this, eventCenter);
    }
}
