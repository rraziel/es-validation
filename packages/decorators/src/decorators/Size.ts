import { addConstraint } from './addConstraint';
import { ConstraintDecorator } from './ConstraintDecorator';
import { ConstraintProperties } from './ConstraintProperties';

/**
 * Create a Size decorator, used to define that an element must have a size within a certain range
 * @param minimum Minimum
 * @param maximum Maximum
 * @return Size decorator
 */
function Size(minimum: number = 0, maximum: number = Number.MAX_SAFE_INTEGER): ConstraintDecorator {
    return <T>(target, propertyKey, descriptor) => {
        let constraintProperties: ConstraintProperties<T> = new ConstraintProperties<T>(target, propertyKey, descriptor, 'Size');

        constraintProperties.attributes = {
            mininum: minimum,
            maximum: maximum
        };

        addConstraint(constraintProperties);
    };
}

export {
    Size
};
