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

    constructor() {
        super();

        this.eventInit();
    }

    public destroyed(): void {}

    public render(): void {}

    private eventInit(): void {
        this.mouseEvent = new MouseEvent();
    }

    private pathInit(): void {}

    private on(name: string, cb: Function): void {
        if (mouseTypeArr.indexOf(name) !== -1) {
            this.mouseEvent.on(name, cb);
        }
    }
}
