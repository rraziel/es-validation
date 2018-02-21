import {ConstraintDecorator} from './constraint-decorator';
import {getInfoBuilder} from './helper';

/**
 * Past decorator, used to define that an element must be a date in the past
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Past: ConstraintDecorator = (target, propertyKey, descriptor) => getInfoBuilder('Past', target, propertyKey, descriptor).past();

export {
    Past
};
