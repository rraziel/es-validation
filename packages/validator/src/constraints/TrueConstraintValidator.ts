import { AbstractBooleanConstraintValidator } from './AbstractBooleanConstraintValidator';

/**
 * True constraint validator
 */
class TrueConstraintValidator extends AbstractBooleanConstraintValidator {

    /**
     * Actual value validation implementation
     * @param value   Value to validate
     * @return true if the value passes the constraint
     */
    protected isValidValue(value: boolean): boolean {
        return value === true;
    }

}

export {
    TrueConstraintValidator
};
