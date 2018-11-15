/**
 * @desc mouse 事件
 */
import Event from '@/event/';
import { mouseType } from '@/interface/event';
import { ShapeType } from '@/interface/shape';

export default class MouseEvent extends Event {
    public target: ShapeType;

    constructor() {
        super();
    }

    public inMouseType(name: string): void {}

    public on(name: string, cb: Function): void {}
}
