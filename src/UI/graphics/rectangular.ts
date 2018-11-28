/**
 * @description rectangular.ts
 */
import Shape from '@/UI/graphics/shape';
import Path from '@/UI/path';

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
            ...defaultConf,
            ...conf,
        };
        this.pathInit();
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
            this.pixealRatio * this.path.pathList[0].x,
            this.pixealRatio * this.path.pathList[0].y,
        );
        for (let i: number = 1; i < this.path.pathList.length; i = i + 1) {
            this.ctx.lineTo(
                this.pixealRatio * this.path.pathList[i].x,
                this.pixealRatio * this.path.pathList[i].y,
            );
        }
        this.ctx.closePath();
        if (this.config.fill) {
            this.ctx.fill();
        } else {
            this.ctx.stroke();
        }

        this.ctx.restore();
    }

    public pathInit() {
        this.path = new Path([
            {
                x: this.config.x,
                y: this.config.y,
            },
            {
                x: this.config.x + this.config.width,
                y: this.config.y,
            },
            {
                x: this.config.x + this.config.width,
                y: this.config.y + this.config.height,
            },
            {
                x: this.config.x,
                y: this.config.y + this.config.height,
            },
        ]);
    }
}
