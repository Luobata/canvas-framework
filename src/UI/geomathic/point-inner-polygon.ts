/**
 * @description judge point is inner the Polygon
 * ray-cross 算法
 */
// tslint:disable no-any no-unsafe-any

import { IPoint, IPointList, isIPoint } from '@/interface/point';
import { isArray } from 'util';

export default (p: IPoint, polygon: IPointList): boolean => {
    let countNum: number = 0;
    const point: IPoint = p;
    const pointList: IPointList = polygon;

    for (let i: number = 0; i < pointList.length; i = i + 1) {
        const p1: IPoint = pointList[i];
        const p2: IPoint = pointList[(i + 1) % pointList.length];

        // 平行线
        if (p1.y === p2.y) {
            continue;
        }

        // 最高点都不到该点的
        if (Math.max(p1.y, p2.y) < point.y) {
            continue;
        }

        // 最低点都不到该点的
        if (Math.min(p1.y, p2.y) > point.y) {
            continue;
        }

        const vertex: number =
            (p2.x * point.y - p2.x * p1.y + p1.x * p2.y - p1.x * point.y) /
            (p2.y - p1.y);

        if (vertex > point.x) {
            countNum = countNum + 1;
        }
    }

    // 奇数在内部 偶数在外部
    return countNum % 2 === 1;
};

/**
 * winding-number算法
 * @doc http://geomalgorithms.com/a03-_inclusion.html
 */

export const windingNumber: Function = (
    p: IPoint,
    polygon: IPointList,
): boolean => {
    const point: IPoint = p;
    const pointList: IPointList = polygon;

    return true;
};
