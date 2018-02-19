import {AbstractInfoBuilder} from '../abstract-info-builder';
import {ConstraintInfo} from '../constraint-info';
import {getMethodInfo, setMethodInfo, MethodInfo} from './method-info';

/**
 * Method information builder
 */
class MethodInfoBuilder extends AbstractInfoBuilder<ConstraintInfo, MethodInfoBuilder> {
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
    protected getConstraintInfo(): ConstraintInfo {
        return getMethodInfo(this.target.constructor, <string> this.propertyKey).returnValue || {};
    }

    /**
     * Set the constraint information
     * @param constraintInfo Constraint information
     */
    protected setConstraintInfo(constraintInfo: ConstraintInfo): void {
        let methodInfo: MethodInfo = getMethodInfo(this.target.constructor, <string> this.propertyKey);
        methodInfo.returnValue = constraintInfo;
        setMethodInfo(this.target.constructor, <string> this.propertyKey, methodInfo);
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
