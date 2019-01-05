# TimeXt-JavaScript - develop branch

[![Npm](https://img.shields.io/badge/npm-getit-red.svg)](https://www.npmjs.com/package/timext-js)
[![Build](https://img.shields.io/badge/build-success-green.svg)](releases/timext-2018-10-28-2.min.js)
[![Version](https://img.shields.io/badge/version-v0.4.0.181028-blue.svg)](releases)
[![CodeCoverage](https://img.shields.io/badge/codeCoverage-98-green.svg)](coverage)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
<a target="_blank" href="https://www.paypal.me/GuepardoApps" title="Donate using PayPal"><img src="https://img.shields.io/badge/paypal-donate-blue.svg" /></a>

First of all many thanks to [Kizitonwose](https://github.com/kizitonwose/Time) for the original idea and already awesome library!

This minimized ( < 3kB) library shall help to reduce code like

```javascript
const dayInMillis = 24 * 60 * 60 * 1000;                   // Represent a day in milliSeconds
```

## How to use

If you want to use the original files

```javascript
import timext from '../src/index';
import * as u from '../src/units';

// Create by using constructor method
const twoYears = timext(2, u.Y);
const oneWeek = timext(1, u.W);
const threeDays = timext(3, u.D);
const elevenHours = timext(11, u.H);
const sixMinutes = timext(6, u.M);
const fiftySeconds = timext(50, u.S);
const hundredMilliseconds = timext(100, u.MS);

// Convert to other time units
const oneDayInMillis = timext(1, u.D).inMilliseconds();    // Converts one day into milliseconds
const twoWeeksInHours = timext(2, u.W).inHours();          // Converts two weeks into hours

// "operator" + - * /
const duration = timext(1, u.D).plus(timext(6, u.H));
const difference = timext(34, u.M).minus(timext(420, u.S));
const multipliedDuration = timext(2, u.W).multiply(1.5);
const dividedDuration = timext(2500, u.MS).divide(2);

```

If you want to use the minified script from the releases

```javascript
import 'timext.min';

// Create by using number extensions
const twoYears = Number(2).toYears();                      // returns timext(2, u.Y)
const oneWeek = Number(1).toWeeks();                       // returns timext(1, u.W)
const threeDays = Number(3).toDays();                      // returns timext(3, u.D)
const elevenHours = Number(11).toHours();                  // returns timext(11, u.H)
const sixMinutes = Number(6).toMinutes();                  // returns timext(6, u.M)
const fiftySeconds = Number(50).toSeconds();               // returns timext(50, u.S)
const hundredMilliseconds = Number(100).toMilliseconds();  // returns timext(100, u.MS)

// Return in other time units
const oneDayInMillis = Number(1).toDays().inMilliseconds();// Returns one day in milliseconds === 24 * 60 * 60 * 1e3
const twoWeeksInHours = Number(2).toWeeks().inHours();     // Returns two weeks in hours === 2 * 7 * 24

// Convert to other time units
const oneDayInMillis = Number(1).toDays().toHours();       // Converts one day into timext(24, u.H)
const twoWeeksInHours = Number(120).toMinutes().toHours(); // Converts 120 hours into timext(2, u.H)

// add timext to date using date extensions
const inFiveDays = Date.now.plus(Number(5).toDays());
const threeWeeksAgo = Date.now.minus(Number(3).toWeeks());

```

## License

TimeXt-JavaScript is distributed under the MIT license. [See LICENSE](LICENSE.md) for details.
