import {ConstraintDecorator} from './constraint-decorator';
import {getInfoBuilder} from './helper';

/**
 * FutureOrPresent decorator, used to define that an element must be a date in the future or the present
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const FutureOrPresent: ConstraintDecorator = (target, propertyKey, descriptor) => getInfoBuilder('FutureOrPresent', target, propertyKey, descriptor).future(true);

export {
    FutureOrPresent
};
