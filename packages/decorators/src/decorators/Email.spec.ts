const addConstraint: jest.Mock<any> = jest.fn();
jest.setMock('./ConstraintDecorator', {addConstraint: addConstraint});
import { Email } from './Email';

describe('@Email decorator', () => {

    it('adds a constraint', () => {
        // given
        let target: Object|Function = jest.fn();
        let propertyKey: string|symbol = 'test';
        addConstraint.mockReset();
        // when
        Email(target, propertyKey, undefined);
        // then
        expect(addConstraint).toHaveBeenCalledTimes(1);
        expect(addConstraint).toHaveBeenCalledWith(target, propertyKey, undefined, 'Email');
    });

});
