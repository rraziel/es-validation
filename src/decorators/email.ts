import {ConstraintDecorator} from './constraint-decorator';
import {getInfoBuilder} from './helper';

/**
 * Email decorator, used to define that an element must be a valid email address
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Email: ConstraintDecorator = (target, propertyKey, descriptor) => getInfoBuilder('Email', target, propertyKey, descriptor).email();

export {
    Email
};
