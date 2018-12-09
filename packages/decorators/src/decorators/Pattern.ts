import { addConstraint } from './addConstraint';
import { ConstraintDecorator } from './ConstraintDecorator';
import { ConstraintProperties } from './ConstraintProperties';

/**
 * Create a Pattern decorator, used to define that an element must match a regular expression
 * @param regex Regular expression
 * @return Pattern decorator
 */
function Pattern(regExp: RegExp): ConstraintDecorator {
    return <T>(target, propertyKey, descriptor) => {
        const constraintProperties: ConstraintProperties<T> = new ConstraintProperties<T>(target, propertyKey, descriptor, 'Pattern');

        constraintProperties.attributes = {
            regExp: regExp
        };

        addConstraint(constraintProperties);
    };
}

export {
    Pattern
};
