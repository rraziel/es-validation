
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
     * Get a constraint attribute
     * @param attributeName Attribute name
     * @param <T>           Attribute value type
     * @return Attribute value
     */
    getAttribute<T>(attributeName: string): T|undefined;

}

export {
    ConstraintDescriptor
};
