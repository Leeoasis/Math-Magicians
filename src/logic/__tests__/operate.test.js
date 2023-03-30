import operate from '../operate';

describe('operate function', () => {
  test('adds two numbers correctly', () => {
    expect(operate('10', '5', '+')).toBe('15');
    expect(operate('0.1', '0.2', '+')).toBe('0.3');
  });

  test('divides two numbers correctly', () => {
    expect(operate('10', '5', '÷')).toBe('2');
    expect(operate('10', '0', '÷')).toBe("Can't divide by 0.");
  });

  test('subtracts two numbers correctly', () => {
    expect(operate('10', '5', '-')).toBe('5');
    expect(operate('-0.1', '-0.2', '-')).toBe('0.1');
  });

  test('calculates modulo correctly', () => {
    expect(operate('10', '3', '%')).toBe('1');
    expect(operate('10', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
