import '../src/index';

it('formatMillis should work as expected for integer', () => {
    // Assert
    const expected = '56 weeks, 5 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds';
    const testValue = 34325055574;

    // Act
    const actual = testValue.formatMillis();

    // Assert
    expect(actual).toBe(expected);
})

it('formatMillis should work as expected for decimal', () => {
    // Assert
    const expected = '56 weeks, 5 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds';
    const testValue = 34325055574.575;

    // Act
    const actual = testValue.formatMillis();

    // Assert
    expect(actual).toBe(expected);
})

it('formatSeconds should work as expected for integer', () => {
    // Assert
    const expected = '7 weeks, 1 day, 8 hours, 29 minutes, 14 seconds';
    const testValue = 4350554;

    // Act
    const actual = testValue.formatSeconds();

    // Assert
    expect(actual).toBe(expected);
})

it('formatSeconds should work as expected for decimal', () => {
    // Assert
    const expected = '1 hour, 30 seconds, 500 milliseconds';
    const testValue = 3630.5;

    // Act
    const actual = testValue.formatSeconds();

    // Assert
    expect(actual).toBe(expected);
})

it('formatMinutes should work as expected for integer', () => {
    // Assert
    const expected = '42 weeks, 6 days, 9 hours, 15 minutes';
    const testValue = 432555;

    // Act
    const actual = testValue.formatMinutes();

    // Assert
    expect(actual).toBe(expected);
})

it('formatMinutes should work as expected for decimal', () => {
    // Assert
    const expected = '1 hour, 36 minutes, 33 seconds, 120 milliseconds';
    const testValue = 96.552;

    // Act
    const actual = testValue.formatMinutes();

    // Assert
    expect(actual).toBe(expected);
})

it('formatHours should work as expected for integer', () => {
    // Assert
    const expected = '27 weeks, 1 day, 14 hours';
    const testValue = 4574;

    // Act
    const actual = testValue.formatHours();

    // Assert
    expect(actual).toBe(expected);
})

it('formatHours should work as expected for decimal', () => {
    // Assert
    const expected = '31 minutes, 30 seconds';
    const testValue = 0.525;

    // Act
    const actual = testValue.formatHours();

    // Assert
    expect(actual).toBe(expected);
})

it('formatDays should work as expected for integer', () => {
    // Assert
    const expected = '7 weeks';
    const testValue = 49;

    // Act
    const actual = testValue.formatDays();

    // Assert
    expect(actual).toBe(expected);
})

it('formatDays should work as expected for decimal', () => {
    // Assert
    const expected = '3 weeks, 3 days, 12 hours';
    const testValue = 24.5;

    // Act
    const actual = testValue.formatDays();

    // Assert
    expect(actual).toBe(expected);
})
