import { AbstractSizeConstraintValidator } from './AbstractSizeConstraintValidator';

/**
 * NotEmpty constraint validator
 */
class NotEmptyConstraintValidator extends AbstractSizeConstraintValidator {

    /**
     * Test whether the size is valid
     * @param size Size to validate
     * @return true if the size passes the constraint
     */
    protected isValidSize(size: number): boolean {
        return size > 0;
    }

}

export {
    NotEmptyConstraintValidator
};
