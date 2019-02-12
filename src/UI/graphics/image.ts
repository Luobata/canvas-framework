/**
 * @desc circle / ellipsis
 */
import { IPoint } from '@/interface/point';
import Shape from '@/UI/graphics/shape';

// tslint:disable
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

    public render(): void {
        // TODO
    }

    public pathInit(): void {
        // TODO
    }

    /**
     * load img src
     * @param res
     */
    // public load(res: string): Promise<any> {
    //     return new Promise(
    //         (resolve: Function, reject: Function): Function => {},
    //     );
    // }

    public animation(): void {
        // TODO
    }
}
