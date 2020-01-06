import '../src/index.js';

describe('formatMillis', () => {
    test('should work as expected for integer', () => {
        // Assert
        const expected = '56 weeks, 5 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds';
        const testValue = 34325055574;

        // Act
        const actual = testValue.formatMillis();

        // Assert
        expect(actual).toBe(expected);
    });

    test('should work as expected for decimal', () => {
        // Assert
        const expected = '56 weeks, 5 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds';
        const testValue = 34325055574.575;

        // Act
        const actual = testValue.formatMillis();

        // Assert
        expect(actual).toBe(expected);
    });

    test('should work as expected for integer 1', () => {
        // Assert
        const expected = '1 millisecond';
        const testValue = 1;

        // Act
        const actual = testValue.formatMillis();

        // Assert
        expect(actual).toBe(expected);
    });

    test('should work as expected for smaller then 1', () => {
        // Assert
        const expected = '0 millisecond';
        const testValue = 0.5;

        // Act
        const actual = testValue.formatMillis();

        // Assert
        expect(actual).toBe(expected);
    });
});

describe('formatSeconds', () => {
    test('should work as expected for integer', () => {
        // Assert
        const expected = '7 weeks, 1 day, 8 hours, 29 minutes, 14 seconds';
        const testValue = 4350554;

        // Act
        const actual = testValue.formatSeconds();

        // Assert
        expect(actual).toBe(expected);
    });

    test('should work as expected for decimal', () => {
        // Assert
        const expected = '1 hour, 30 seconds, 500 milliseconds';
        const testValue = 3630.5;

        // Act
        const actual = testValue.formatSeconds();

        // Assert
        expect(actual).toBe(expected);
    });

    test('should work as expected for integer 1', () => {
        // Assert
        const expected = '1 second';
        const testValue = 1;

        // Act
        const actual = testValue.formatSeconds();

        // Assert
        expect(actual).toBe(expected);
    });

    test('should work as expected for smaller then 1', () => {
        // Assert
        const expected = '500 milliseconds';
        const testValue = 0.5;

        // Act
        const actual = testValue.formatSeconds();

        // Assert
        expect(actual).toBe(expected);
    });
});

describe('formatMinutes', () => {
    test('should work as expected for integer', () => {
        // Assert
        const expected = '42 weeks, 6 days, 9 hours, 15 minutes';
        const testValue = 432555;

        // Act
        const actual = testValue.formatMinutes();

        // Assert
        expect(actual).toBe(expected);
    });

    test('should work as expected for decimal', () => {
        // Assert
        const expected = '1 hour, 36 minutes, 33 seconds, 120 milliseconds';
        const testValue = 96.552;

        // Act
        const actual = testValue.formatMinutes();

        // Assert
        expect(actual).toBe(expected);
    });

    test('should work as expected for integer 1', () => {
        // Assert
        const expected = '1 minute';
        const testValue = 1;

        // Act
        const actual = testValue.formatMinutes();

        // Assert
        expect(actual).toBe(expected);
    });

    test('should work as expected for smaller then 1', () => {
        // Assert
        const expected = '30 seconds';
        const testValue = 0.5;

        // Act
        const actual = testValue.formatMinutes();

        // Assert
        expect(actual).toBe(expected);
    });
});

describe('formatHours', () => {
    test('should work as expected for integer', () => {
        // Assert
        const expected = '27 weeks, 1 day, 14 hours';
        const testValue = 4574;

        // Act
        const actual = testValue.formatHours();

        // Assert
        expect(actual).toBe(expected);
    });

    test('should work as expected for decimal', () => {
        // Assert
        const expected = '31 minutes, 30 seconds';
        const testValue = 0.525;

        // Act
        const actual = testValue.formatHours();

        // Assert
        expect(actual).toBe(expected);
    });

    test('should work as expected for integer 1', () => {
        // Assert
        const expected = '1 hour';
        const testValue = 1;

        // Act
        const actual = testValue.formatHours();

        // Assert
        expect(actual).toBe(expected);
    });

    test('should work as expected for smaller then 1', () => {
        // Assert
        const expected = '30 minutes';
        const testValue = 0.5;

        // Act
        const actual = testValue.formatHours();

        // Assert
        expect(actual).toBe(expected);
    });
});

describe('formatDays', () => {
    test('should work as expected for integer', () => {
        // Assert
        const expected = '7 weeks';
        const testValue = 49;

        // Act
        const actual = testValue.formatDays();

        // Assert
        expect(actual).toBe(expected);
    });

    test('should work as expected for decimal', () => {
        // Assert
        const expected = '3 weeks, 3 days, 12 hours';
        const testValue = 24.5;

        // Act
        const actual = testValue.formatDays();

        // Assert
        expect(actual).toBe(expected);
    });

    test('should work as expected for integer 1', () => {
        // Assert
        const expected = '1 day';
        const testValue = 1;

        // Act
        const actual = testValue.formatDays();

        // Assert
        expect(actual).toBe(expected);
    });

    test('should work as expected for smaller then 1', () => {
        // Assert
        const expected = '12 hours';
        const testValue = 0.5;

        // Act
        const actual = testValue.formatDays();

        // Assert
        expect(actual).toBe(expected);
    });
});

describe('formatWeeks', () => {
    test('should work as expected for integer', () => {
        // Assert
        const expected = '49 weeks';
        const testValue = 49;

        // Act
        const actual = testValue.formatWeeks();

        // Assert
        expect(actual).toBe(expected);
    });

    test('should work as expected for decimal', () => {
        // Assert
        const expected = '24 weeks, 3 days, 12 hours';
        const testValue = 24.5;

        // Act
        const actual = testValue.formatWeeks();

        // Assert
        expect(actual).toBe(expected);
    });

    test('should work as expected for integer 1', () => {
        // Assert
        const expected = '1 week';
        const testValue = 1;

        // Act
        const actual = testValue.formatWeeks();

        // Assert
        expect(actual).toBe(expected);
    });

    test('should work as expected for smaller then 1', () => {
        // Assert
        const expected = '3 days, 12 hours';
        const testValue = 0.5;

        // Act
        const actual = testValue.formatWeeks();

        // Assert
        expect(actual).toBe(expected);
    });
});
