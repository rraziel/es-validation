import {ClassConstructor} from '../utils';

/**
 * Constraint validator factory interface
 */
interface ConstraintValidatorFactory {

    /**
     * Get the implementation-specific instance of the constraint validator factory (an exception is thrown if the class is not correct)
     * @param wrappedClass Wrapped class
     * @param <U>          Wrapped type
     * @return Implementation-specific instance
     */
    unwrap<U extends ConstraintValidatorFactory>(wrappedClass: ClassConstructor<U>): U;

}

export {
    ConstraintValidatorFactory
};
