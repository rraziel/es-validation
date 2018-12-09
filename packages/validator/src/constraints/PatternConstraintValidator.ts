import { AbstractConstraintValidator } from './AbstractConstraintValidator';
import { ConstraintDescriptor } from '@es-validation/decorators';

/**
 * Pattern constraint validator
 */
class PatternConstraintValidator extends AbstractConstraintValidator<string> {
    private readonly regularExpression: RegExp;

    /**
     * Class constructor
     * @param constraintDescriptor Constraint descriptor
     */
    constructor(constraintDescriptor: ConstraintDescriptor) {
        super(String);
        this.regularExpression = constraintDescriptor.getAttribute<RegExp>('regExp');
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
