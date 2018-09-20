const addConstraint: jest.Mock<any> = jest.fn();
jest.setMock('./addConstraint', {addConstraint: addConstraint});
import { Digits } from './Digits';

describe('@Digits decorator', () => {

    it('adds a constraint', () => {
        // given
        let target: object|Function = function(): void { /* empty */ };
        let propertyKey: string|symbol = 'test';
        // when
        Digits(2, 4)(target, propertyKey, undefined);
        // then
        expect(addConstraint).toHaveBeenCalledTimes(1);
        expect(addConstraint).toHaveBeenCalledWith({target, propertyKey, descriptor: undefined, constraintName: 'Digits', attributes: {integer: 2, fraction: 4}});
    });

    // TODO: integer part must be >(=?) 0, fractional part must be >= 0, so that the decorator is rejected right away
});
