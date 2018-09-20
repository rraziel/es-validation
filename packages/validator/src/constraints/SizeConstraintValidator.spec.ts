import { SizeConstraintValidator } from './SizeConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';
import { ConstraintDescriptor } from '@es-validation/decorators';

describe('Size constraint validator', () => {
    let sizeConstraintValidator: ConstraintValidator<any>;
    let constraintValidationContext: ConstraintValidationContext;
    let constraintDescriptor: jest.Mocked<ConstraintDescriptor> = {} as jest.Mocked<ConstraintDescriptor>;

    beforeEach(() => {
        sizeConstraintValidator = new SizeConstraintValidator();
        constraintDescriptor.getAttribute = jest.fn<(constraintName: string) => any>();
        constraintDescriptor.getAttribute.mockImplementation((constraintName: string) => {
            switch (constraintName) {
            case 'minimum':
                return 2;
            case 'maximum':
                return 5;
            }

            return undefined;
        });
        sizeConstraintValidator.initialize(constraintDescriptor);
    });

    it('considers containers with a size within range to be valid', () => {
        // given
        let value: Array<number> = [1, 2, 3];
        // when
        let result: boolean = sizeConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers containers with a size outside of range to be invalid', () => {
        // given
        let value: Array<number> = [1];
        // when
        let result: boolean = sizeConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
