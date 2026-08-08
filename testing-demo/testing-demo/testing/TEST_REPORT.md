# TEST REPORT — Project: utils.js

## 1. Tổng quan kết quả

| Lần chạy | Tổng số Test | Pass | Fail |
|---|---|---|---|
| Lần 1 (trước khi sửa) | 16 | 15 | 1 |
| Lần 2 (sau khi sửa) | 16 | 16 | 0 |

## 2. Lỗi phát hiện và cách sửa

**Lỗi:** `calculateDiscount(price, discountPercent)` không kiểm tra
`discountPercent > 100`, dẫn đến trả về giá trị âm khi truyền phần trăm giảm giá
vượt 100 (VD: `calculateDiscount(100, 150)` → `-50`), là kết quả vô nghĩa về
nghiệp vụ.

**Test phát hiện:** TC09 [Edge Case]

**Nguyên nhân gốc:** thiếu điều kiện chặn biên trên (chỉ có điều kiện chặn biên
dưới `discountPercent < 0`).

**Cách sửa:** bổ sung
```js
if (discountPercent > 100) {
  throw new Error('Phần trăm giảm giá không được vượt quá 100');
}
```

**Kết quả sau sửa:** TC09 chuyển từ Fail → Pass, các test còn lại không bị ảnh
hưởng (16/16 Pass).

## 3. AI đã hỗ trợ những gì
- Đọc và tóm tắt chức năng từng hàm trong `src/utils.js`
- Đề xuất khoanh vùng hàm rủi ro cao (`calculateDiscount`) cần test kỹ ở biên
- Gợi ý bộ 16 test case bao phủ 5 nhóm: Normal, Invalid Data, Boundary, Edge,
  Error Handling
- Viết code test bằng Jest
- Phân tích nguyên nhân gốc của test Fail dựa trên logic hàm, trước khi đề xuất
  cách sửa

## 4. Sinh viên đã tự kiểm tra / quyết định gì
- Xác nhận lại từng test case có phản ánh đúng nghiệp vụ thực tế không (VD: mức
  giảm giá tối đa hợp lý là 100%, không phải một con số tùy ý)
- Kiểm tra log lỗi TC09 để hiểu vì sao `toThrow()` fail — không chỉ chấp nhận
  kết quả AI đưa ra mà đọc lại công thức tính để xác nhận nguyên nhân đúng là
  thiếu chặn biên trên, không phải lỗi khác
- Quyết định cách sửa: ném lỗi (throw) thay vì tự động giới hạn (clamp) giá trị
  về 100%, vì ném lỗi giúp phát hiện sớm dữ liệu đầu vào sai ở tầng gọi hàm
- Chạy lại toàn bộ 16 test (không chỉ TC09) để xác nhận việc sửa không làm hỏng
  các case khác (regression check)

## 5. Sử dụng Skill Testing
Dùng AI theo mô hình: **AI hỗ trợ phân tích & sinh test — sinh viên xác minh &
quyết định**. Lý do chọn cách này thay vì để AI tự động sửa lỗi và tự chạy lại
toàn bộ: đề bài yêu cầu sinh viên phải hiểu rõ test đang kiểm tra gì, vì sao
Fail và vì sao cách sửa phù hợp, chứ không chỉ chạy công cụ theo kiểu hộp đen.
