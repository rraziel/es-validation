import {ConstraintDecorator} from './constraint-decorator';
import {getInfoBuilder} from './helper';

/**
 * PositiveOrZero decorator, used to define that an element must be a positive number or zero
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const PositiveOrZero: ConstraintDecorator = (target, propertyKey, descriptor) => getInfoBuilder('PositiveOrZero', target, propertyKey, descriptor).positive(true);

export {
    PositiveOrZero
};
