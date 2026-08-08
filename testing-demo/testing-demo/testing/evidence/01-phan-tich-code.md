# Evidence 01 — AI phân tích code

**Prompt gửi cho AI:** "Đọc file src/utils.js, xác định chức năng chính và các phần cần kiểm thử."

## Kết quả phân tích của AI

File `src/utils.js` export 5 hàm:

| Hàm | Chức năng | Rủi ro cần test |
|---|---|---|
| `add(a, b)` | Cộng 2 số | Sai kiểu dữ liệu đầu vào |
| `divide(a, b)` | Chia 2 số | Chia cho 0, sai kiểu dữ liệu |
| `calculateDiscount(price, discountPercent)` | Tính giá sau giảm giá | Giá âm, % âm, **% > 100 (nghi ngờ chưa được chặn)** |
| `isValidEmail(email)` | Validate định dạng email | Chuỗi rỗng, sai định dạng, không phải string |
| `getMax(numbers)` | Tìm max trong mảng | Mảng rỗng, không phải mảng, phần tử không phải số |

## Nhận định ban đầu
AI đánh dấu `calculateDiscount` là hàm có rủi ro cao nhất vì thiếu điều kiện kiểm tra
`discountPercent > 100`, có khả năng dẫn tới kết quả giá trị âm — cần viết test case
Boundary/Edge để xác minh.
