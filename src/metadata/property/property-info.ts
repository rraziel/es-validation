import {ConstraintInfo} from '../constraint-info';
import 'reflect-metadata';

/**
 * Property information metadata
 */
const PropertyInfoMetadata: Symbol = Symbol('es-validation:property');

/**
 * Property information
 */
interface PropertyInfo extends ConstraintInfo {

}

/**
 * Get property information
 * @param objectClass  Object class
 * @param propertyName Property name
 * @return Property information
 */
function getPropertyInfo<C extends Function>(objectClass: C, propertyName: string): PropertyInfo {
    let propertyInfo: PropertyInfo = Reflect.getOwnMetadata(PropertyInfoMetadata, objectClass, propertyName) || {};
    return propertyInfo;
}

/**
 * Set method information
 * @param componentClass Component class
 * @param propertyName   Property name
 * @param propertyInfo   Property information
 */
function setPropertyInfo<C extends Function>(componentClass: C, propertyName: string, propertyInfo: PropertyInfo): void {
    Reflect.defineMetadata(PropertyInfoMetadata, propertyInfo, componentClass, propertyName);
}

export {
    PropertyInfo,
    getPropertyInfo,
    setPropertyInfo
};
