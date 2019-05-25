import * as u from './units';

class TimeXt {

    constructor(val, unit) {
        this.val = val;
        this.unit = unit;
    }

    inYears() {
        return (this.val * this.unit) / u.Y;
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

    toYears() {
        return new TimeXt(this.inYears(), u.Y);
    }

    toWeeks() {
        return new TimeXt(this.inWeeks(), u.W);
    }

    toDays() {
        return new TimeXt(this.inDays(), u.D);
    }

    toHours() {
        return new TimeXt(this.inHours(), u.H);
    }

    toMinutes() {
        return new TimeXt(this.inMinutes(), u.M);
    }

    toSeconds() {
        return new TimeXt(this.inSeconds(), u.S);
    }

    toMilliseconds() {
        return new TimeXt(this.inMilliseconds(), u.MS);
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

export default timext;

// Date extensions

Date.prototype.plus = function (val) {
    return new Date(this.getTime() + val.inMilliseconds());
}

Date.prototype.minus = function (val) {
    return new Date(this.getTime() - val.inMilliseconds());
}

// Number extensions

Number.prototype.toYears = function () {
    return timext(this, u.Y);
}

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

// String format extensions

Number.prototype.formatMilliseconds = function () {
    const dictionary = [
        { key: 'week', value: { first: 7 * 24 * 60 * 60 * 1000, second: Number.MAX_SAFE_INTEGER } },
        { key: 'day', value: { first: 24 * 60 * 60 * 1000, second: 7 } },
        { key: 'hour', value: { first: 60 * 60 * 1000, second: 24 } },
        { key: 'minute', value: { first: 60 * 1000, second: 60 } },
        { key: 'second', value: { first: 1000, second: 60 } },
        { key: 'millisecond', value: { first: 1, second: 1000 } }
    ];

    const stringArray = dictionary
        .map(item => (Math.trunc((this / item.value.first) % item.value.second) > 0
            ? `${Math.trunc((this / item.value.first) % item.value.second)} ${item.key}${(Math.trunc((this / item.value.first) % item.value.second) > 1) ? 's' : ''}`
            : undefined))
        .filter(item => !!item);

    return stringArray.length > 0 ? stringArray.join(', ') : '0 milliseconds';
}

Number.prototype.formatSeconds = function () {
    const dictionary = [
        { key: 'week', value: { first: 7 * 24 * 60 * 60 * 1, second: Number.MAX_SAFE_INTEGER } },
        { key: 'day', value: { first: 24 * 60 * 60 * 1, second: 7 } },
        { key: 'hour', value: { first: 60 * 60 * 1, second: 24 } },
        { key: 'minute', value: { first: 60 * 1, second: 60 } },
        { key: 'second', value: { first: 1, second: 60 } }
    ];

    const stringArray = dictionary
        .map(item => (Math.trunc((this / item.value.first) % item.value.second) > 0
            ? `${Math.trunc((this / item.value.first) % item.value.second)} ${item.key}${(Math.trunc((this / item.value.first) % item.value.second) > 1) ? 's' : ''}`
            : undefined))
        .filter(item => !!item);

    return stringArray.length > 0 ? stringArray.join(', ') : (this * 1000).formatMilliseconds();
}

Number.prototype.formatMinutes = function () {
    const dictionary = [
        { key: 'week', value: { first: 7 * 24 * 60 * 1, second: Number.MAX_SAFE_INTEGER } },
        { key: 'day', value: { first: 24 * 60 * 1, second: 7 } },
        { key: 'hour', value: { first: 60 * 1, second: 24 } },
        { key: 'minute', value: { first: 1, second: 60 } }
    ];

    const stringArray = dictionary
        .map(item => (Math.trunc((this / item.value.first) % item.value.second) > 0
            ? `${Math.trunc((this / item.value.first) % item.value.second)} ${item.key}${(Math.trunc((this / item.value.first) % item.value.second) > 1) ? 's' : ''}`
            : undefined))
        .filter(item => !!item);

    return stringArray.length > 0 ? stringArray.join(', ') : (this * 60).formatSeconds();
}

Number.prototype.formatHours = function () {
    const dictionary = [
        { key: 'week', value: { first: 7 * 24 * 1, second: Number.MAX_SAFE_INTEGER } },
        { key: 'day', value: { first: 24 * 1, second: 7 } },
        { key: 'hour', value: { first: 1, second: 24 } }
    ];

    const stringArray = dictionary
        .map(item => (Math.trunc((this / item.value.first) % item.value.second) > 0
            ? `${Math.trunc((this / item.value.first) % item.value.second)} ${item.key}${(Math.trunc((this / item.value.first) % item.value.second) > 1) ? 's' : ''}`
            : undefined))
        .filter(item => !!item);

    return stringArray.length > 0 ? stringArray.join(', ') : (this * 60).formatMinutes();
}
