const addConstraint: jest.Mock<any> = jest.fn();
jest.setMock('./addConstraint', {addConstraint: addConstraint});
import { Size } from './Size';

describe('@Size decorator', () => {

    beforeEach(() => {
        addConstraint.mockReset();
    });

    it('adds a constraint', () => {
        // given
        const target: object|Function = function(): void { /* empty */ };
        const propertyKey: string|symbol = 'test';
        // when
        Size(2, 4)(target, propertyKey, undefined);
        // then
        expect(addConstraint).toHaveBeenCalledTimes(1);
        expect(addConstraint).toHaveBeenCalledWith({target, propertyKey, descriptor: undefined, constraintName: 'Size', attributes: {mininum: 2, maximum: 4}});
    });

    it('adds a constraint with default values', () => {
        // given
        const target: object|Function = function(): void { /* empty */ };
        const propertyKey: string|symbol = 'test';
        // when
        Size()(target, propertyKey, undefined);
        // then
        expect(addConstraint).toHaveBeenCalledTimes(1);
        expect(addConstraint).toHaveBeenCalledWith({target, propertyKey, descriptor: undefined, constraintName: 'Size', attributes: {mininum: 0, maximum: Number.MAX_SAFE_INTEGER}});
    });

    it('rejects negative values', () => {
        // given
        const target: object|Function = function(): void { /* empty */ };
        const propertyKey: string|symbol = 'test';
        // expect
        expect(() => {
            Size(-1, -2)(target, propertyKey, undefined);
        }).toThrowError('Decorator @Size cannot have a negative parameters (minimum: -1, maximum: -2)');
    });

});
