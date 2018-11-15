/**
 * @desc util
 */

import Shape from '@/UI/graphics/shape';

type idType = Shape;
type IidCollection = {
    [key: string]: number;
};
// 考虑按照constructor区分id
const idCollection: {
    [key: string]: number;
} = {};

declare type MethodDecorator = <T>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>,
) => TypedPropertyDescriptor<T> | void;

export function idDecorator(): Function {
    return (target: Function): void => {
        console.log(target);
        debugger;
        const name: string = target.constructor.name;
        if (!idCollection[name]) {
            idCollection[name] = 0;
        }
        target.prototype.id = `${name}_${idCollection[name]}`;
        idCollection[name] = idCollection[name] + 1;
    };
}
