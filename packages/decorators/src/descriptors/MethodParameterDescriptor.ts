import { ConstrainedDescriptor } from './ConstrainedDescriptor';
import { ClassConstructor } from '../utils';

/**
 * Method parameter descriptor
 * @param <T> Method parameter type
 */
interface MethodParameterDescriptor<T> extends ConstrainedDescriptor {

    /**
     * Get the parameter index
     * @return Parameter index
     */
    getParameterIndex(): number;

    /**
     * Get the parameter class
     * @return Parameter class
     */
    getParameterClass(): ClassConstructor<T>;

}

export {
    MethodParameterDescriptor
};
