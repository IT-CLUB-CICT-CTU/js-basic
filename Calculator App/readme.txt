============================================================
HƯỚNG DẪN THỰC HÀNH: XÂY DỰNG MÁY TÍNH CÁ NHÂN (DOM JS)
============================================================

I. MỤC TIÊU:
1. Hiển thị con số/phép tính lên màn hình khi bấm nút
2. Xóa toàn bộ (AC) hoặc xóa từng ký tự cuối (DEL)
3. Tính toán kết quả chính xác khi nhấn nút dấu bằng (=)

------------------------------------------------------------
II. CÁC TỪ KHÓA KỸ THUẬT QUAN TRỌNG (KEYWORD):

1. TRUY XUẤT PHẦN TỬ:
   - document.getElementById(): Lấy ô hiển thị kết quả.
   - document.querySelectorAll(): Lấy danh sách các nút số/phép tính
   - .value: Lấy giá trị (con số hoặc toán tử) được gán sẵn trong thẻ HTML

2. CÔNG CỤ TÍNH TOÁN & CHUỖI:
   - eval(chuỗi): Hàm  giúp tự động tính toán một chuỗi phép tính (Ví dụ: eval("2+3*5") sẽ trả về 17)
   - .slice(0, -1): Lệnh cắt bỏ 1 ký tự cuối cùng trong chuỗi (Dùng cho nút DEL)

3. XỬ LÝ SỰ KIỆN:
   - Vòng lặp .forEach(): Để gắn sự kiện click cho tất cả các nút số cùng lúc
   - try...catch: (Nâng cao) Để bắt lỗi khi người dùng nhập phép tính sai (Ví dụ: "5++2")

------------------------------------------------------------
III. LÝ THUYẾT GỢI Ý:

- Bước 1 (NHẬP): Mỗi khi bấm nút số, ta lấy giá trị cũ trên màn hình cộng thêm giá trị mới vừa bấm
- Bước 2 (XÓA): 
  + AC: Gán màn hình bằng rỗng ""
  + DEL: Lấy chuỗi hiện tại, dùng .slice(0, -1) để cắt đuôi
- Bước 3 (TÍNH): Khi nhấn "=", dùng hàm eval() với nội dung trên màn hình và hiển thị lại kết quả

------------------------------------------------------------
IV. LƯU Ý:
- Input màn hình có ID là "manHinh"
- Các nút số, +-*/ có Class là "btn-num"
- Nút Bằng có Class là "btn-eval"
- Nút Xóa hết có Class là "btn-ac"
- Nút Xóa từng số có Class là "btn-del"
============================================================