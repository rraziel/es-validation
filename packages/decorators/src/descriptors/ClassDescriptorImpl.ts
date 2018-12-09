import { ClassDescriptor } from './ClassDescriptor';
import { MethodDescriptor } from './MethodDescriptor';
import { MethodDescriptorImpl } from './MethodDescriptorImpl';
import { PropertyDescriptor } from './PropertyDescriptor';
import { PropertyDescriptorImpl } from './PropertyDescriptorImpl';
import { getPropertyClass } from './ClassMetadata';
import { ClassConstructor } from '../utils';

/**
 * Class descriptor implementation
 * @param <C> Class type
 */
class ClassDescriptorImpl<C> implements ClassDescriptor<C> {
    private readonly propertyDescriptors: Map<string|symbol, PropertyDescriptorImpl<any>> = new Map<string|symbol, PropertyDescriptorImpl<any>>();
    private readonly methodDescriptors: Map<string|symbol, MethodDescriptorImpl<C, any>> = new Map<string|symbol, MethodDescriptorImpl<C, any>>();
    private readonly targetClass: ClassConstructor<C>;
    private constructorDescriptor: MethodDescriptorImpl<C, void>|undefined = undefined;

    /**
     * Class consturctor
     * @param targetClass Target class
     */
    constructor(targetClass: ClassConstructor<C>) {
        this.targetClass = targetClass;
    }

    /**
     * Get a property descriptor
     * @param propertyKey Property key
     * @param <T>         Property type
     * @return Property descriptor
     */
    getPropertyDescriptor<T>(propertyKey: string|symbol): PropertyDescriptor<T>|undefined {
        return this.propertyDescriptors.get(propertyKey);
    }

    /**
     * Set a property descriptor
     * @param propertyKey        Property key
     * @param propertyClass      Property class
     * @param propertyDescriptor Property descriptor
     * @param <T>                Property type
     */
    updatePropertyDescriptor<T>(propertyKey: string|symbol, callback: (propertyDescriptor: PropertyDescriptorImpl<T>) => void): void {
        let propertyDescriptor: PropertyDescriptorImpl<T>|undefined = this.propertyDescriptors.get(propertyKey);
        if (!propertyDescriptor) {
            const propertyClass: ClassConstructor<T> = getPropertyClass(this.targetClass, propertyKey);
            propertyDescriptor = new PropertyDescriptorImpl(propertyKey, propertyClass);
            this.propertyDescriptors.set(propertyKey, propertyDescriptor);
        }

        callback(propertyDescriptor);
    }

    /**
     * Get the constructor descriptor
     * @param constructorDescriptor Constructor descriptor
     * @return Constructor descriptor
     */
    getConstructorDescriptor(): MethodDescriptor<void>|undefined {
        return this.constructorDescriptor;
    }

    /**
     * Update the constructor descriptor
     * @param callback Callback function
     */
    updateConstructorDescriptor(callback: (methodDescriptor: MethodDescriptorImpl<C, void>) => void): void {
        if (!this.constructorDescriptor) {
            this.constructorDescriptor = new MethodDescriptorImpl<C, void>(this.targetClass, undefined);
        }

        callback(this.constructorDescriptor);
    }

    /**
     * Get a method descriptor
     * @param propertyKey Property key
     * @param <R>         Method return type
     * @return Method descriptor
     */
    getMethodDescriptor<R>(propertyKey: string|symbol): MethodDescriptor<R>|undefined {
        return this.methodDescriptors.get(propertyKey);
    }

    /**
     * Update a method descriptor
     * @param propertyKey Property key
     * @param callback    Callback
     * @param <R>         Method return type
     */
    updateMethodDescriptor<R>(propertyKey: string|symbol, callback: (methodDescriptor: MethodDescriptorImpl<C, R>) => void): void {
        let methodDescriptor: MethodDescriptorImpl<C, R>|undefined = this.methodDescriptors.get(propertyKey);
        if (!methodDescriptor) {
            methodDescriptor = new MethodDescriptorImpl<C, R>(this.targetClass, propertyKey);
            this.methodDescriptors.set(propertyKey, methodDescriptor);
        }

        callback(methodDescriptor);
    }

}

export {
    ClassDescriptorImpl
};
