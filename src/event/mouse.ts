/**
 * @desc mouse 事件
 */
import Event from '@/event/';
import { mouseType } from '@/interface/event';
import Shape from '@/UI/graphics/shape';
import EventCenter from '@/event/event-center';

export default class MouseEvent extends Event {
    private mouseCenter: EventCenter;

    constructor(target: Shape, center: EventCenter) {
        super(target);

        this.mouseCenter = center;
        this.mouseCenter.addTarget(target);
    }

    public inMouseType(name: string): void {}

    public on(name: string, cb: Function): void {}
}
