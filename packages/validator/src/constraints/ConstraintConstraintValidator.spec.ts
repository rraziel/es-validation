import { ConstraintConstraintValidator } from './ConstraintConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';
import { ConstraintDescriptor } from '@es-validation/decorators';
import { createMockInstance } from 'jest-create-mock-instance';

describe('Constraint constraint validator', () => {
    let constraintValidationContext: ConstraintValidationContext;
    let constraintDescriptor: jest.Mocked<ConstraintDescriptor>;

    beforeEach(() => {
        constraintDescriptor = {} as jest.Mocked<ConstraintDescriptor>;
        constraintDescriptor.getAttribute = jest.fn<(constraintName: string) => any>();
        constraintValidationContext = createMockInstance(ConstraintValidationContext as any);
    });

    it('considers successful validations to be valid', () => {
        // given
        const value: any = null;
        const validator: (v: any) => boolean = () => true;
        constraintDescriptor.getAttribute.mockReturnValueOnce(validator);
        const constraintConstraintValidator: ConstraintValidator<any> = new ConstraintConstraintValidator<any>(constraintDescriptor);
        // when
        const result: boolean = constraintConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers unsuccessful validations to be invalid', () => {
        // given
        const value: any = 5;
        const validator: (v: any) => boolean = () => false;
        constraintDescriptor.getAttribute.mockReturnValueOnce(validator);
        const constraintConstraintValidator: ConstraintValidator<any> = new ConstraintConstraintValidator<any>(constraintDescriptor);
        // when
        const result: boolean = constraintConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
