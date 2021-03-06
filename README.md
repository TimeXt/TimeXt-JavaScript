<h1 align="center">
	<img width="90" src="logo.png" alt="timext">
</h1>

<p align="center"><h1 style="text-align: center;">TimeXt-JavaScript</h1></p>

<p align="center">
  <a href="https://www.npmjs.com/package/timext-js"><img src="https://img.shields.io/npm/v/timext-js.svg"/> <img src="https://img.shields.io/npm/dt/timext-js.svg"/></a>
  <a href="http://packagequality.com/#?package=timext-js"><img src="http://npm.packagequality.com/shield/timext-js.svg"/></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"/></a>
  <a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"/></a>
  <a href="https://github.com/TimeXt/timext-JavaScript/"><img src="https://img.shields.io/github/stars/TimeXt/timext-JavaScript.svg"/></a>
</p>

<p align="center"><h6 style="text-align: center;">Unit test coverage</h6></p>

<p align="center">
  <a href="./test"><img src="https://img.shields.io/badge/Statements-100%25-green.svg"/></a>
  <a href="./test"><img src="https://img.shields.io/badge/Branch-79%25-yellow.svg"/></a>
  <a href="./test"><img src="https://img.shields.io/badge/Functions-100%25-green.svg"/></a>
  <a href="./test"><img src="https://img.shields.io/badge/Lines-100%25-green.svg"/></a>
</p>

<p align="center"><h6 style="text-align: center;">Support me</h6></p>

<p align="center">
  <a href="https://www.paypal.me/GuepardoApps"><img src="https://img.shields.io/badge/paypal-support-blue.svg"/></a>
</p>

First of all many thanks to [Kizitonwose](https://github.com/kizitonwose/Time) for the original idea and already awesome library!

- This minimized ( [![Size](https://img.shields.io/badge/size-4KB-green.svg)](releases/timext-2019-11-24-1.min.js) ) library shall help to reduce code like.
- Minified and gzipped only `876 B`!

```javascript
const dayInMillis = 24 * 60 * 60 * 1000;                   // Represent a day in milliseconds
```

## How to use

If you want to use the original files

```javascript
import timext from '../src/index';
import * as u from '../src/units';

// Create by using constructor method
const fiveCenturies = timext(5, u.CE);
const tenDecades = timext(10, u.DC);
const twoYears = timext(2, u.Y);
const oneWeek = timext(1, u.W);
const threeDays = timext(3, u.D);
const elevenHours = timext(11, u.H);
const sixMinutes = timext(6, u.M);
const fiftySeconds = timext(50, u.S);
const hundredMillis = timext(100, u.MS);

// Convert to other time units
const oneDayInMillis = timext(1, u.D).inMillis();          // Converts one day into milliseconds
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
const fiveCenturies = Number(5).toCenturies();             // returns timext(5, u.CE)
const tenDecades = Number(10).toDecades();                 // returns timext(10, u.DC)
const twoYears = Number(2).toYears();                      // returns timext(2, u.Y)
const oneWeek = Number(1).toWeeks();                       // returns timext(1, u.W)
const threeDays = Number(3).toDays();                      // returns timext(3, u.D)
const elevenHours = Number(11).toHours();                  // returns timext(11, u.H)
const sixMinutes = Number(6).toMinutes();                  // returns timext(6, u.M)
const fiftySeconds = Number(50).toSeconds();               // returns timext(50, u.S)
const hundredMillis = Number(100).toMillis();              // returns timext(100, u.MS)

// Return in other time units
const oneDayInMillis = Number(1).toDays().inMillis();      // Returns one day in milliseconds === 24 * 60 * 60 * 1e3
const twoWeeksInHours = Number(2).toWeeks().inHours();     // Returns two weeks in hours === 2 * 7 * 24

// Convert to other time units
const oneDayInMillis = Number(1).toDays().toHours();       // Converts one day into timext(24, u.H)
const twoWeeksInHours = Number(120).toMinutes().toHours(); // Converts 120 hours into timext(2, u.H)

// add timext to date using date extensions
const inFiveDays = Date.now.plus(Number(5).toDays());
const threeWeeksAgo = Date.now.minus(Number(3).toWeeks());

```

Since version 0.6.0 TimeXt has new extensions for the long type to display this number value in a human readable string format.
Since version 0.7.0 TimeXt supports decimal numbers.
Since version 0.8.0 TimeXt has values for decades and centuries and  more precise conversions

```javascript
const readableStringFromMillis = Number(34325055574).formatMillis() // 56 weeks, 5 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds
const readableStringFromSeconds = Number(4350554).formatSeconds()   // 7 weeks, 1 day, 8 hours, 29 minutes, 14 seconds
const readableStringFromMinutes = Number(432555).formatMinutes()    // 42 weeks, 6 days, 9 hours, 15 minutes
const readableStringFromHours = Number(4574).formatHours()          // 27 weeks, 1 day, 14 hours
const readableStringFromDays = Number(24.5).formatDays()            // 3 weeks, 3 days, 12 hours
const readableStringFromWeeks = Number(24.5).formatWeeks()          // 24 weeks, 3 days, 12 hours
```

## Contributors

| [<img alt="JonasSchubert" src="https://avatars0.githubusercontent.com/u/21952813?v=4&s=117" width="117"/>](https://github.com/JonasSchubert) |
| :---------------------------------------------------------------------------------------------------------------------------------------: |
| [Jonas Schubert](https://github.com/JonasSchubert) |

## License

TimeXt-JavaScript is distributed under the MIT license. [See LICENSE](LICENSE.md) for details.

```
MIT License

Copyright (c) 2018 - 2020 Jonas Schubert

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
