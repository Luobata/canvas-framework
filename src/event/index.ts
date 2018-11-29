/**
 * @desc event
 */

import Log from '@/basic/log';
import Shape from '@/UI/graphics/shape';
/**
 * default class
 */
export default class Event extends Log {
    protected target: Shape;

    constructor(target: Shape) {
        super();
        this.target = target;
    }
}
