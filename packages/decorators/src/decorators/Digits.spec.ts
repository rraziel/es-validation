const addConstraint: jest.Mock<any> = jest.fn();
jest.setMock('./ConstraintDecorator', {addConstraint: addConstraint});
import { Digits } from './Digits';

describe('@Digits decorator', () => {

    it('adds a constraint', () => {
        // given
        let target: Object|Function = jest.fn();
        let propertyKey: string|symbol = 'test';
        // when
        Digits(2, 4)(target, propertyKey, undefined);
        // then
        expect(addConstraint).toHaveBeenCalledTimes(1);
        expect(addConstraint).toHaveBeenCalledWith(target, propertyKey, undefined, 'Digits', {
            integer: 2,
            fraction: 4
        });
    });

    // TODO: integer par must be >(=?) 0, fractional part must be >= 0, so that the decorator is rejected right away
});
