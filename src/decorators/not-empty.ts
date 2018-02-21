import {ConstraintDecorator} from './constraint-decorator';
import {getInfoBuilder} from './helper';

/**
 * NotEmpty decorator, used to define that an element must be not be empty
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const NotEmpty: ConstraintDecorator = (target, propertyKey, descriptor) => getInfoBuilder('NotEmpty', target, propertyKey, descriptor).notEmpty();

export {
    NotEmpty
};
