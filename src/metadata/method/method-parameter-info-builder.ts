import {AbstractInfoBuilder} from '../abstract-info-builder';
import {ConstraintInfo} from '../constraint-info';
import {getMethodInfo, setMethodInfo, MethodInfo, MethodInfoBuilder} from '../method';
import {MethodParameterInfo} from './method-parameter-info';

/**
 * Method parameter information builder
 */
class MethodParameterInfoBuilder extends AbstractInfoBuilder<MethodParameterInfo, MethodParameterInfoBuilder> {
    private methodInfoBuilder: MethodInfoBuilder;
    private parameterIndex: number;
    private propertyKey: string|symbol;
    private target: Object;

    /**
     * Class constructor
     * @param target         Target
     * @param propertyKey    Property key
     * @param parameterIndex Parameter index
     */
    private constructor(target: Object, propertyKey: string|symbol, parameterIndex: number) {
        super();
        this.target = target;
        this.propertyKey = propertyKey;
        this.parameterIndex = parameterIndex;
        this.methodInfoBuilder = MethodInfoBuilder.of(target, propertyKey);
    }

    /**
     * Get the constraint information
     * @return Constraint information
     */
    protected getConstraintInfo(): ConstraintInfo {
        let objectClass: Function = this.getObjectClass();
        let methodInfo: MethodInfo = getMethodInfo(objectClass, <string> this.propertyKey);
        return (methodInfo.parameters && methodInfo.parameters[this.parameterIndex]) || {};
    }

    /**
     * Set the constraint information
     * @param constraintInfo Constraint information
     */
    protected setConstraintInfo(constraintInfo: ConstraintInfo): void {
        let objectClass: Function = this.getObjectClass();
        let methodInfo: MethodInfo = getMethodInfo(objectClass, <string> this.propertyKey);
        methodInfo.parameters = methodInfo.parameters || [];
        while (!(this.parameterIndex < methodInfo.parameters.length)) {
            methodInfo.parameters.push(null);
        }
        methodInfo.parameters[this.parameterIndex] = constraintInfo;
        setMethodInfo(objectClass, <string> this.propertyKey, methodInfo);
    }

    /**
     * Get the object class, where target would be a function for static/constructor methods
     * @return Object class
     */
    private getObjectClass(): Function {
        return this.target instanceof Function ? this.target :this.target.constructor;
    }

    /**
     * Get a method parameter information builder for a specified class method
     * @param target         Target
     * @param propertyKey    Property key
     * @param parameterIndex Parameter index
     * @return Parameter information builder
     */
    static of(target: Object, propertyKey: string|symbol, parameterIndex: number): MethodParameterInfoBuilder {
        return new MethodParameterInfoBuilder(target, propertyKey, parameterIndex);
    }

}

export {
    MethodParameterInfoBuilder
};
