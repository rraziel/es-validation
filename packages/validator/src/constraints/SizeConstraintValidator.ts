import { AbstractSizeConstraintValidator } from './AbstractSizeConstraintValidator';
import { ConstraintDescriptor } from '@es-validation/decorators';

/**
 * Size constraint validator
 */
class SizeConstraintValidator extends AbstractSizeConstraintValidator {
    private readonly minimum: number;
    private readonly maximum: number;

    /**
     * Class constructor
     * @param constraintDescriptor Constraint descriptor
     */
    constructor(constraintDescriptor: ConstraintDescriptor) {
        super();
        this.minimum = constraintDescriptor.getAttribute<number>('minimum');
        this.maximum = constraintDescriptor.getAttribute<number>('maximum');
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
