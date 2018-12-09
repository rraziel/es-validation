import { addConstraint } from './addConstraint';
import { ConstraintDecorator } from './ConstraintDecorator';
import { ConstraintProperties } from './ConstraintProperties';

/**
 * Create a Min decorator, used to define that an element must be a number whose value is higher or equal to the specified minimum
 * @param minimum Minimum
 * @return Min decorator
 */
function Min(minimum: number): ConstraintDecorator {
    return <T>(target, propertyKey, descriptor) => {
        const constraintProperties: ConstraintProperties<T> = new ConstraintProperties<T>(target, propertyKey, descriptor, 'Min');

        constraintProperties.attributes = {
            minimum
        };

        addConstraint(constraintProperties);
    };
}

export {
    Min
};
