import { SizeConstraintValidator } from './SizeConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';
import { ConstraintDescriptor } from '@es-validation/decorators';
import { createMockInstance } from 'jest-create-mock-instance';

describe('Size constraint validator', () => {
    const constraintValidationContext: ConstraintValidationContext = createMockInstance(ConstraintValidationContext as any);
    const constraintDescriptor: jest.Mocked<ConstraintDescriptor> = {} as jest.Mocked<ConstraintDescriptor>;
    let sizeConstraintValidator: ConstraintValidator<any>;

    beforeEach(() => {
        constraintDescriptor.getAttribute = jest.fn<(constraintName: string) => any>();
        constraintDescriptor.getAttribute.mockImplementation((constraintName: string) => {
            switch (constraintName) {
            case 'minimum':
                return 2;
            case 'maximum':
                return 5;
            default:
                throw new Error(`unknown size constraint name ${constraintName}`);
            }
        });
        sizeConstraintValidator = new SizeConstraintValidator(constraintDescriptor);
    });

    it('considers containers with a size within range to be valid', () => {
        // given
        const value: Array<number> = [1, 2, 3];
        // when
        const result: boolean = sizeConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers containers with a size outside of range to be invalid', () => {
        // given
        const value: Array<number> = [1];
        // when
        const result: boolean = sizeConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
