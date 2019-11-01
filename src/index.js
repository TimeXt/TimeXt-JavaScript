import * as u from './units';

class TimeXt {

    constructor(v, ut) {
        this.v = v;
        this.ut = ut;
    }

    inCenturies() { return (this.v * this.ut) / u.CE; }

    inDecades() { return (this.v * this.ut) / u.DC; }

    inYears() { return (this.v * this.ut) / u.Y; }

    inWeeks() { return (this.v * this.ut) / u.W; }

    inDays() { return (this.v * this.ut) / u.D; }

    inHours() { return (this.v * this.ut) / u.H; }

    inMinutes() { return (this.v * this.ut) / u.M; }

    inSeconds() { return (this.v * this.ut) / u.S; }

    inMillis() { return (this.v * this.ut) / u.MS; }

    toCenturies() { return new TimeXt(this.inCenturies(), u.CE); }

    toDecades() { return new TimeXt(this.inDecades(), u.DC); }

    toYears() { return new TimeXt(this.inYears(), u.Y); }

    toWeeks() { return new TimeXt(this.inWeeks(), u.W); }

    toDays() { return new TimeXt(this.inDays(), u.D); }

    toHours() { return new TimeXt(this.inHours(), u.H); }

    toMinutes() { return new TimeXt(this.inMinutes(), u.M); }

    toSeconds() { return new TimeXt(this.inSeconds(), u.S); }

    toMillis() { return new TimeXt(this.inMillis(), u.MS); }

    plus(t) {
        this.v = ((this.inMillis() + t.inMillis()) / this.ut) * u.MS;
        return this;
    }

    minus(t) {
        this.v = ((this.inMillis() - t.inMillis()) / this.ut) * u.MS;
        return this;
    }

    multiply(v) {
        this.v *= v;
        return this;
    }

    divide(v) {
        if (v === 0) {
            throw Error('Diversion value may not be 0!');
        }
        this.v /= v;
        return this;
    }

    inc() {
        this.v++;
        return this;
    }

    dec() {
        this.v--;
        return this;
    }

    compareTo(t) { return !t ? this.inMillis() : this.inMillis() - t.inMillis(); }

    equals(t) { return !!t && this.compareTo(t) === 0; }

    hashCode() { return this.inMillis(); }

    toString() { return this.inMillis().toString(); }
}

const timext = (v, ut) => new TimeXt(v, ut);

export default timext;

// Date extensions

Date.prototype.plus = function (v) { return new Date(this.getTime() + v.inMillis()); }

Date.prototype.minus = function (v) { return new Date(this.getTime() - v.inMillis()); }

// Number extensions

Number.prototype.toCenturies = function () { return timext(this, u.CE); }

Number.prototype.toDecades = function () { return timext(this, u.DC); }

Number.prototype.toYears = function () { return timext(this, u.Y); }

Number.prototype.toWeeks = function () { return timext(this, u.W); }

Number.prototype.toDays = function () { return timext(this, u.D); }

Number.prototype.toHours = function () { return timext(this, u.H); }

Number.prototype.toMinutes = function () { return timext(this, u.M); }

Number.prototype.toSeconds = function () { return timext(this, u.S); }

Number.prototype.toMillis = function () { return timext(this, u.MS); }

// String format extensions

function toStringArray(v, d) {
    return [
        { k: 'week', v: [604800 * 1e3, Number.MAX_SAFE_INTEGER] },
        { k: 'day', v: [86400 * 1e3, 7] },
        { k: 'hour', v: [3600 * 1e3, 24] },
        { k: 'minute', v: [60 * 1e3, 60] },
        { k: 'second', v: [1e3, 60] },
        { k: 'millisecond', v: [1, 1e3] }
    ]
        .map((i) => ({ k: i.k, v: [i.v[0] / d, i.v[1]] }))
        .map((i) => ((v / i.v[0]) % i.v[1] > 0
            ? `${Math.trunc((v / i.v[0]) % i.v[1])} ${i.k}${(Math.trunc((v / i.v[0]) % i.v[1]) > 1) ? 's' : ''}`
            : undefined))
        .filter((i) => !!i && i.indexOf('0 ') !== 0);
}

Number.prototype.formatMillis = function () {
    const array = toStringArray(this, 1);
    return array.length > 0 ? array.join(', ') : '0 millisecond';
}

Number.prototype.formatSeconds = function () {
    const array = toStringArray(this, 1e3);
    return array.length > 0 ? array.join(', ') : (this * 1e3).formatMillis();
}

Number.prototype.formatMinutes = function () {
    const array = toStringArray(this, 60 * 1e3);
    return array.length > 0 ? array.join(', ') : (this * 60).formatSeconds();
}

Number.prototype.formatHours = function () {
    const array = toStringArray(this, 3600 * 1e3);
    return array.length > 0 ? array.join(', ') : (this * 60).formatMinutes();
}

Number.prototype.formatDays = function () {
    const array = toStringArray(this, 86400 * 1e3);
    return array.length > 0 ? array.join(', ') : (this * 24).formatHours();
}

Number.prototype.formatWeeks = function () {
    const array = toStringArray(this, 604800 * 1e3);
    return array.length > 0 ? array.join(', ') : (this * 7).formatDays();
}
