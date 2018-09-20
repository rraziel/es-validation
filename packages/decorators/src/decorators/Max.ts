import { addConstraint } from './addConstraint';
import { ConstraintDecorator } from './ConstraintDecorator';
import { ConstraintProperties } from './ConstraintProperties';

/**
 * Create a Max decorator, used to define that an element must be a number whose value is lower or equal to the specified maximum
 * @param maximum Maximum
 * @return Max decorator
 */
function Max(maximum: number): ConstraintDecorator {
    return <T>(target, propertyKey, descriptor) => {
        let constraintProperties: ConstraintProperties<T> = new ConstraintProperties<T>(target, propertyKey, descriptor, 'Max');

        constraintProperties.attributes = {
            maximum
        };

        addConstraint(constraintProperties);
    };
}

export {
    Max
};
