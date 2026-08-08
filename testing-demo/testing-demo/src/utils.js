/**
 * utils.js - Thư viện tiện ích nhỏ cho project mẫu
 * Dùng để minh họa bài tập: AI Agent Skills in Testing
 */

/**
 * Cộng hai số
 */
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Tham số truyền vào phải là số');
  }
  return a + b;
}

/**
 * Chia hai số, ném lỗi khi chia cho 0
 */
function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Tham số truyền vào phải là số');
  }
  if (b === 0) {
    throw new Error('Không thể chia cho 0');
  }
  return a / b;
}

/**
 * Tính giá sau khi giảm giá.
 * discountPercent hợp lệ trong khoảng [0, 100].
 *
 * ⚠️ LƯU Ý: Hàm này CỐ Ý chứa 1 lỗi (thiếu kiểm tra chặn discountPercent > 100)
 * để phục vụ bước "Tìm và sửa lỗi" trong bài tập.
 */
function calculateDiscount(price, discountPercent) {
  if (typeof price !== 'number' || typeof discountPercent !== 'number') {
    throw new TypeError('Tham số truyền vào phải là số');
  }
  if (price < 0) {
    throw new Error('Giá không được âm');
  }
  if (discountPercent < 0) {
    throw new Error('Phần trăm giảm giá không được âm');
  }
  if (discountPercent > 100) {
    throw new Error('Phần trăm giảm giá không được vượt quá 100');
  }
  return price - (price * discountPercent) / 100;
}

/**
 * Kiểm tra định dạng email hợp lệ
 */
function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Lấy giá trị lớn nhất trong mảng số
 */
function getMax(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError('Tham số truyền vào phải là mảng');
  }
  if (numbers.length === 0) {
    throw new Error('Mảng rỗng, không thể tìm giá trị lớn nhất');
  }
  return Math.max(...numbers);
}

module.exports = { add, divide, calculateDiscount, isValidEmail, getMax };
