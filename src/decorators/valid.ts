import {ConstraintDecorator} from './constraint-decorator';
import {getInfoBuilder} from './helper';

/**
 * Valid decorator, used to define that an element's fields must be validated
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Valid: ConstraintDecorator = (target, propertyKey, descriptor) => getInfoBuilder('Valid', target, propertyKey, descriptor).valid();

export {
    Valid
};
