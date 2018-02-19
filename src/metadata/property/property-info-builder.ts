import {AbstractInfoBuilder} from '../abstract-info-builder';
import {getPropertyInfo, setPropertyInfo, PropertyInfo} from './property-info';

/**
 * Property information builder
 */
class PropertyInfoBuilder extends AbstractInfoBuilder<PropertyInfo, PropertyInfoBuilder> {
    private propertyKey: string|symbol;
    private target: Object;

    /**
     * Class constructor
     * @param target      Target
     * @param propertyKey Property key
     */
    private constructor(target: Object, propertyKey: string|symbol) {
        super();
        this.target = target;
        this.propertyKey = propertyKey;
    }

    /**
     * Get the constraint information
     * @return Constraint information
     */
    protected getConstraintInfo(): PropertyInfo {
        return getPropertyInfo(this.target.constructor, <string> this.propertyKey);
    }

    /**
     * Set the constraint information
     * @param constraintInfo Constraint information
     */
    protected setConstraintInfo(constraintInfo: PropertyInfo): void {
        setPropertyInfo(this.target.constructor, <string> this.propertyKey, constraintInfo);
    }

    /**
     * Get a property information builder for a specified class property
     * @param target         Target
     * @param propertyKey    Property key
     * @return Property information builder
     */
    static of(target: Object, propertyKey: string|symbol): PropertyInfoBuilder {
        return new PropertyInfoBuilder(target, propertyKey);
    }

}

export {
    PropertyInfoBuilder
};
