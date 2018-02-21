import {ConstraintDecorator} from './constraint-decorator';
import {getInfoBuilder} from './helper';

/**
 * Null decorator, used to define that an element must be null
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Null: ConstraintDecorator = (target, propertyKey, descriptor) => getInfoBuilder('Null', target, propertyKey, descriptor).null();

export {
    Null
};
