import '../src/index';

it('All arithmetic operator should work as exptected', () => {
    expect((new Date(2018, 10, 15, 20, 14, 0, 0).plus(Number(3).toHours())).getHours()).toBe(23);
    expect((new Date(2018, 10, 15, 20, 14, 0, 0).minus(Number(3).toDays())).getDate()).toBe(12);
})
