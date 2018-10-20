# TimeXt-JavaScript - master branch

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
<a target="_blank" href="https://www.paypal.me/GuepardoApps" title="Donate using PayPal"><img src="https://img.shields.io/badge/paypal-donate-blue.svg" /></a>

[![Build](https://img.shields.io/badge/build-success-green.svg)](https://github.com/TimeXt/TimeXt-JavaScript/blob/master/releases/timext-2018-10-20-1.min.js)
[![Version](https://img.shields.io/badge/version-v0.1.0.181020-blue.svg)](https://github.com/TimeXt/TimeXt-JavaScript/tree/master/releases/)

First of all many thanks to [Kizitonwose](https://github.com/kizitonwose/Time) for the original idea and already awesome library!

This library shall help to reduce code like

```javascript
const dayInMillis = 24 * 60 * 60 * 1000;							// Represent a day in milliSeconds
```

## How to use

```javascript
import timext from '../src/index';
import * as Unit from '../src/units';

const oneWeek = timext(1, Unit.Week);
const threeDays = timext(3, Unit.Day);
const elevenHours = timext(11, Unit.Hour);
const sixMinutes = timext(6, Unit.Minute);
const fiftySeconds = timext(50, Unit.Second);
const hundredMilliSeconds = timext(100, Unit.MilliSecond);
const fiveMicroSeconds = timext(5, Unit.MicroSecond);
const oneNanoSecond = timext(1, Unit.NanoSecond);
const onePicoSecond = timext(1, Unit.PicoSecond);

const oneDayInMillis = timext(1, Unit.Day).inMilliSeconds();    	// Converts one day into milliseconds
const twoWeeksInHours = timext(2, Unit.Week).inHours();  		    // Converts two weeks into hours

const duration = timext(1, Unit.Day).plus(timext(6, Unit.Hour));
const difference = timext(34, Unit.Minute).minus(timext(420, Unit.Second));
const multipliedDuration = timext(2, Unit.Week).times(1.5);
const dividedDuration = timext(2500, Unit.PicoSecond).times(2);

```

## License

TimeXt-JavaScript is distributed under the MIT license. [See LICENSE](https://github.com/TimeXt/TimeXt-JavaScript/blob/master/LICENSE.md) for details.
