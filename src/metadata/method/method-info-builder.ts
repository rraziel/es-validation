import {AbstractInfoBuilder} from '../abstract-info-builder';
import {ConstraintInfo} from '../constraint-info';
import {getMethodInfo, setMethodInfo, MethodInfo} from './method-info';

/**
 * Method information builder
 */
class MethodInfoBuilder extends AbstractInfoBuilder<MethodInfo, MethodInfoBuilder> {
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
    protected getConstraintInfo(): MethodInfo {
        return getMethodInfo(this.target.constructor, <string> this.propertyKey);
    }

    /**
     * Set the constraint information
     * @param constraintInfo Constraint information
     */
    protected setConstraintInfo(constraintInfo: MethodInfo): void {
        setMethodInfo(this.target.constructor, <string> this.propertyKey, constraintInfo);
    }

    /**
     * Get a method information builder for a specified class method
     * @param target      Target
     * @param propertyKey Property key
     * @return Method information builder
     */
    static of(target: Object, propertyKey: string|symbol): MethodInfoBuilder {
        return new MethodInfoBuilder(target, propertyKey);
    }

}

export {
    MethodInfoBuilder
};
