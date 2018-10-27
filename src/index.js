import * as u from './units';

class TimeXt {

    constructor(val, unit) {
        this.val = val;
        this.unit = unit;
    }

    inWeeks() {
        return (this.val * this.unit) / u.W;
    }

    inDays() {
        return (this.val * this.unit) / u.D;
    }

    inHours() {
        return (this.val * this.unit) / u.H;
    }

    inMinutes() {
        return (this.val * this.unit) / u.M;
    }

    inSeconds() {
        return (this.val * this.unit) / u.S;
    }

    inMilliseconds() {
        return (this.val * this.unit) / u.MS;
    }

    plus(t) {
        this.val = ((this.inMilliseconds() + t.inMilliseconds()) / this.unit) * u.MS;
        return this;
    }

    minus(t) {
        this.val = ((this.inMilliseconds() - t.inMilliseconds()) / this.unit) * u.MS;
        return this;
    }

    multiply(val) {
        this.val *= val;
        return this;
    }

    divide(val) {
        if (val === 0) {
            throw Error('Diversion value may not be 0!');
        }
        this.val /= val;
        return this;
    }

    inc() {
        this.val++;
        return this;
    }

    dec() {
        this.val--;
        return this;
    }

    compareTo(t) {
        if (!t) {
            return this.inMilliseconds();
        }
        return this.inMilliseconds() - t.inMilliseconds();
    }

    equals(t) {
        return !!t && this.compareTo(t) === 0;
    }

    hashCode() {
        return this.inMilliseconds();
    }

    toString() {
        return this.inMilliseconds().toString();
    }
}

const timext = (val, unit) => new TimeXt(val, unit);

// Date extensions

Date.prototype.plus = function (val) {
    return new Date(this.getTime() + val.inMilliseconds());
}

Date.prototype.minus = function (val) {
    return new Date(this.getTime() - val.inMilliseconds());
}

// Number extensions

Number.prototype.toWeeks = function () {
    return timext(this, u.W);
}

Number.prototype.toDays = function () {
    return timext(this, u.D);
}

Number.prototype.toHours = function () {
    return timext(this, u.H);
}

Number.prototype.toMinutes = function () {
    return timext(this, u.M);
}

Number.prototype.toSeconds = function () {
    return timext(this, u.S);
}

Number.prototype.toMilliseconds = function () {
    return timext(this, u.MS);
}

export default timext;
