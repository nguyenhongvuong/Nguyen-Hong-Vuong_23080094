# Evidence 03 — AI phân tích nguyên nhân lỗi (trước khi sửa)

**Test Fail:** TC09 — `calculateDiscount(100, 150)` kỳ vọng ném lỗi nhưng không ném.

## Phân tích nguyên nhân

Xem lại hàm `calculateDiscount` trong `src/utils.js`:

```js
function calculateDiscount(price, discountPercent) {
  ...
  if (discountPercent < 0) {
    throw new Error('Phần trăm giảm giá không được âm');
  }
  // thiếu điều kiện chặn discountPercent > 100
  return price - (price * discountPercent) / 100;
}
```

**Nguyên nhân gốc:** hàm chỉ kiểm tra `discountPercent < 0` mà **không kiểm tra
`discountPercent > 100`**. Về mặt nghiệp vụ, phần trăm giảm giá hợp lệ chỉ nằm trong
khoảng [0, 100]. Khi truyền `discountPercent = 150`, công thức
`price - (price * discountPercent) / 100` cho ra kết quả **âm** (100 - 150 = -50),
đây là giá trị vô nghĩa cho một mức giá bán.

**Kết luận:** đây là lỗi logic nghiệp vụ (thiếu validate biên trên), không phải lỗi cú
pháp hay runtime crash — vì vậy test không báo lỗi runtime mà báo sai kỳ vọng
(`toThrow()` không được kích hoạt).

**Hướng sửa:** bổ sung điều kiện `if (discountPercent > 100) throw new Error(...)`
tương tự cách đã chặn trường hợp âm.
