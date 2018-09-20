import { MaxConstraintValidator } from './MaxConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';
import { ConstraintDescriptor } from '@es-validation/decorators';

describe('Max constraint validator', () => {
    let maxConstraintValidator: ConstraintValidator<any>;
    let constraintValidationContext: ConstraintValidationContext;
    let constraintDescriptor: jest.Mocked<ConstraintDescriptor> = {} as jest.Mocked<ConstraintDescriptor>;

    beforeEach(() => {
        maxConstraintValidator = new MaxConstraintValidator();
        constraintDescriptor.getAttribute = jest.fn<(attributeName: string) => any>();
        constraintDescriptor.getAttribute.mockImplementationOnce(attributeName => {
            if (attributeName === 'maximum') { return 123; }
            return undefined;
        });
        maxConstraintValidator.initialize(constraintDescriptor);
    });

    it('considers a value lower than the maximum to be valid', () => {
        // given
        let value: number = 122;
        // when
        let result: boolean = maxConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers a value equal to the maximum to be valid', () => {
        // given
        let value: number = 123;
        // when
        let result: boolean = maxConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers a value higher than the maximum to be invalid', () => {
        // given
        let value: number = 124;
        // when
        let result: boolean = maxConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
