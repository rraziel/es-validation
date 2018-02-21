import {DateProvider} from './date-provider';
import {ClassConstructor} from '../utils';

/**
 * Constraint validation context interface
 */
interface ConstraintValidationContext {

    /**
     * Get the date provider
     * @return Date provider
     */
    getDateProvider(): DateProvider;

    /**
     * Get the implementation-specific instance of the constraint validation context (an exception is thrown if the class is not correct)
     * @param wrappedClass Wrapped class
     * @param <U>          Wrapped type
     * @return Implementation-specific instance
     */
    unwrap<U extends ConstraintValidationContext>(wrappedClass: ClassConstructor<U>): U;

}

export {
    ConstraintValidationContext
};
