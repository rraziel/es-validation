import { ConstraintViolation } from './ConstraintViolation';
import { DateProvider } from './DateProvider';
import { ValidatorOptions } from './ValidatorOptions';
import { ConstraintValidatorFactory } from '../constraints';
import {
    loadClassDescriptor,
    ClassConstructor,
    ClassDescriptor
} from '@es-validation/decorators';

/**
 * Validator
 */
class Validator {
    private readonly constraintValidatorFactories: Map<string, ConstraintValidatorFactory<any>>;
    private readonly validatorOptions: ValidatorOptions;
    private readonly dateProvider: DateProvider;

    /**
     * Class constructor
     * @param constraintValidatorFactories Constraint validator factories
     * @param validatorOptions             Validator options
     * @param dateProvider                 Date provider
     */
    constructor(constraintValidatorFactories: Map<string, ConstraintValidatorFactory<any>>, validatorOptions?: ValidatorOptions, dateProvider?: DateProvider) {
        this.constraintValidatorFactories = constraintValidatorFactories;
        this.validatorOptions = validatorOptions || new ValidatorOptions();
        this.dateProvider = dateProvider || new DateProvider();
    }

    /**
     * Get constraints for a class
     * @param objectClass Object class
     * @param <T>         Object type
     * @return Constraints for the class
     */
    getConstraintsForClass<T>(objectClass: ClassConstructor<T>): ClassDescriptor<T>|undefined {
        return loadClassDescriptor(objectClass);
    }

    /**
     * Get the date provider
     * @return Date provider
     */
    getDateProvider(): DateProvider {
        return this.dateProvider;
    }

    /**
     * Get the validator options
     * @return Validator options
     */
    getValidatorOptions(): ValidatorOptions {
        return this.validatorOptions;
    }

    /**
     * Validate an object
     * @param object Object
     * @param <T>    Object type
     * @return Set of constraint violations
     */
    validate<T>(object: T): Set<ConstraintViolation<T>> {
        // TODO
        return new Set<ConstraintViolation<T>>();
    }

    /**
     * Validate an object property
     * @param object      Object
     * @param propertyKey Property key
     * @param <T>         Object type
     * @return Set of constraint violations
     */
    validateProperty<T>(object: T, propertyKey: string|symbol): Set<ConstraintViolation<T>> {
        // TODO
        return new Set<ConstraintViolation<T>>();
    }

    /**
     * Validate a value for a property
     * @param objectClass Objet class
     * @param propertyKey Property key
     * @param value       Value
     * @param <T>         Object type
     * @param <U>         Value type
     * @return Set of constraint violations
     */
    validateValue<T, U>(objectClass: ClassConstructor<T>, propertyKey: string|symbol, value: U): Set<ConstraintViolation<T>> {
        // TODO
        return new Set<ConstraintViolation<T>>();
    }

    /**
     * Validate a method's parameters
     * @param object          Object
     * @param propertyKey     Property key
     * @param parameterValues Parameter values
     * @param <T>             Object type
     * @return Set of constraint violations
     */
    validateParameters<T>(object: T, propertyKey: string|symbol, ...parameterValues: Array<any>): Set<ConstraintViolation<T>> {
        // TODO
        return new Set<ConstraintViolation<T>>();
    }

    /**
     * Validate a method's return value
     * @param object      Object
     * @param methodKey   Property key
     * @param returnValue Return value
     * @param <T>         Object type
     * @param <R>         Return type
     * @return Set of constraint violations
     */
    validateReturnValue<T, R>(object: T, propertyKey: string|symbol, returnValue: R): Set<ConstraintViolation<T>> {
        // TODO
        return new Set<ConstraintViolation<T>>();
    }

}

export {
    Validator
};
