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
    if (minimum < 0 || maximum < 0) {
        throw new Error(`Decorator @Size cannot have a negative parameters (minimum: ${minimum}, maximum: ${maximum})`);
    }

    return <T>(target, propertyKey, descriptor) => {
        const constraintProperties: ConstraintProperties<T> = new ConstraintProperties<T>(target, propertyKey, descriptor, 'Size');

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
