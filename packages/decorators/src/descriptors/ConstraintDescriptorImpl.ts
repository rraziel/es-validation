import { ConstraintDescriptor } from './ConstraintDescriptor';

/**
 * Constraint descriptor
 */
class ConstraintDescriptorImpl implements ConstraintDescriptor {
    private readonly attributes: Map<string, any>;
    private readonly name: string;

    /**
     * Class constructor
     * @param constraintName Constraint name
     * @param attributes     Attributes
     */
    constructor(constraintName: string, attributes: Map<string, any>) {
        this.attributes = attributes;
        this.name = constraintName;
    }

    /**
     * Get the constraint name
     * @return Constraint name
     */
    getName(): string {
        return this.name;
    }

    /**
     * Get the constraint attributes
     * @return Constraint attributes
     */
    getAttributes(): Map<string, any> {
        return this.attributes;
    }

    /**
     * Get a constraint attribute
     * @param attributeName Attribute name
     * @param <T>           Attribute value type
     * @return Attribute value
     */
    getAttribute<T>(attributeName: string): T {
        const attributeValue: T|undefined = this.attributes.get(attributeName);
        if (attributeValue !== undefined) {
            return attributeValue;
        }

        throw new Error(`unknown attribute ${attributeName}`);
    }

}

export {
    ConstraintDescriptorImpl
};
