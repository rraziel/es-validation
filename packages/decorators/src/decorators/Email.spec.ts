const addConstraint: jest.Mock<any> = jest.fn();
jest.setMock('./addConstraint', {addConstraint: addConstraint});
import { Email } from './Email';

describe('@Email decorator', () => {

    it('adds a constraint', () => {
        // given
        const target: object|Function = function(): void { /* empty */ };
        const propertyKey: string|symbol = 'test';
        addConstraint.mockReset();
        // when
        Email(target, propertyKey, undefined);
        // then
        expect(addConstraint).toHaveBeenCalledTimes(1);
        expect(addConstraint).toHaveBeenCalledWith({target, propertyKey, descriptor: undefined, constraintName: 'Email'});
    });

});
