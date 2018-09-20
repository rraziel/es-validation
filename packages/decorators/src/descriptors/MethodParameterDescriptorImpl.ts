import { ConstrainedDescriptorImpl } from './ConstrainedDescriptorImpl';
import { MethodParameterDescriptor } from './MethodParameterDescriptor';
import { ClassConstructor } from '../utils';

/**
 * Method parameter descriptor implementation
 * @param <T> Method parameter type
 */
class MethodParameterDescriptorImpl<T> extends ConstrainedDescriptorImpl implements MethodParameterDescriptor<T> {
    private readonly parameterClass: ClassConstructor<T>;
    private readonly parameterIndex: number;

    /**
     * Class constructor
     * @param parameterClass Parameter class
     * @param parameterIndex Parameter index
     */
    constructor(parameterClass: ClassConstructor<T>, parameterIndex: number) {
        super();
        this.parameterClass = parameterClass;
        this.parameterIndex = parameterIndex;
    }

    /**
     * Get the parameter index
     * @return Parameter index
     */
    getParameterIndex(): number {
        return this.parameterIndex;
    }

    /**
     * Get the parameter class
     * @return Parameter class
     */
    getParameterClass(): ClassConstructor<T> {
        return this.parameterClass;
    }

}

export {
    MethodParameterDescriptorImpl
};
