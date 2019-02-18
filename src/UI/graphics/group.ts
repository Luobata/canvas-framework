/**
 * @desc circle / ellipsis
 */
import Log from '@/basic/log';
import { IPoint } from '@/interface/point';
import Shape from '@/UI/graphics/shape';

interface IGroupConfig {
    position: IPoint;
    zIndex: number;
}

const defautlGroupConfig: IGroupConfig = {
    position: {
        x: 0,
        y: 0,
    },
    zIndex: 0,
};

/**
 * default class
 */
export default class Group extends Shape {
    public list: Shape[] = [];
    public config: IGroupConfig;

    constructor(conf?: IGroupConfig) {
        super();

        this.config = {
            ...defautlGroupConfig,
            ...conf,
        };
    }

    public clear(): void {
        this.list = [];
    }

    public add(shape: Shape): void {
        // add 了之后需要重新pathInit
        this.list.push(shape);
        shape.pathInit(this.config.position);
    }

    public setPosition(p: IPoint): void {
        this.config.position = p;
    }

    public onShape(p: IPoint): boolean {
        return true;
    }

    public render(): void {
        this.list.map(
            (v: Shape): void => {
                v.render();
            },
        );
    }

    public pathInit(): void {
        // TODO
    }
}
