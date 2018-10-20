import timext from './index';
import * as Unit from './units';

export function toWeeks(value) { return timext(value, Unit.Week); }
export function toDays(value) { return timext(value, Unit.Day); }
export function toHours(value) { return timext(value, Unit.Hour); }
export function toMinutes(value) { return timext(value, Unit.Minute); }
export function toSeconds(value) { return timext(value, Unit.Second); }
export function toMilliSeconds(value) { return timext(value, Unit.MilliSecond); }
export function toMicroSeconds(value) { return timext(value, Unit.MicroSecond); }
export function toNanoSeconds(value) { return timext(value, Unit.NanoSecond); }
export function toPicoSeconds(value) { return timext(value, Unit.PicoSecond); }
