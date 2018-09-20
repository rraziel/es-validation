import { AbstractConstraintValidator } from './AbstractConstraintValidator';

/**
 * Abstract numeric constraint validator
 */
abstract class AbstractNumericConstraintValidator extends AbstractConstraintValidator<number> {

    /**
     * Class constructor
     */
    constructor() {
        super(Number);
    }

}

export {
    AbstractNumericConstraintValidator
};
