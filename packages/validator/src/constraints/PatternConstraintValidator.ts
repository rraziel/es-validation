import { AbstractConstraintValidator } from './AbstractConstraintValidator';
import { ConstraintDescriptor } from '@es-validation/decorators';

/**
 * Pattern constraint validator
 */
class PatternConstraintValidator extends AbstractConstraintValidator<string> {
    private regularExpression!: RegExp;

    /**
     * Class constructor
     */
    constructor() {
        super(String);
    }

    /**
     * Initialize the validator in preparation for isValid calls
     * @param constraintDescriptor Constraint descriptor
     */
    initialize(constraintDescriptor: ConstraintDescriptor): void {
        this.regularExpression = constraintDescriptor.getAttribute<RegExp>('regExp')!;
    }

    /**
     * Test whether the value is valid
     * @param value Value to validate
     * @return true if the value passes the constraint
     */
    isValidValue(value: string): boolean {
        return this.regularExpression.test(value);
    }

}

export {
    PatternConstraintValidator
};
