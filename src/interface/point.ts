/**
 * @description point interface
 */
// tslint:disable no-any no-unsafe-any

export interface IPoint {
    x: number;
    y: number;
}

export type IPointList = IPoint[];

export function isIPoint(v: any): v is IPoint {
    return v.x !== undefined && v.y !== undefined;
}
