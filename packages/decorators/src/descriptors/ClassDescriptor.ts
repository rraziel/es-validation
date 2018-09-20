import { MethodDescriptor } from './MethodDescriptor';
import { PropertyDescriptor } from './PropertyDescriptor';

/**
 * Class descriptor interface
 * @param <C> Class type
 */
interface ClassDescriptor<C> {

    /**
     * Get a property descriptor
     * @param propertyKey Property key
     * @param <T>         Property type
     * @return Property descriptor
     */
    getPropertyDescriptor<T>(propertyKey: string|symbol): PropertyDescriptor<T>|undefined;

    /**
     * Get the constructor descriptor
     * @param constructorDescriptor Constructor descriptor
     * @return Constructor descriptor
     */
    getConstructorDescriptor(): MethodDescriptor<void>|undefined;

    /**
     * Get a method descriptor
     * @param propertyKey Property key
     * @param <R>         Method return type
     * @return Method descriptor
     */
    getMethodDescriptor<R>(propertyKey: string|symbol): MethodDescriptor<R>|undefined;

}

export {
    ClassDescriptor
};
