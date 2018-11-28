/**
 * @description rectangular.ts
 */
import Shape from '@/UI/graphics/shape';

interface IRectangularConfig {
    width: number;
    height: number;
    x: number;
    y: number;
    backgroundColor: string;
    strokeColor: string;
    fill: boolean;
}

const defaultConf: IRectangularConfig = {
    width: 200,
    height: 200,
    x: 0,
    y: 0,
    backgroundColor: 'black',
    strokeColor: 'black',
    fill: true,
};

export default class Rectangular extends Shape {
    public config: IRectangularConfig;

    constructor(conf: IRectangularConfig) {
        super();
        this.config = {
            ...conf,
            ...defaultConf,
        };
    }

    public render(): void {
        this.ctx.save();

        if (this.config.fill) {
            this.ctx.fillStyle = this.config.backgroundColor;
        } else {
            this.ctx.strokeStyle = this.config.strokeColor;
        }
        this.ctx.beginPath();
        this.ctx.moveTo(
            this.config.x * this.pixealRatio,
            this.config.y * this.pixealRatio,
        );
        this.ctx.lineTo(
            this.pixealRatio * (this.config.x + this.config.width),
            this.pixealRatio * this.config.y,
        );
        this.ctx.lineTo(
            this.pixealRatio * (this.config.x + this.config.width),
            this.pixealRatio * (this.config.y + this.config.height),
        );
        this.ctx.lineTo(
            this.pixealRatio * this.config.x,
            this.pixealRatio * (this.config.y + this.config.height),
        );
        this.ctx.closePath();
        if (this.config.fill) {
            this.ctx.fill();
        } else {
            this.ctx.stroke();
        }

        this.ctx.restore();
    }
}
