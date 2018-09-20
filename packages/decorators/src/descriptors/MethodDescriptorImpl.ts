import { ConstrainedDescriptorImpl } from './ConstrainedDescriptorImpl';
import { MethodDescriptor } from './MethodDescriptor';
import { MethodParameterDescriptor } from './MethodParameterDescriptor';
import { MethodParameterDescriptorImpl } from './MethodParameterDescriptorImpl';
import {
    getMethodParameterClass,
    getMethodReturnClass
} from './ClassMetadata';
import { ClassConstructor } from '../utils';

/**
 * Method descriptor implementation
 * @param <C> Class type
 * @param <R> Return type
 */
class MethodDescriptorImpl<C, R> extends ConstrainedDescriptorImpl implements MethodDescriptor<R> {
    private readonly parameterDescriptors: Array<MethodParameterDescriptorImpl<any>> = [];
    private readonly propertyKey: string|symbol|undefined;
    private readonly returnClass: ClassConstructor<R>|undefined;
    private readonly typeClass: ClassConstructor<C>;

    /**
     * Class constructor
     * @param typeClass   Type class
     * @param propertyKey Property key
     * @param returnClass Return class
     */
    constructor(typeClass: ClassConstructor<C>, propertyKey: string|symbol|undefined) {
        super();
        this.propertyKey = propertyKey;
        this.typeClass = typeClass;

        if (propertyKey) {
            this.returnClass = getMethodReturnClass(typeClass, propertyKey);
        }
    }

    /**
     * Get the property key
     * @return Proprety key
     */
    getPropertyKey(): string|symbol|undefined {
        return this.propertyKey;
    }

    /**
     * Get the return class
     * @return Return class
     */
    getReturnClass(): ClassConstructor<R>|undefined {
        return this.returnClass;
    }

    /**
     * Get the parameter descriptors
     * @return Parameter descriptors
     */
    getParameterDescriptors(): ReadonlyArray<MethodParameterDescriptor<any>> {
        return this.parameterDescriptors;
    }

    /**
     * Add a parameter descriptor
     * @param parameterIndex Parameter index
     * @param callback       Callback
     * @param <T>                 Parameter type
     */
    updateParameterDescriptor<T>(parameterIndex: number, callback: (parameterDescriptor: MethodParameterDescriptorImpl<T>) => void): void {
        let parameterDescriptor: MethodParameterDescriptorImpl<T>|undefined = this.parameterDescriptors.find(descriptor => descriptor.getParameterIndex() === parameterIndex);
        if (!parameterDescriptor) {
            let parameterClass: ClassConstructor<T> = getMethodParameterClass<C, T>(this.typeClass, this.propertyKey, parameterIndex);
            parameterDescriptor = new MethodParameterDescriptorImpl<T>(parameterClass, parameterIndex);
            this.parameterDescriptors.push(parameterDescriptor);
        }

        callback(parameterDescriptor);
    }

}

export {
    MethodDescriptorImpl
};
