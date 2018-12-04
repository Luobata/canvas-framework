/**
 * @desc mouse 事件
 */
import Event from '@/event/';
import EventCenter from '@/event/event-center';
import { mouseType } from '@/interface/event';
import Shape from '@/UI/graphics/shape';

/**
 * default class
 */
export default class MouseEvent extends Event {
    private mouseCenter: EventCenter;

    constructor(target: Shape, center: EventCenter) {
        super(target);

        this.mouseCenter = center;
    }

    public inMouseType(name: string): void {
        // TODO in
    }

    public on(name: mouseType, cb: Function): void {
        this.mouseCenter.addTarget(this.target, 'mouse', name, cb);
        // TODO on
    }
}
