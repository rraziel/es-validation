import { ConstrainedDescriptorImpl } from './ConstrainedDescriptorImpl';
import { PropertyDescriptor } from './PropertyDescriptor';
import { ClassConstructor } from '../utils';

/**
 * Property descriptor implementation
 * @param <T> Property type
 */
class PropertyDescriptorImpl<T> extends ConstrainedDescriptorImpl implements PropertyDescriptor<T> {
    private readonly propertyClass: ClassConstructor<T>;
    private readonly propertyKey: string|symbol;

    /**
     * Class constructor
     * @param typeClass   Property class
     * @param propertyKey Property key
     */
    constructor(propertyKey: string|symbol, propertyClass: ClassConstructor<T>) {
        super();
        this.propertyClass = propertyClass;
        this.propertyKey = propertyKey;
    }

    /**
     * Get the property key
     * @return Property key
     */
    getPropertyKey(): string|symbol {
        return this.propertyKey;
    }

    /**
     * Get the property class
     * @return Property class
     */
    getPropertyClass(): ClassConstructor<T> {
        return this.propertyClass;
    }

}

export {
    PropertyDescriptorImpl
};
