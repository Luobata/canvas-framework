/**
 * @desc event
 */

let id: number = 0;
/**
 * default class
 */
export default class Event {
    public id: string;

    constructor(eventType: string) {
        this.id = `${eventType}_${id}`;
        id = id + 1;
    }
}
