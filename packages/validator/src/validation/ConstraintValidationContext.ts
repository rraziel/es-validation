import { Validator } from './Validator';
import { ClassConstructor } from '@es-validation/decorators';

/**
 * Constraint validation context interface
 */
abstract class ConstraintValidationContext {

    /**
     * Get the validator
     * @return Validator
     */
    abstract getValidator(): Validator;

    /**
     * Get the implementation-specific instance of the constraint validation context (an exception is thrown if the class is not correct)
     * @param wrappedClass Wrapped class
     * @param <U>          Wrapped type
     * @return Implementation-specific instance
     */
    abstract unwrap<U extends ConstraintValidationContext>(wrappedClass: ClassConstructor<U>): U;

}

export {
    ConstraintValidationContext
};
