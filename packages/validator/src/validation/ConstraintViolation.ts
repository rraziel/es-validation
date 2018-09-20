import { ClassConstructor, ConstraintDescriptor } from '@es-validation/decorators';

/**
 * Constraint violation
 * @param <T> Root object type
 */
class ConstraintViolation<T> {

    /**
     * Get the interpolated message for the constraint violation
     * @return Interpolated message
     */
    getMessage(): string {
        return 'TODO';
    }

    /**
     * Get the non-interpolated message for the constraint violation
     * @return Non-interpolated message
     */
    getMessageTemplate(): string {
        return 'TODO';
    }

    /**
     * Get the root object:
     * - the object being validated
     * - the object the method is executed on if it is a method validation
     * - null if the constraint violation was returned by validateValue()
     * @return Root object
     */
    getRootObject(): T {
        return undefined as any as T; // TODO
    }

    /**
     * Get the root object's class
     * @return Root object class
     */
    getRootObjectClass(): ClassConstructor<T> {
        return undefined as any as ClassConstructor<T>; // TODO
    }

    /**
     * Get the leaf object:
     * - the object the constraint is applied on
     * - the object hosting the property the constraint is applied on
     * - the object the method is executed on if it is a method parameter or return value
     * - null if the constraint violation was returned by validateValue() or if it is a constructor parameter
     * @return Leaf object
     */
    getLeafObject(): object|null {
        return null; // TODO
    }

    /**
     * Get the list of constructor or method parameters, if the violation comes from validating method or constructor parameters
     * @return Executable parameters
     */
    getExecutableParameters(): Array<Object>|undefined {
        return undefined; // TODO
    }

    /**
     * Get the return value of the method invocation, if the violation comes from validating a method's return value
     * @return Executable return value
     */
    getExecutableReturnValue(): Object|undefined {
        return undefined; // TODO
    }

    /**
     * Get the property path from the root object
     * @return Property path
     */
    getPropertyPath(): any {
        return null; // TODO
    }

    /**
     * Get the value failing to pass the constraint
     * @return Invalid value
     */
    getInvalidValue(): Object {
        return {}; // TODO
    }

    /**
     * Get the constraint descriptor reported to fail
     * @return Constraint descriptor
     */
    getConstraintDescriptor(): ConstraintDescriptor {
        return null as any as ConstraintDescriptor; // TODO
    }

}

export {
    ConstraintViolation
};
