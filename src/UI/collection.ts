/**
 * @desc shape的几何
 */

let id: number = 0;

/**
 * default class
 */
export default class Collection {
    public id: string;

    constructor(shapeType: string) {
        this.id = `${shapeType}_${id}`;
        id = id + 1;
    }
}
