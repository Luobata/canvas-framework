/**
 * @desc 图形的父类
 */

import { idDecorator } from '@/basic/util';

let id: number = 0;

/**
 * default class
 */
@idDecorator()
export default class Shape {
    public id: string;

    constructor(shapeType: string) {
        this.id = `${shapeType}_${id}`;
        id = id + 1;
    }
}
