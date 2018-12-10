/**
 * @desc circle / ellipsis
 */
import { IPoint } from '@/interface/point';
import Shape from '@/UI/graphics/shape';
import Path from '@/UI/path';

interface ICircleConfig {
    // 圆心位置
    x: number;
    y: number;
    // 半径
    radiusX: number;
    radiusY: number;
    fill: boolean;
    backgroundColor?: string;
    strokeColor?: string;
    borderColor?: string;
}

const defaultConf: ICircleConfig = {
    x: 200,
    y: 200,
    radiusX: 100,
    radiusY: 100,
    fill: true,
    backgroundColor: 'black',
    strokeColor: 'black',
};

/**
 * default class
 */
export default class Ellipsis extends Shape {
    public config: ICircleConfig;

    constructor(conf: ICircleConfig) {
        super();
        this.config = {
            ...defaultConf,
            ...conf,
        };
    }

    public onShape(p: IPoint): boolean {
        return true;
    }

    public render(): void {
        const r: number =
            this.config.radiusX > this.config.radiusY
                ? this.config.radiusX
                : this.config.radiusY;
        const ratioX: number = this.config.radiusX / r;
        const ratioY: number = this.config.radiusY / r;
        this.ctx.save();
        // this.ctx.strokeStyle = this.property.borderColor;
        // this.ctx.lineWidth = this.property.borderWidth * config.rate;
        this.ctx.beginPath();
        this.ctx.scale(ratioX, ratioY);
        this.ctx.arc(
            this.config.x / ratioX,
            this.config.y / ratioY,
            r,
            0,
            Math.PI * 2,
            false,
        );
        if (this.config.fill) {
            this.ctx.fillStyle = this.config.backgroundColor;
            this.ctx.fill();
        } else {
            this.ctx.strokeStyle = this.config.borderColor;
            this.ctx.stroke();
        }
        this.ctx.restore();
    }

    public pathInit(): void {
        this.path = new Path([]);
        // none 椭圆不需要path
    }
}
