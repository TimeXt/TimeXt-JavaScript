import * as Unit from './units';

class Interval {

    constructor(value, unit) {
        this.value = value;
        this.unit = unit;
    }

    inWeeks() {
        return (this.value * this.unit) / Unit.Week;
    }

    inDays() {
        return (this.value * this.unit) / Unit.Day;
    }

    inHours() {
        return (this.value * this.unit) / Unit.Hour;
    }

    inMinutes() {
        return (this.value * this.unit) / Unit.Minute;
    }

    inSeconds() {
        return (this.value * this.unit) / Unit.Second;
    }

    inMilliSeconds() {
        return (this.value * this.unit) / Unit.MilliSecond;
    }

    inMicroSeconds() {
        return (this.value * this.unit) / Unit.MicroSecond;
    }

    inNanoSeconds() {
        return (this.value * this.unit) / Unit.NanoSecond;
    }

    inPicoSeconds() {
        return (this.value * this.unit) / Unit.PicoSecond;
    }

    plus(interval) {
        this.value = ((this.inPicoSeconds() + interval.inPicoSeconds()) / this.unit) * Unit.PicoSecond;
		return this;
    }

    minus(interval) {
        this.value = ((this.inPicoSeconds() - interval.inPicoSeconds()) / this.unit) * Unit.PicoSecond;
		return this;
    }

    times(timesValue) {
        this.value *= timesValue;
		return this;
    }

    div(diversionValue) {
        if (diversionValue === 0){
            throw Error('Diversion value may not be 0!');
        }
        this.value /= diversionValue;
		return this;
    }

    inc() {
        this.value++;
		return this;
    }

    dec() {
        this.value--;
		return this;
    }

    compareTo(interval) {
        return this.inMilliSeconds() - interval.inMilliSeconds();
    }

    contains(interval) {
        return this.inPicoSeconds() >= interval.inPicoSeconds();
    }

    equals(interval) {
        return !!interval && this.compareTo(interval) === 0;
    }

    hashCode() {
        return this.inPicoSeconds();
    }

    toString() {
        return this.inMilliSeconds().toString();
    }
}

const timext = (value, unit) => {
    return new Interval(value, unit);
}

export default timext;
