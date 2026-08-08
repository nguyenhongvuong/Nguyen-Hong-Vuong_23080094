const { add, divide, calculateDiscount, isValidEmail, getMax } = require('../../src/utils');

describe('add()', () => {
  // --- Chức năng bình thường ---
  test('TC01 [Normal] cộng 2 số dương', () => {
    expect(add(2, 3)).toBe(5);
  });

  // --- Error Handling ---
  test('TC02 [Error Handling] ném lỗi khi truyền vào chuỗi thay vì số', () => {
    expect(() => add('a', 2)).toThrow(TypeError);
  });
});

describe('divide()', () => {
  // --- Chức năng bình thường ---
  test('TC03 [Normal] chia 2 số hợp lệ', () => {
    expect(divide(10, 2)).toBe(5);
  });

  // --- Error Handling ---
  test('TC04 [Error Handling] ném lỗi khi chia cho 0', () => {
    expect(() => divide(10, 0)).toThrow('Không thể chia cho 0');
  });

  // --- Dữ liệu sai/rỗng ---
  test('TC05 [Invalid Data] ném lỗi khi tham số không phải số', () => {
    expect(() => divide(10, 'x')).toThrow(TypeError);
  });
});

describe('calculateDiscount()', () => {
  // --- Chức năng bình thường ---
  test('TC06 [Normal] giảm giá 10% đúng cho giá 100', () => {
    expect(calculateDiscount(100, 10)).toBe(90);
  });

  // --- Boundary Case ---
  test('TC07 [Boundary] discountPercent = 0 -> giá không đổi', () => {
    expect(calculateDiscount(100, 0)).toBe(100);
  });

  test('TC08 [Boundary] discountPercent = 100 -> giá bằng 0', () => {
    expect(calculateDiscount(100, 100)).toBe(0);
  });

  // --- Edge Case ---
  test('TC09 [Edge] discountPercent = 150 (>100) phải ném lỗi, không được trả số âm', () => {
    expect(() => calculateDiscount(100, 150)).toThrow();
  });

  // --- Dữ liệu sai/rỗng ---
  test('TC10 [Invalid Data] price âm phải ném lỗi', () => {
    expect(() => calculateDiscount(-50, 10)).toThrow('Giá không được âm');
  });
});

describe('isValidEmail()', () => {
  // --- Chức năng bình thường ---
  test('TC11 [Normal] email hợp lệ trả về true', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
  });

  // --- Dữ liệu sai/rỗng ---
  test('TC12 [Invalid Data] chuỗi rỗng trả về false', () => {
    expect(isValidEmail('')).toBe(false);
  });

  test('TC13 [Invalid Data] thiếu ký tự @ trả về false', () => {
    expect(isValidEmail('testexample.com')).toBe(false);
  });
});

describe('getMax()', () => {
  // --- Chức năng bình thường ---
  test('TC14 [Normal] tìm số lớn nhất trong mảng', () => {
    expect(getMax([3, 7, 2, 9, 4])).toBe(9);
  });

  // --- Edge Case ---
  test('TC15 [Edge] mảng chỉ có 1 phần tử', () => {
    expect(getMax([5])).toBe(5);
  });

  // --- Error Handling ---
  test('TC16 [Error Handling] mảng rỗng phải ném lỗi', () => {
    expect(() => getMax([])).toThrow('Mảng rỗng, không thể tìm giá trị lớn nhất');
  });
});
