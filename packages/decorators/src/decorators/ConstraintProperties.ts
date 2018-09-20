
/**
 * Constraint properties
 */
class ConstraintProperties<T> {
    readonly target: object|Function;
    readonly propertyKey: string|symbol|undefined;
    readonly descriptor: TypedPropertyDescriptor<T>|number|undefined;
    readonly constraintName: string;

    attributes?: {[attributeName: string]: any};
    decoratorName?: string;

    /**
     * Class constructor
     * @param target         Target
     * @param propertyKey    Property key
     * @param descriptor     Descriptor
     * @param constraintName Constraint name
     */
    constructor(target: object|Function, propertyKey: string|symbol|undefined, descriptor: TypedPropertyDescriptor<T>|number|undefined, constraintName: string) {
        this.target = target;
        this.propertyKey = propertyKey;
        this.descriptor = descriptor;
        this.constraintName = constraintName;
    }

    /**
     * Test whether the constraint applies to a constructor parameter
     * @return true if the constraint applies to a constructor parameter
     */
    appliesToConstructorParameter(): boolean {
        return this.target instanceof Function;
    }

    /**
     * Test whether the constraint applies to a method return
     * @return true if the constraint applies to a method return
     */
    appliesToMethodReturn(): boolean {
        if (!(this.target instanceof Function)) {
            if (this.descriptor !== undefined) {
                return this.descriptor instanceof Object;
            }
        }

        return false;
    }

    /**
     * Test whether the constraint applies to a method parameter
     * @return true if the constraint applies to a method parameter
     */
    appliesToMethodParameter(): boolean {
        if (!(this.target instanceof Function)) {
            if (this.descriptor !== undefined) {
                return !(this.descriptor instanceof Object);
            }
        }

        return false;
    }

    /**
     * Test whether the constraint applies to a property
     * @return true if the constraint applies to a property
     */
    appliesToProperty(): boolean {
        if (!(this.target instanceof Function)) {
            return this.descriptor === undefined;
        }

        return false;
    }

    /**
     * Test whether the constraint applies to a static member
     * @return true if the constraint applies to a static member
     */
    appliesToStaticMember(): boolean {
        return this.target instanceof Function && this.propertyKey !== undefined;
    }

}

export {
    ConstraintProperties
};
