/**
 * @desc circle / ellipsis
 */
import Shape from '@/UI/graphics/shape';

/**
 * default class
 */
export default class Image extends Shape {
    constructor() {
        super();
    }

    public onShape(p: IPoint): boolean {
        return true;
    }

    public render(): void {}

    public pathInit(): void {}
}
