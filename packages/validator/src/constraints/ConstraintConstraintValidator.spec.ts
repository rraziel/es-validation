import { ConstraintConstraintValidator } from './ConstraintConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';
import { ConstraintDescriptor } from '@es-validation/decorators';

describe('Constraint constraint validator', () => {
    let constraintConstraintValidator: ConstraintValidator<any>;
    let constraintValidationContext: ConstraintValidationContext;
    let constraintDescriptor: jest.Mocked<ConstraintDescriptor> = {} as jest.Mocked<ConstraintDescriptor>;

    beforeEach(() => {
        constraintConstraintValidator = new ConstraintConstraintValidator<any>();
        constraintDescriptor.getAttribute = jest.fn<(constraintName: string) => any>();
    });

    it('considers successful validations to be valid', () => {
        // given
        let value: any = null;
        let validator: (v: any) => boolean = () => true;
        constraintDescriptor.getAttribute.mockReturnValueOnce(validator);
        // when
        constraintConstraintValidator.initialize(constraintDescriptor);
        let result: boolean = constraintConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers unsuccessful validations to be invalid', () => {
        // given
        let value: any = 5;
        let validator: (v: any) => boolean = () => false;
        constraintDescriptor.getAttribute.mockReturnValueOnce(validator);
        // when
        constraintConstraintValidator.initialize(constraintDescriptor);
        let result: boolean = constraintConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
