import { ConstrainedDescriptor } from './ConstrainedDescriptor';
import { ClassConstructor } from '../utils';

/**
 * Property descriptor
 * @param <T> Property type
 */
interface PropertyDescriptor<T> extends ConstrainedDescriptor {

    /**
     * Get the property key
     * @return Property key
     */
    getPropertyKey(): string|symbol;

    /**
     * Get the property class
     * @return Property class
     */
    getPropertyClass(): ClassConstructor<T>;

}

export {
    PropertyDescriptor
};
