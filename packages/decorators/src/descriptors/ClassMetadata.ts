import { ClassDescriptor } from './ClassDescriptor';
import { ClassConstructor } from '../utils';
import 'reflect-metadata';

const METADATAKEY_CLASS: Symbol = Symbol('es-validation:class');
const METADATAKEY_PARAMTYPES: string = 'design:paramtypes';
const METADATAKEY_RETURNTYPE: string = 'design:returntype';
const METADATAKEY_TYPE: string = 'design:type';

/**
 * Load a class descriptor from metadata
 * @param targetClass Target class
 * @param <T>         Class type
 * @return Class descriptor
 */
function loadClassDescriptor<T>(targetClass: ClassConstructor<T>): ClassDescriptor<T>|undefined {
    let classDescriptor: ClassDescriptor<T>|undefined = Reflect.getOwnMetadata(METADATAKEY_CLASS, targetClass);
    return classDescriptor;
}

/**
 * Save a class descriptor to metadata
 * @param targetClass     Target class
 * @param classDescriptor Class descriptor
 * @param <T>             Class type
 */
function saveClassDescriptor<T>(targetClass: ClassConstructor<T>, classDescriptor: ClassDescriptor<T>): void {
    Reflect.defineMetadata(METADATAKEY_CLASS, classDescriptor, targetClass);
}

/**
 * Get a property class
 * @param targetClass Target class
 * @param propertyKey Property key
 * @param <T>         Class type
 * @param <P>         Property type
 * @return Property class
 */
function getPropertyClass<T, P>(targetClass: ClassConstructor<T>, propertyKey: string|symbol): ClassConstructor<P> {
    return Reflect.getMetadata(METADATAKEY_TYPE, targetClass.prototype, propertyKey) as ClassConstructor<P>;
}

/**
 * Get a method parameter class
 * @param targetClass    Target class
 * @param parameterIndex Parameter index
 * @param <T>            Class type
 * @param <P>            Parameter type
 * @return Parameter class
 */
function getMethodParameterClass<T, P>(targetClass: ClassConstructor<T>, propertyKey: string|symbol|undefined, parameterIndex: number): ClassConstructor<P> {
    let parameterClasses: Array<Function>;

    if (propertyKey) {
        parameterClasses = Reflect.getMetadata(METADATAKEY_PARAMTYPES, targetClass.prototype, propertyKey);
    } else {
        parameterClasses = Reflect.getMetadata(METADATAKEY_PARAMTYPES, targetClass);
    }

    return parameterClasses[parameterIndex] as ClassConstructor<P>;
}

/**
 * Get a method return class
 * @param targetClass Target class
 * @param propertyKey Property key
 * @param <T>         Class type
 * @param <R>         Return type
 * @return Return class
 */
function getMethodReturnClass<T, R>(targetClass: ClassConstructor<T>, propertyKey: string|symbol): ClassConstructor<R> {
    return Reflect.getMetadata(METADATAKEY_RETURNTYPE, targetClass.prototype, propertyKey) as ClassConstructor<R>;
}

export {
    getMethodParameterClass,
    getMethodReturnClass,
    getPropertyClass,
    loadClassDescriptor,
    saveClassDescriptor
};
