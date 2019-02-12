/**
 * @desc circle / ellipsis
 */
import { IPoint } from '@/interface/point';
import ellipsis, {
    defaultEllipsisConf,
    IEllipsisConfig,
} from '@/UI/graphics/ellipsis';
import { IShapeBasic } from '@/interface/shape';

type ICircleConfig = IEllipsisConfig & {
    radius: number;
};

const defaultCircleConf: ICircleConfig = {
    ...defaultEllipsisConf,
    radius: 100,
};

function formatConf(conf: ICircleConfig): ICircleConfig {
    const tmpConf: ICircleConfig = {
        ...defaultCircleConf,
        ...conf,
    };

    return {
        ...tmpConf,
        radiusX: tmpConf.radius,
        radiusY: tmpConf.radius,
    };
}

/**
 * default class
 */
export default class circle extends ellipsis {
    constructor(conf?: ICircleConfig, basicConf?: IShapeBasic) {
        super(formatConf(conf), basicConf);
    }

    public onShape(p: IPoint): boolean {
        return true;
    }

    // public render(): void {}

    public pathInit(): void {}
}
