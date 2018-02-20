import {ConstraintViolation} from './constraint-violation';
import {ClassConstructor} from '../utils';

interface ClassDescriptor {

}

/**
 * Validator interface
 */
interface Validator {

    getConstraintsForClass<T>(objectClass: ClassConstructor<T>): ClassDescriptor;

    validate<T>(object: T): Set<ConstraintViolation<T>>;

    validateProperty<T>(object: T, propertyName: string): Set<ConstraintViolation<T>>;

    validateValue<T, U>(objectClass: ClassConstructor<T>, propertyName: string, value: U): Set<ConstraintViolation<T>>;

    validateParameters<T>(object: T, method: Function, parameterValues: any[]): Set<ConstraintViolation<T>>;

    validateReturnValue<T>(object: T, method: Function, returnValue: any): Set<ConstraintViolation<T>>;

    /**
     * Get the implementation-specific instance of the constraint violation (an exception is thrown if the class is not correct)
     * @param wrappedClass Wrapped class
     * @param <U>          Wrapped type
     * @return Implementation-specific instance
     */
    unwrap<U>(wrappedClass: ClassConstructor<U>): U;

}

export {
    Validator
};
