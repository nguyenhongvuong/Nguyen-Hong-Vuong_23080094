# TEST PLAN — Project: utils.js

## 1. Mục tiêu
Kiểm thử module `src/utils.js` gồm 5 hàm tiện ích: `add`, `divide`,
`calculateDiscount`, `isValidEmail`, `getMax`. Đảm bảo các hàm hoạt động đúng
trong cả trường hợp bình thường lẫn dữ liệu bất thường.

## 2. Phạm vi kiểm thử
| Hàm | Có kiểm thử? |
|---|---|
| add | ✅ |
| divide | ✅ |
| calculateDiscount | ✅ |
| isValidEmail | ✅ |
| getMax | ✅ |

## 3. Công cụ
- Framework: **Jest** (phù hợp cho project Node.js thuần, cú pháp đơn giản,
  hỗ trợ sẵn `toThrow()` để test error handling — không cần cấu hình phức tạp
  như Mocha + Chai).
- Ngôn ngữ: JavaScript (Node.js)

## 4. Danh sách Test Case (16 case)

| ID | Nhóm | Mô tả | Kết quả kỳ vọng |
|---|---|---|---|
| TC01 | Normal | Cộng 2 số dương | 5 |
| TC02 | Error Handling | Truyền chuỗi thay vì số vào `add` | Throw TypeError |
| TC03 | Normal | Chia 2 số hợp lệ | 5 |
| TC04 | Error Handling | Chia cho 0 | Throw Error |
| TC05 | Invalid Data | Tham số không phải số | Throw TypeError |
| TC06 | Normal | Giảm giá 10% cho giá 100 | 90 |
| TC07 | Boundary | discountPercent = 0 | 100 |
| TC08 | Boundary | discountPercent = 100 | 0 |
| TC09 | Edge | discountPercent = 150 | Throw Error |
| TC10 | Invalid Data | price âm | Throw Error |
| TC11 | Normal | Email hợp lệ | true |
| TC12 | Invalid Data | Chuỗi rỗng | false |
| TC13 | Invalid Data | Thiếu ký tự @ | false |
| TC14 | Normal | Tìm max trong mảng | 9 |
| TC15 | Edge | Mảng 1 phần tử | 5 |
| TC16 | Error Handling | Mảng rỗng | Throw Error |

## 5. Quy trình thực hiện
1. AI phân tích code → xác định chức năng & rủi ro (evidence/01)
2. Viết 16 test case theo 5 nhóm (tests/utils.test.js)
3. Chạy test lần 1 → phát hiện TC09 Fail (evidence/02)
4. AI phân tích nguyên nhân gốc trước khi sửa (evidence/03)
5. Sửa code (`src/utils.js`)
6. Chạy lại test → toàn bộ Pass (evidence/04)
