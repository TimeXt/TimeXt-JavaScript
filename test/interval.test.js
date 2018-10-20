import timext from '../src/index';
import * as Unit from '../src/units';

it('All conversions should work as expected', () => {
    expect(Math.round(timext(2, Unit.Week).inDays())).toBe(14);
    expect(Math.round(timext(2, Unit.Day).inHours())).toBe(48);
    expect(Math.round(timext(2, Unit.Hour).inMinutes())).toBe(120);
    expect(Math.round(timext(2, Unit.Minute).inSeconds())).toBe(120);
    expect(Math.round(timext(2, Unit.Second).inMilliSeconds())).toBe(2000);
    expect(Math.round(timext(2, Unit.MilliSecond).inMicroSeconds())).toBe(2000);
    expect(Math.round(timext(2, Unit.MicroSecond).inNanoSeconds())).toBe(2000);
    expect(Math.round(timext(2, Unit.NanoSecond).inPicoSeconds())).toBe(2000);
    expect(Math.round(timext(21, Unit.Day).inWeeks())).toBe(3);
})

it('All arithmetic methods should work as expected', () => {
    expect(timext(2, Unit.Week).plus(timext(7, Unit.Day))).toEqual(timext(3, Unit.Week));
    expect(timext(4, Unit.Hour).plus(timext(30, Unit.Minute))).toEqual(timext(4.5, Unit.Hour));

    expect(timext(2, Unit.Week).minus(timext(7, Unit.Day))).toEqual(timext(1, Unit.Week));
    expect(timext(4, Unit.Hour).minus(timext(30, Unit.Minute))).toEqual(timext(3.5, Unit.Hour));
    
    expect(timext(2, Unit.Week).times(2)).toEqual(timext(4, Unit.Week));
    expect(timext(4, Unit.Hour).times(2)).toEqual(timext(8, Unit.Hour));

    expect(timext(2, Unit.Week).div(2)).toEqual(timext(1, Unit.Week));
    expect(timext(4, Unit.Hour).div(2)).toEqual(timext(2, Unit.Hour));
})

it('The increment and decrement methods should work as expected', () => {
    expect(timext(2, Unit.Week).inc()).toEqual(timext(3, Unit.Week));
    expect(timext(4, Unit.Hour).inc()).toEqual(timext(5, Unit.Hour));

    expect(timext(2, Unit.Week).dec()).toEqual(timext(1, Unit.Week));
    expect(timext(4, Unit.Hour).dec()).toEqual(timext(3, Unit.Hour));
})

it('CompareTo should work as expected', () => {
    expect(timext(1, Unit.Second).compareTo(timext(750, Unit.MilliSecond))).toBe(250);
})

it('Contains should work as expected', () => {
    expect(timext(1, Unit.Second).contains(timext(500, Unit.MilliSecond))).toBeTruthy();
    expect(timext(500, Unit.MilliSecond).contains(timext(1, Unit.Second))).toBeFalsy();
})

it('Equals should work as expected', () => {
    expect(timext(5, Unit.Minute).equals(timext(300, Unit.Second))).toBeTruthy();
    expect(timext(500, Unit.MilliSecond).equals(null)).toBeFalsy();
    expect(timext(1, Unit.Hour).equals(timext(59, Unit.Minute))).toBeFalsy();
})

it('HashCode should work as expected', () => {
    expect(timext(512, Unit.MilliSecond).hashCode()).toBe(512000000000);
})

it('ToString should work as expected', () => {
    expect(timext(512, Unit.MilliSecond).toString()).toBe('512');
})
