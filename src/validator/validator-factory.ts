import {DateProvider} from './date-provider';
import {Validator} from './validator';
import {ClassConstructor} from '../utils';

/**
 * Validator factory interface
 */
interface ValidatorFactory {

    /**
     * Get an initialized validator instance
     * @return Validator instance
     */
    getValidator(): Validator;

    /**
     * Get the date provider configured at initialization time for the factory
     * @return Date provider
     */
    getDateProvider(): DateProvider;

    /**
     * Get the implementation-specific instance of the validator factory (an exception is thrown if the class is not correct)
     * @param wrappedClass Wrapped class
     * @param <U>          Wrapped type
     * @return Implementation-specific instance
     */
    unwrap<U extends ValidatorFactory>(wrappedClass: ClassConstructor<U>): U;

}

export {
    ValidatorFactory
};
