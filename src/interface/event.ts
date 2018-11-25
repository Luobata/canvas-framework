/**
 * @desc event interface
 */

export enum mouseType {
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

export const mouseTypeArr: string[] = Object.keys(mouseType);
