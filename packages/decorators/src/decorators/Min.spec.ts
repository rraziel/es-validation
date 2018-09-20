const addConstraint: jest.Mock<any> = jest.fn();
jest.setMock('./ConstraintDecorator', {addConstraint: addConstraint});
import { Min } from './Min';

describe('@Min decorator', () => {

    it('adds a constraint', () => {
        // given
        let target: Object|Function = jest.fn();
        let propertyKey: string|symbol = 'test';
        // when
        Min(5)(target, propertyKey, undefined);
        // then
        expect(addConstraint).toHaveBeenCalledTimes(1);
        expect(addConstraint).toHaveBeenCalledWith(target, propertyKey, undefined, 'Min', {
            minimum: 5
        });
    });

});
