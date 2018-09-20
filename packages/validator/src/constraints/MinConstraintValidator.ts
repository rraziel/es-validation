import { AbstractNumericConstraintValidator } from './AbstractNumericConstraintValidator';
import { ConstraintDescriptor } from '@es-validation/decorators';

/**
 * Min constraint validator
 */
class MinConstraintValidator extends AbstractNumericConstraintValidator {
    private minimum!: number;

    /**
     * Initialize the validator in preparation for isValid calls
     * @param constraintDescriptor Constraint descriptor
     */
    initialize(constraintDescriptor: ConstraintDescriptor): void {
        this.minimum = constraintDescriptor.getAttribute<number>('minimum')!;
    }

    /**
     * Actual value validation implementation
     * @param value   Value to validate
     * @return true if the value passes the constraint
     */
    protected isValidValue(value: number): boolean {
        return value >= this.minimum;
    }

}

export {
    MinConstraintValidator
};
