/**
 * @desc circle / ellipsis
 */
import { IPoint } from '@/interface/point';
import ellipsis from '@/UI/graphics/ellipsis';

/**
 * default class
 */
export default class circle extends ellipsis {
    constructor() {
        super();
    }

    public onShape(p: IPoint): boolean {
        return true;
    }

    public render(): void {}

    public pathInit(): void {}
}
