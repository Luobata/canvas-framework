/**
 * @desc mouse 事件
 */
import Event from '@/event/';
import { mouseType } from '@/interface/event';
import Shape from '@/UI/graphics/shape';
import EventCenter from '@/event/event-center';

const MouseCenter = new EventCenter();

export default class MouseEvent extends Event {
    constructor(target: Shape) {
        super(target);

        MouseCenter.addTarget(target);
    }

    public inMouseType(name: string): void {}

    public on(name: string, cb: Function): void {}
}
