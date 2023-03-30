import calculate from '../calculate';

describe('calculate function', () => {
  test('it should return an object with total, next, and operation set to null when AC button is clicked', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };

    const result = calculate(obj, 'AC');

    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('it should return an object with the next property updated when a number button is clicked', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };

    const result = calculate(obj, '6');

    expect(result).toEqual({
      total: '10',
      next: '56',
      operation: '+',
    });
  });
});
