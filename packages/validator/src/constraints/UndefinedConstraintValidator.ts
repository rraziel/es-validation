import { ConstraintValidator } from './ConstraintValidator';

/**
 * Undefined constraint validator
 * @param <T> Value type
 */
class UndefinedConstraintValidator<T> implements ConstraintValidator<T> {

    /**
     * Test whether the value is valid
     * @param value Value to validate
     * @return true if the value passes the constraint
     */
    isValid(value: T): boolean {
        return value === undefined;
    }

}

export {
    UndefinedConstraintValidator
};
