import {getInfoBuilder, ValidationDecorator} from './helper';

/**
 * Create a Size decorator, used to define that an element must have a size within a certain range
 * @param maximum Maximum
 * @param maximum Maximum
 * @return Size decorator
 */
function Size(minimum: number = 0, maximum = Number.MAX_SAFE_INTEGER): ValidationDecorator {
    return (target, propertyKey, descriptor) => getInfoBuilder('Size', target, propertyKey, descriptor).size(minimum, maximum);
}

export {
    Size
};
