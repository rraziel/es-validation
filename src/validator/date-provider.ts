import {ClassConstructor} from '../utils';

/**
 * Date provider interface
 */
interface DateProvider {

    /**
     * Return the date which serves as a reference for now
     * @return Date representing now
     */
    getDate(): Date;

    /**
     * Get the implementation-specific instance of the date provider (an exception is thrown if the class is not correct)
     * @param wrappedClass Wrapped class
     * @param <U>          Wrapped type
     * @return Implementation-specific instance
     */
    unwrap<U extends DateProvider>(wrappedClass: ClassConstructor<U>): U;

}

export {
    DateProvider
};
