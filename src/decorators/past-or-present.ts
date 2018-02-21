import {ConstraintDecorator} from './constraint-decorator';
import {getInfoBuilder} from './helper';

/**
 * PastOrPresent decorator, used to define that an element must be a date in the past or the present
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const PastOrPresent: ConstraintDecorator = (target, propertyKey, descriptor) => getInfoBuilder('PastOrPresent', target, propertyKey, descriptor).past(true);

export {
    PastOrPresent
};
