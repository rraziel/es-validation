import {withInfoBuilder, ValidationDecorator} from './helper';

/**
 * Create a Size decorator, used to define that an element must have a size within a certain range
 * @param maximum Maximum
 * @param maximum Maximum
 * @return Size decorator
 */
function Size(minimum: number = 0, maximum = Number.MAX_SAFE_INTEGER): ValidationDecorator {
    return (target, propertyKey, descriptor) => withInfoBuilder(target, propertyKey, descriptor, infoBuilder => infoBuilder.size(minimum, maximum));
}

export {
    Size
};
