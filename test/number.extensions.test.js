import timext from '../src/index';
import * as u from '../src/units';

test('All Number extensions should work as exptected', () => {
    expect(Number(5).toCenturies()).toEqual(timext(5, u.CE));
    expect(Number(5).toDecades()).toEqual(timext(5, u.DC));
    expect(Number(5).toYears()).toEqual(timext(5, u.Y));
    expect(Number(5).toWeeks()).toEqual(timext(5, u.W));
    expect(Number(5).toDays()).toEqual(timext(5, u.D));
    expect(Number(5).toHours()).toEqual(timext(5, u.H));
    expect(Number(5).toMinutes()).toEqual(timext(5, u.M));
    expect(Number(5).toSeconds()).toEqual(timext(5, u.S));
    expect(Number(5).toMillis()).toEqual(timext(5, u.MS));
})
