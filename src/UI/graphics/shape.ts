/**
 * @desc 图形的父类
 */

import Log from '@/basic/log';
import { idDecorator } from '@/basic/util';

let id: number = 0;

/**
 * default class
 */
export default class Shape extends Log {
    constructor() {
        super();
        console.log(this.id);
    }
}
