/**
 * @desc 创建canvas实例
 */
import { isString } from '@/basic/type';
import EventCenter from '@/event/event-center';
import Frame from '@/UI/frame';
import Group from '@/UI/graphics/group';
import Shape from '@/UI/graphics/shape';

export type context = Shape | Group;

export interface ICanvasConf {
    width: number;
    height: number;
}

const defaultConf: ICanvasConf = {
    width: 200,
    height: 100,
};

/**
 * default class
 */
export default class Canvas {
    public dom: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;
    public width: number;
    public height: number;
    public pixelRatio: number;
    public eventCenter: EventCenter;

    public contextList: context[] = [];

    private frame: Frame;

    constructor(conf?: ICanvasConf, dom?: string | HTMLCanvasElement) {
        if (dom === undefined) {
            this.dom = document.createElement('canvas');
        } else if (isString(dom)) {
            this.dom = document.querySelector(dom);
        } else {
            this.dom = dom;
        }

        this.ctx = this.dom.getContext('2d');

        this.canvasInit(conf || defaultConf);
        this.frame = new Frame(this.contextList);

        this.eventCenter = new EventCenter(this);
    }

    public add(con: context): Canvas {
        con.bind(this, this.pixelRatio);
        this.contextList.push(con);
        this.frame.update(this.contextList);

        return this;
    }

    public clear(): Canvas {
        for (const i of this.contextList) {
            i.destroyed();
        }

        this.contextList = [];
        this.frame.update(this.contextList);

        return this;
    }

    public render(): Canvas {
        this.frame.render();

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
