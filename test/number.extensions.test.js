import timext from '../src/index';
import * as Extensions from '../src/number.extensions';
import * as Unit from '../src/units';

it('All Extensions should work as exptected', () => {
    expect(Extensions.toWeeks(5)).toEqual(timext(5, Unit.Week));
    expect(Extensions.toDays(5)).toEqual(timext(5, Unit.Day));
    expect(Extensions.toHours(5)).toEqual(timext(5, Unit.Hour));
    expect(Extensions.toMinutes(5)).toEqual(timext(5, Unit.Minute));
    expect(Extensions.toSeconds(5)).toEqual(timext(5, Unit.Second));
    expect(Extensions.toMilliSeconds(5)).toEqual(timext(5, Unit.MilliSecond));
    expect(Extensions.toMicroSeconds(5)).toEqual(timext(5, Unit.MicroSecond));
    expect(Extensions.toNanoSeconds(5)).toEqual(timext(5, Unit.NanoSecond));
    expect(Extensions.toPicoSeconds(5)).toEqual(timext(5, Unit.PicoSecond));
})