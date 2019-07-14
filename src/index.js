import * as u from './units';

class TimeXt {

    constructor(val, unit) {
        this.val = val;
        this.unit = unit;
    }

    inYears() { return (this.val * this.unit) / u.Y; }

    inWeeks() { return (this.val * this.unit) / u.W; }

    inDays() { return (this.val * this.unit) / u.D; }

    inHours() { return (this.val * this.unit) / u.H; }

    inMinutes() { return (this.val * this.unit) / u.M; }

    inSeconds() { return (this.val * this.unit) / u.S; }

    inMillis() { return (this.val * this.unit) / u.MS; }

    toYears() { return new TimeXt(this.inYears(), u.Y); }

    toWeeks() { return new TimeXt(this.inWeeks(), u.W); }

    toDays() { return new TimeXt(this.inDays(), u.D); }

    toHours() { return new TimeXt(this.inHours(), u.H); }

    toMinutes() { return new TimeXt(this.inMinutes(), u.M); }

    toSeconds() { return new TimeXt(this.inSeconds(), u.S); }

    toMillis() { return new TimeXt(this.inMillis(), u.MS); }

    plus(t) {
        this.val = ((this.inMillis() + t.inMillis()) / this.unit) * u.MS;
        return this;
    }

    minus(t) {
        this.val = ((this.inMillis() - t.inMillis()) / this.unit) * u.MS;
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

    compareTo(t) { return !t ? this.inMillis() : this.inMillis() - t.inMillis(); }

    equals(t) { return !!t && this.compareTo(t) === 0; }

    hashCode() { return this.inMillis(); }

    toString() { return this.inMillis().toString(); }
}

const timext = (val, unit) => new TimeXt(val, unit);

export default timext;

// Date extensions

Date.prototype.plus = function (val) { return new Date(this.getTime() + val.inMillis()); }

Date.prototype.minus = function (val) { return new Date(this.getTime() - val.inMillis()); }

// Number extensions

Number.prototype.toYears = function () { return timext(this, u.Y); }

Number.prototype.toWeeks = function () { return timext(this, u.W); }

Number.prototype.toDays = function () { return timext(this, u.D); }

Number.prototype.toHours = function () { return timext(this, u.H); }

Number.prototype.toMinutes = function () { return timext(this, u.M); }

Number.prototype.toSeconds = function () { return timext(this, u.S); }

Number.prototype.toMillis = function () { return timext(this, u.MS); }

// String format extensions

function formatTimeToString(value, divider) {
    return [
        { key: 'week', value: { first: 7 * 24 * 60 * 60 * 1000, second: Number.MAX_SAFE_INTEGER } },
        { key: 'day', value: { first: 24 * 60 * 60 * 1000, second: 7 } },
        { key: 'hour', value: { first: 60 * 60 * 1000, second: 24 } },
        { key: 'minute', value: { first: 60 * 1000, second: 60 } },
        { key: 'second', value: { first: 1000, second: 60 } },
        { key: 'millisecond', value: { first: 1, second: 1000 } }
    ]
        .map(item => ({
            key: item.key,
            value: {
                first: item.value.first / divider,
                second: item.value.second
            }
        }))
        .map(item => ((value / item.value.first) % item.value.second > 0
            ? `${Math.trunc((value / item.value.first) % item.value.second)} ${item.key}${(Math.trunc((value / item.value.first) % item.value.second) > 1) ? 's' : ''}`
            : undefined))
        .filter(item => !!item && item.indexOf('0 ') !== 0);
}

Number.prototype.formatMillis = function () {
    const stringArray = formatTimeToString(this, 1);
    return stringArray.length > 0 ? stringArray.join(', ') : '0 milliseconds';
}

Number.prototype.formatSeconds = function () {
    const stringArray = formatTimeToString(this, 1000);
    return stringArray.length > 0 ? stringArray.join(', ') : (this * 1000).formatMillis();
}

Number.prototype.formatMinutes = function () {
    const stringArray = formatTimeToString(this, 60 * 1000);
    return stringArray.length > 0 ? stringArray.join(', ') : (this * 60).formatSeconds();
}

Number.prototype.formatHours = function () {
    const stringArray = formatTimeToString(this, 60 * 60 * 1000);
    return stringArray.length > 0 ? stringArray.join(', ') : (this * 60).formatMinutes();
}

Number.prototype.formatDays = function () {
    const stringArray = formatTimeToString(this, 24 * 60 * 60 * 1000);
    return stringArray.length > 0 ? stringArray.join(', ') : (this * 24).formatHours();
}
