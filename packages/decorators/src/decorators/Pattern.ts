import {
    addConstraint,
    ConstraintDecorator
} from './ConstraintDecorator';

/**
 * Create a Pattern decorator, used to define that an element must match a regular expression
 * @param regex Regular expression
 * @return Pattern decorator
 */
function Pattern(regExp: RegExp): ConstraintDecorator {
    return (target, propertyKey, descriptor) => addConstraint(target, propertyKey, descriptor, 'Pattern', {
        regExp: regExp
    });
}

export {
    Pattern
};
