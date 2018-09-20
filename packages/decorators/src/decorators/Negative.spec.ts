const addConstraint: jest.Mock<any> = jest.fn();
jest.setMock('./ConstraintDecorator', {addConstraint: addConstraint});
import {
    Negative,
    NegativeOrZero
} from './Negative';

describe('@Negative decorator', () => {

    it('adds a constraint', () => {
        // given
        let target: Object|Function = jest.fn();
        let propertyKey: string|symbol = 'test';
        addConstraint.mockReset();
        // when
        Negative(target, propertyKey, undefined);
        // then
        expect(addConstraint).toHaveBeenCalledTimes(1);
        expect(addConstraint).toHaveBeenCalledWith(target, propertyKey, undefined, 'Negative', {
            zero: false
        });
    });

});

describe('@NegativeOrZero decorator', () => {

    it('adds a constraint', () => {
        // given
        let target: Object|Function = jest.fn();
        let propertyKey: string|symbol = 'test';
        addConstraint.mockReset();
        // when
        NegativeOrZero(target, propertyKey, undefined);
        // then
        expect(addConstraint).toHaveBeenCalledTimes(1);
        expect(addConstraint).toHaveBeenCalledWith(target, propertyKey, undefined, 'Negative', {
            zero: true
        }, 'NegativeOrZero');
    });

});
