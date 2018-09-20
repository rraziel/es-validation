import {
    addConstraint,
    ConstraintDecorator
} from './ConstraintDecorator';

/**
 * Create a Size decorator, used to define that an element must have a size within a certain range
 * @param minimum Minimum
 * @param maximum Maximum
 * @return Size decorator
 */
function Size(minimum: number = 0, maximum: number = Number.MAX_SAFE_INTEGER): ConstraintDecorator {
    return (target, propertyKey, descriptor) => addConstraint(target, propertyKey, descriptor, 'Size', {
        mininum: minimum,
        maximum: maximum
    });
}

export {
    Size
};
