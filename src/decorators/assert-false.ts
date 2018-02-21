import {ConstraintDecorator} from './constraint-decorator';
import {getInfoBuilder} from './helper';

/**
 * AssertFalse decorator, used to define that an element must be false
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const AssertFalse: ConstraintDecorator = (target, propertyKey, descriptor) => getInfoBuilder('AssertFalse', target, propertyKey, descriptor).assert(false);

export {
    AssertFalse
};
