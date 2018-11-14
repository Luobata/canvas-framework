/**
 * @desc util
 */

import Shape from '@/UI/graphics/shape';

type idType = Shape;
// 考虑按照constructor区分id
let id: number = 0;

declare type MethodDecorator = <T>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>,
) => TypedPropertyDescriptor<T> | void;

export function idDecorator(): Function {
    return (target: idType): void => {
        target.id = `${target.constructor.name}_${id}`;
        id = id + 1;
    };
}
