/**
 * @description rectangular.ts
 */
import Shape from '@/UI/graphics/shape';
import Path from '@/UI/path';

export enum boxSizing {
    content = 'content-box',
    border = 'border-box',
}

interface IRectangularConfig {
    width: number;
    height: number;
    x: number;
    y: number;
    backgroundColor: string;
    strokeColor: string;
    fill: boolean;
    borderRadius?: string;
    borderColor?: string;
    borderWidth: number;
    boxSizing: boxSizing;
}

const defaultConf: IRectangularConfig = {
    width: 200,
    height: 200,
    x: 0,
    y: 0,
    backgroundColor: 'black',
    strokeColor: 'black',
    fill: true,
    borderWidth: 2,
    boxSizing: boxSizing.content,
};

/**
 * default class
 */
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
        // TODO border-radius
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
        if (this.config.borderColor) {
            this.ctx.strokeStyle = this.config.borderColor;
            this.ctx.lineWidth = this.config.borderWidth;
            this.ctx.stroke();
        }

        this.ctx.restore();
    }

    protected pathInit(): void {
        const border: number = this.config.borderColor
            ? this.config.borderWidth / 2
            : 0;
        const width: number =
            this.config.boxSizing === boxSizing.content
                ? this.config.width + border
                : this.config.width - border;
        const height: number =
            this.config.boxSizing === boxSizing.content
                ? this.config.height + border
                : this.config.height - border;
        // 类似border-box content-box border的宽度会增加整体宽度
        this.path = new Path([
            {
                x: this.config.x + border,
                y: this.config.y + border,
            },
            {
                x: this.config.x + width,
                y: this.config.y + border,
            },
            {
                x: this.config.x + width,
                y: this.config.y + height,
            },
            {
                x: this.config.x + border,
                y: this.config.y + height,
            },
        ]);
    }
}
