import { DateProvider } from './DateProvider';
import { advanceTo } from 'jest-date-mock';

describe('Date provider', () => {
    let dateProvider: DateProvider;

    beforeEach(() => {
        dateProvider = new DateProvider();
    });

    it('returns the current date/time', () => {
        // given
        advanceTo(12345678);
        // when
        const now: Date = dateProvider.getDate();
        // then
        expect(now.getTime()).toBe(12345678);
    });

});
