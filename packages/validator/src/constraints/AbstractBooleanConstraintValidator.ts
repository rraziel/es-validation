import { AbstractConstraintValidator } from './AbstractConstraintValidator';

/**
 * Abstract boolean constraint validator
 */
abstract class AbstractBooleanConstraintValidator extends AbstractConstraintValidator<boolean> {

    /**
     * Class constructor
     */
    constructor() {
        super(Boolean);
    }

}

export {
    AbstractBooleanConstraintValidator
};
