import { ConstrainedDescriptor } from './ConstrainedDescriptor';
import { MethodParameterDescriptor } from './MethodParameterDescriptor';
import { ClassConstructor } from '../utils';

/**
 * Method descriptor, where the constraints apply to its returned value
 * @param <R> Return type
 */
interface MethodDescriptor<R> extends ConstrainedDescriptor {

    /**
     * Get the property key
     * @return Proprety key
     */
    getPropertyKey(): string|symbol|undefined;

    /**
     * Get the return class
     * @return Return class
     */
    getReturnClass(): ClassConstructor<R>|undefined;

    /**
     * Get the parameter descriptors
     * @return Parameter descriptors
     */
    getParameterDescriptors(): ReadonlyArray<MethodParameterDescriptor<any>>;

}

export {
    MethodDescriptor
};
