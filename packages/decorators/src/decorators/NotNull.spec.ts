const addConstraint: jest.Mock<any> = jest.fn();
jest.setMock('./ConstraintDecorator', {addConstraint: addConstraint});
import { NotNull } from './NotNull';

describe('@NotNull decorator', () => {

    it('adds a constraint', () => {
        // given
        let target: Object|Function = jest.fn();
        let propertyKey: string|symbol = 'test';
        // when
        NotNull(target, propertyKey, undefined);
        // then
        expect(addConstraint).toHaveBeenCalledTimes(1);
        expect(addConstraint).toHaveBeenCalledWith(target, propertyKey, undefined, 'NotNull');
    });

});
