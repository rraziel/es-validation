import {ConstraintDecorator} from './constraint-decorator';
import {getInfoBuilder} from './helper';

/**
 * Future decorator, used to define that an element must be a date in the future
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Future: ConstraintDecorator = (target, propertyKey, descriptor) => getInfoBuilder('Future', target, propertyKey, descriptor).future();

export {
    Future
};
