const addConstraint: jest.Mock<any> = jest.fn();
jest.setMock('./addConstraint', {addConstraint: addConstraint});
import { NotBlank } from './NotBlank';

describe('@NotBlank decorator', () => {

    it('adds a constraint', () => {
        // given
        let target: object|Function = function(): void { /* empty */ };
        let propertyKey: string|symbol = 'test';
        // when
        NotBlank(target, propertyKey, undefined);
        // then
        expect(addConstraint).toHaveBeenCalledTimes(1);
        expect(addConstraint).toHaveBeenCalledWith({target, propertyKey, descriptor: undefined, constraintName: 'NotBlank'});
    });

});
