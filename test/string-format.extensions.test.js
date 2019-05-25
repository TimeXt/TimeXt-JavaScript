import '../src/index';

it('formatMilliseconds should work as expected', () => {
    // Assert
    const expected = '56 weeks, 5 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds';
    const testValue = 34325055574;

    // Act
    const actual = testValue.formatMilliseconds();

    // Assert
    expect(actual).toBe(expected);
})

it('formatSeconds should work as expected', () => {
    // Assert
    const expected = '7 weeks, 1 day, 8 hours, 29 minutes, 14 seconds';
    const testValue = 4350554;

    // Act
    const actual = testValue.formatSeconds();

    // Assert
    expect(actual).toBe(expected);
})

it('formatMinutes should work as expected', () => {
    // Assert
    const expected = '42 weeks, 6 days, 9 hours, 15 minutes';
    const testValue = 432555;

    // Act
    const actual = testValue.formatMinutes();

    // Assert
    expect(actual).toBe(expected);
})

it('formatHours should work as expected', () => {
    // Assert
    const expected = '27 weeks, 1 day, 14 hours';
    const testValue = 4574;

    // Act
    const actual = testValue.formatHours();

    // Assert
    expect(actual).toBe(expected);
})
