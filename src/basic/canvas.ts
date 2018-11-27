/**
 * @desc 创建canvas实例
 */
import { isString } from '@/basic/type';
import Shape from '@/UI/graphics/shape';

type context = Shape;

export interface ICanvasConf {
    width: number;
    height: number;
}

/**
 * default class
 */

export default class Canvas {
    public dom: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;
    public width: number;
    public height: number;
    public pixelRatio: number;

    public contextList: context[] = [];

    constructor(conf: ICanvasConf, dom?: string | HTMLCanvasElement) {
        if (dom === undefined) {
            this.dom = document.createElement('canvas');
        } else if (isString(dom)) {
            this.dom = document.querySelector(dom);
        } else {
            this.dom = dom;
        }

        this.ctx = this.dom.getContext('2d');

        this.canvasInit(conf);
    }

    public add(con: context): Canvas {
        this.contextList.push(con);

        return this;
    }

    public clear(): Canvas {
        for (const i of this.contextList) {
            i.destroyed();
        }

        this.contextList = [];

        return this;
    }

    public render(): Canvas {
        return this;
    }

    private canvasInit(conf: ICanvasConf): void {
        this.width = conf.width;
        this.height = conf.height;

        this.pixelRatio = window.devicePixelRatio;

        this.dom.style.width = `${this.width}px`;
        this.dom.style.height = `${this.height}px`;

        this.dom.width = this.width * this.pixelRatio;
        this.dom.height = this.height * this.pixelRatio;
    }
}
