/**
 * @description rectangular.ts
 */
import Shape from '@/UI/graphics/shape';

interface IRectangularConfig {
    width: number;
    height: number;
}

export default class Rectangular extends Shape {
    public config: IRectangularConfig;

    constructor(conf: IRectangularConfig) {
        super();
        this.config = {
            ...conf,
        };
    }
}
