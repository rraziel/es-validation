
/**
 * Constraint descriptor
 */
interface ConstraintDescriptor {

    /**
     * Get the constraint name
     * @return Constraint name
     */
    getName(): string;

    /**
     * Get the constraint attributes
     * @return Constraint attributes
     */
    getAttributes(): Map<string, any>;

    /**
     * Get a constraint attribute, throwing an error if the attribute name is not recognized
     * @param attributeName Attribute name
     * @param <T>           Attribute value type
     * @return Attribute value
     */
    getAttribute<T>(attributeName: string): T;

}

export {
    ConstraintDescriptor
};
