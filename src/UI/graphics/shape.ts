/**
 * @desc 图形的父类
 */

import Log from '@/basic/log';
import { idDecorator } from '@/basic/util';
import MouseEvent from '@/event/mouse';
import { mouseTypeArr } from '@/interface/event';

/**
 * default class
 */
export default class Shape extends Log {
    public mouseEvent: MouseEvent;

    constructor() {
        super();

        this.eventInit();
    }

    private eventInit(): void {
        this.mouseEvent = new MouseEvent();
    }

    private on(name: string, cb: Function): void {
        if (mouseTypeArr.indexOf(name) !== -1) {
            this.mouseEvent.on(name, cb);
        }
    }
}
