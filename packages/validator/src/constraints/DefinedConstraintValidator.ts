import { ConstraintValidator } from './ConstraintValidator';

/**
 * Defined constraint validator
 * @param <T> Value type
 */
class DefinedConstraintValidator<T> implements ConstraintValidator<T> {

    /**
     * Initialize the validator in preparation for isValid calls
     */
    initialize(): void {
        // Nothing to do
    }

    /**
     * Test whether the value is valid
     * @param value Value to validate
     * @return true if the value passes the constraint
     */
    isValid(value: T): boolean {
        return value !== undefined;
    }

}

export {
    DefinedConstraintValidator
};
