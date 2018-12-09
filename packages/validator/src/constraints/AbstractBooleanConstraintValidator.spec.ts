import { AbstractBooleanConstraintValidator } from './AbstractBooleanConstraintValidator';

class MockedBooleanConstraintValidator extends AbstractBooleanConstraintValidator {
    isValid: jest.Mock<(value: boolean) => boolean> = jest.fn<(value: boolean) => boolean>(() => true);
    isValidValue = () => true;
}

describe('Abstract boolean constraint validator', () => {
    let mockedBooleanConstraintValidator: MockedBooleanConstraintValidator;

    beforeEach(() => {
        mockedBooleanConstraintValidator = new MockedBooleanConstraintValidator();
    });

    it('receives the boolean value', () => {
        // given
        const value: boolean = true;
        // when
        const result: boolean = mockedBooleanConstraintValidator.isValid(value);
        // then
        expect(result).toBe(true);
        expect(mockedBooleanConstraintValidator.isValid).toHaveBeenCalledTimes(1);
        expect(mockedBooleanConstraintValidator.isValid).toHaveBeenCalledWith(true);
    });

});
