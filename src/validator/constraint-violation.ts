import {ClassConstructor} from '../utils';
import {ConstraintDescriptor} from '../metadata';

/**
 * Constraint violation interface
 * @param <T> Root object type
 */
interface ConstraintViolation<T> {

    /**
     * Get the interpolated message for the constraint violation
     * @return Interpolated message
     */
    getMessage(): string;

    /**
     * Get the non-interpolated message for the constraint violation
     * @return Non-interpolated message
     */
    getMessageTemplate(): string;

    /**
     * Get the root object:
     * - the object being validated
     * - the object the method is executed on if it is a method validation
     * - null if the constraint violation was returned by validateValue()
     * @return Root object
     */
    getRootObject(): T;

    /**
     * Get the root object's class
     * @return Root object class
     */
    getRootObjectClass(): ClassConstructor<T>;

    /**
     * Get the leaf object:
     * - the object the constraint is applied on
     * - the object hosting the property the constraint is applied on
     * - the object the method is executed on if it is a method parameter or return value
     * - null if the constraint violation was returned by validateValue() or if it is a constructor parameter
     */
    getLeafObject(): Object;

    /**
     * Get the list of constructor or method parameters, if the violation comes from validating method or constructor parameters
     * @return Executable parameters
     */
    getExecutableParameters(): Object[];

    /**
     * Get the return value of the method invocation, if the violation comes from validating a method's return value
     * @return Executable return value
     */
    getExecutableReturnValue(): Object;

    /**
     * Get the property path from the root object
     * @return Property path
     */
    getPropertyPath(): any;

    /**
     * Get the value failing to pass the constraint
     * @return Invalid value
     */
    getInvalidValue(): Object;

    /**
     * Get the constraint metadata reported to fail
     * @return Constraint metadata
     */
    getConstraintDescriptor(): ConstraintDescriptor<any>;

    /**
     * Get the implementation-specific instance of the constraint violation (an exception is thrown if the class is not correct)
     * @param wrappedClass Wrapped class
     * @param <U>          Wrapped type
     * @return Implementation-specific instance
     */
    unwrap<U>(wrappedClass: ClassConstructor<U>): U;

}

export {
    ConstraintViolation
};
