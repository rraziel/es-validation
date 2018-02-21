import {ConstraintDecorator} from './constraint-decorator';
import {getInfoBuilder} from './helper';

/**
 * Negative decorator, used to define that an element must be a negative number
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Negative: ConstraintDecorator = (target, propertyKey, descriptor) => getInfoBuilder('Negative', target, propertyKey, descriptor).negative();

export {
    Negative
};
