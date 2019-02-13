/**
 * @desc circle / ellipsis
 */
import { IPoint } from '@/interface/point';
import { IShapeBasic } from '@/interface/shape';
import pointInnerPolygon from '@/UI/geomathic/point-inner-polygon';
import Shape from '@/UI/graphics/shape';
import Path from '@/UI/path';

export interface IImageConifg {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
}

export const defaultImageConfig: IImageConifg = {
    x: 0,
    y: 0,
};

/**
 * default class
 * 取名ImageItem 避免和原生Image冲突
 */
export default class ImageItem extends Shape {
    public config: IImageConifg;
    public imageFile: HTMLImageElement;

    constructor(conf?: IImageConifg, basicConf?: IShapeBasic) {
        super(basicConf);

        this.config = {
            ...defaultImageConfig,
            ...(conf || {}),
        };

        this.pathInit();
    }

    public onShape(p: IPoint): boolean {
        return pointInnerPolygon(p, this.path.pathList);
    }

    public render(): void {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.drawImage(
            this.imageFile,
            this.pixealRatio * this.config.x,
            this.pixealRatio * this.config.y,
            this.pixealRatio * this.config.width,
            this.pixealRatio * this.config.height,
        );
        this.ctx.closePath();
        this.ctx.restore();
    }

    public pathInit(): void {
        if (!this.config.width || !this.config.height) {
            return;
        }
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

    /**
     * load img src
     * @params src: image src
     */
    // tslint:disable-next-line no-any no-unsafe-any
    public load(src: string): Promise<any> {
        const image: HTMLImageElement = new Image();
        image.src = src;

        return new Promise(
            (resolve: Function, reject: Function): void => {
                image.onload = (): void => {
                    this.imageMatch(image.width, image.height);
                    this.pathInit();
                    this.imageFile = image;
                    resolve(image);
                };
            },
        );
    }

    public animation(): void {
        // TODO
    }

    // 等比例补全宽高
    private imageMatch(width: number, height: number): void {
        // 补全的同时需要等比例

        if (this.config.width && this.config.height) {
            return;
        }

        // 都没有直接赋值
        if (!this.config.width && !this.config.height) {
            this.config.width = width;
            this.config.height = height;

            return;
        }

        // 只有宽度
        if (this.config.width) {
            this.config.height = height * (this.config.width / width);

            return;
        }

        // 只有高度
        if (this.config.height) {
            this.config.width = width * (this.config.height / height);

            return;
        }
    }
}
