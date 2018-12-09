import { AbstractNumericConstraintValidator } from './AbstractNumericConstraintValidator';
import { ConstraintDescriptor } from '@es-validation/decorators';

/**
 * Max constraint validator
 */
class MaxConstraintValidator extends AbstractNumericConstraintValidator {
    private readonly maximum: number;

    /**
     * Class constructor
     * @param constraintDescriptor Constraint descriptor
     */
    constructor(constraintDescriptor: ConstraintDescriptor) {
        super();
        this.maximum = constraintDescriptor.getAttribute<number>('maximum');
    }

    /**
     * Actual value validation implementation
     * @param value   Value to validate
     * @return true if the value passes the constraint
     */
    protected isValidValue(value: number): boolean {
        return value <= this.maximum;
    }

}

export {
    MaxConstraintValidator
};
