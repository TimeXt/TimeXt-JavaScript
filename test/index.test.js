import timext from '../src/index';
import * as u from '../src/units';

it('All in conversions should work as expected', () => {
    expect(Math.round(timext(730, u.D).inYears())).toBe(2);
    expect(Math.round(timext(21, u.D).inWeeks())).toBe(3);
    expect(Math.round(timext(1, u.Y).inDays())).toBe(365);
    expect(Math.round(timext(2, u.W).inDays())).toBe(14);
    expect(Math.round(timext(2, u.D).inHours())).toBe(48);
    expect(Math.round(timext(2, u.H).inMinutes())).toBe(120);
    expect(Math.round(timext(2, u.M).inSeconds())).toBe(120);
    expect(Math.round(timext(2, u.S).inMillis())).toBe(2000);
})

it('All to conversions should work as expected', () => {
    expect(timext(730, u.D).toYears()).toEqual(timext(2, u.Y));
    expect(timext(21, u.D).toWeeks()).toEqual(timext(3, u.W));
    expect(timext(1, u.Y).toDays()).toEqual(timext(365, u.D));
    expect(timext(2, u.W).toDays()).toEqual(timext(14, u.D));
    expect(timext(2, u.D).toHours()).toEqual(timext(48, u.H));
    expect(timext(2, u.H).toMinutes()).toEqual(timext(120, u.M));
    expect(timext(2, u.M).toSeconds()).toEqual(timext(120, u.S));
    expect(timext(2, u.S).toMillis()).toEqual(timext(2000, u.MS));
})

it('All arithmetic operator should work as expected', () => {
    expect(timext(2, u.W).plus(timext(7, u.D))).toEqual(timext(3, u.W));
    expect(timext(4, u.H).plus(timext(30, u.M))).toEqual(timext(4.5, u.H));

    expect(timext(2, u.W).minus(timext(7, u.D))).toEqual(timext(1, u.W));
    expect(timext(4, u.H).minus(timext(30, u.M))).toEqual(timext(3.5, u.H));

    expect(timext(2, u.W).multiply(2)).toEqual(timext(4, u.W));
    expect(timext(4, u.H).multiply(2)).toEqual(timext(8, u.H));

    expect(timext(2, u.W).divide(2)).toEqual(timext(1, u.W));
    expect(timext(4, u.H).divide(2)).toEqual(timext(2, u.H));
})

it('divide should throw exception if division by 0', () => {
    expect(() => timext(2, u.W).divide(0)).toThrow(Error);
})

it('The increment and decrement operator should work as expected', () => {
    expect(timext(3, u.W).inc()).toEqual(timext(4, u.W));
    expect(timext(10, u.M).dec()).toEqual(timext(9, u.M));
})

it('The less then and greater then operator should work as expected', () => {
    expect(timext(2, u.W) < timext(15, u.D)).toBeTruthy();
    expect(timext(4, u.H) < timext(5, u.H)).toBeTruthy();

    expect(timext(2, u.W) > timext(13, u.D)).toBeTruthy();
    expect(timext(4, u.H) > timext(3, u.H)).toBeTruthy();
})

it('Equals should work as expected', () => {
    expect(timext(5, u.M).equals(timext(300, u.S))).toBeTruthy();
    expect(timext(500, u.MS).equals(null)).toBeFalsy();
    expect(timext(1, u.H).equals(timext(59, u.M))).toBeFalsy();
})

it('CompareTo should work as expected', () => {
    expect(timext(1, u.S).compareTo(timext(750, u.MS))).toBe(250);
    expect(timext(1, u.S).compareTo(null)).toBe(1e3);
})

it('HashCode should work as expected', () => {
    expect(timext(512, u.MS).hashCode()).toBe(512);
})

it('ToString should work as expected', () => {
    expect(timext(512, u.MS).toString()).toBe('512');
})
