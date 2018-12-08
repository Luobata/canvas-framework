/**
 * @desc circle / ellipsis
 */
import Shape from '@/UI/graphics/shape';
import { IPoint } from '@/interface/point';

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
