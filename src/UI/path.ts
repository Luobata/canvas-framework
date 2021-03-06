/**
 * @desc 图形路径基类
 */

import { IPoint } from '@/interface/point';

/**
 * default class
 */
export default class Path {
    // 这里IPoint为原始数据 即不带pixelRatio
    public pathList: IPoint[] = [];

    constructor(path: IPoint[]) {
        this.pathList = path;
    }

    /**
     * 判断点是否在path的面上
     * @param p 点
     */
    public onPath(p: IPoint): boolean {
        return true;
    }
}
