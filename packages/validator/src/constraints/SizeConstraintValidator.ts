import { AbstractSizeConstraintValidator } from './AbstractSizeConstraintValidator';
import { ConstraintDescriptor } from '@es-validation/decorators';

/**
 * Size constraint validator
 */
class SizeConstraintValidator extends AbstractSizeConstraintValidator {
    private minimum!: number;
    private maximum!: number;

    /**
     * Initialize the validator in preparation for isValid calls
     * @param constraintDescriptor Constraint descriptor
     */
    initialize(constraintDescriptor: ConstraintDescriptor): void {
        this.minimum = constraintDescriptor.getAttribute<number>('minimum')!;
        this.maximum = constraintDescriptor.getAttribute<number>('maximum')!;
    }

    /**
     * Test whether the size is valid
     * @param size Size to validate
     * @return true if the size passes the constraint
     */
    protected isValidSize(size: number): boolean {
        return this.minimum <= size && size <= this.maximum;
    }

}

export {
    SizeConstraintValidator
};
