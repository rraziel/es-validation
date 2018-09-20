import { AbstractConstraintValidator } from './AbstractConstraintValidator';
import { ConstraintValidationContext, ConstraintViolation } from '../validation';

/**
 * Valid constraint validator
 * @param <T> Value type
 */
class ValidConstraintValidator<T> extends AbstractConstraintValidator<T> {

    /**
     * Actual value validation implementation
     * @param value   Value to validate
     * @param context Constraint validation context
     * @return true if the value passes the constraint
     */
    protected isValidValue(value: T, context: ConstraintValidationContext): boolean {
        let constraintViolations: Set<ConstraintViolation<T>> = context.getValidator().validate(value);
        return constraintViolations.size === 0;
    }

}

export {
    ValidConstraintValidator
};
