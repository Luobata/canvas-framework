/**
 * @desc event interface
 */

export type mouseType =
    | 'click'
    | 'mouse-down'
    | 'mouse-enter'
    | 'mouse-leave'
    | 'mouse-move'
    | 'mouse-out'
    | 'mouse-over'
    | 'mouse-in'
    | 'mouse-up';

export function isMouseType(value: string): value is mouseType {
    return mouseTypeArr.indexOf(value) !== -1;
}
export const mouseTypeArr: string[] = [
    'click',
    'mouse-down',
    'mouse-enter',
    'mouse-leave',
    'mouse-move',
    'mouse-out',
    'mouse-over',
    'mouse-in',
    'mouse-up',
];
