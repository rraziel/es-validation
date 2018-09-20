import { MinConstraintValidator } from './MinConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';
import { ConstraintDescriptor } from '@es-validation/decorators';

describe('Min constraint validator', () => {
    let minConstraintValidator: ConstraintValidator<any>;
    let constraintValidationContext: ConstraintValidationContext;
    let constraintDescriptor: jest.Mocked<ConstraintDescriptor> = {} as jest.Mocked<ConstraintDescriptor>;

    beforeEach(() => {
        minConstraintValidator = new MinConstraintValidator();
        constraintDescriptor.getAttribute = jest.fn<(attributeName: string) => any>();
        constraintDescriptor.getAttribute.mockImplementationOnce(attributeName => {
            if (attributeName === 'minimum') { return 123; }
            return undefined;
        });
        minConstraintValidator.initialize(constraintDescriptor);
    });

    it('considers a value higher than the minimum to be valid', () => {
        // given
        let value: number = 124;
        // when
        let result: boolean = minConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers a value equal to the minimum to be valid', () => {
        // given
        let value: number = 123;
        // when
        let result: boolean = minConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers a value lower than the minimum to be invalid', () => {
        // given
        let value: number = 122;
        // when
        let result: boolean = minConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
