import {ConstraintInfo} from '../constraint-info';
import 'reflect-metadata';

/**
 * Method information metadata
 */
const MethodInfoMetadata: Symbol = Symbol('es-validation:method');

/**
 * Method information
 */
interface MethodInfo extends ConstraintInfo {
    parameters?: ConstraintInfo[];
    returnValue?: ConstraintInfo;
}

/**
 * Get method information
 * @param objectClass Object class
 * @param methodName  Method name
 * @return Method information
 */
function getMethodInfo<C extends Function>(objectClass: C, methodName?: string): MethodInfo {
    if (methodName) {
        let methodInfo: MethodInfo = Reflect.getOwnMetadata(MethodInfoMetadata, objectClass, methodName) || {};
        return methodInfo;
    } else {
        let methodInfo: MethodInfo = Reflect.getOwnMetadata(MethodInfoMetadata, objectClass) || {};
        return methodInfo;
    }
}

/**
 * Set method information
 * @param componentClass Component class
 * @param methodName     Method name
 * @param methodInfo     Method information
 */
function setMethodInfo<C extends Function>(componentClass: C, methodName: string, methodInfo: MethodInfo): void {
    if (methodName) {
        Reflect.defineMetadata(MethodInfoMetadata, methodInfo, componentClass, methodName);
    } else {
        Reflect.defineMetadata(MethodInfoMetadata, methodInfo, componentClass);
    }
}

export {
    MethodInfo,
    getMethodInfo,
    setMethodInfo
};
