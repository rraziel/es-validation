import { AbstractBooleanConstraintValidator } from './AbstractBooleanConstraintValidator';

/**
 * False constraint validator
 */
class FalseConstraintValidator<T> extends AbstractBooleanConstraintValidator {

    /**
     * Actual value validation implementation
     * @param value   Value to validate
     * @return true if the value passes the constraint
     */
    protected isValidValue(value: boolean): boolean {
        return value === false;
    }

}

export {
    FalseConstraintValidator
};
