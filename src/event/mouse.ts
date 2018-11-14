/**
 * @desc mouse 事件
 */
import Event from '@/event/';

enum mouseType {
    click = 'click',
    mouseDown = 'mouse-down',
    mouseEnter = 'mouse-enter',
    mouseLeave = 'mouse-leave',
    mouseMove = 'mouse-move',
    mouseOut = 'mouse-out',
    mouseOver = 'mouse-over',
    mouseIn = 'mouse-in',
    mouseUp = 'mouse-up',
}

export default class MouseEvent extends Event {
    constructor() {
        super();
    }

    public on(name: mouseType, cb: Function): void {}
}
