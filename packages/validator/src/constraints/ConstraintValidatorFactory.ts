import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintDescriptor } from '@es-validation/decorators';

/**
 * Constraint validator factory
 */
type ConstraintValidatorFactory<T> = (constraintDescriptor: ConstraintDescriptor) => ConstraintValidator<T>;

export {
    ConstraintValidatorFactory
};
