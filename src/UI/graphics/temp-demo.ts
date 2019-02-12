/**
 * @desc circle / ellipsis
 */
import { IPoint } from '@/interface/point';
import Shape from '@/UI/graphics/shape';
// tslint:disable

/**
 * default class
 */
export default class ellipsis extends Shape {
    constructor() {
        super();
    }

    public onShape(p: IPoint): boolean {
        return true;
    }

    public render(): void {}

    public pathInit(): void {}
}
