# HƯỚNG DẪN THỰC HÀNH: XÂY DỰNG MÁY TÍNH BỎ TÚI

## I. MỤC TIÊU

* **Hiển thị:** Cập nhật con số hoặc phép tính lên màn hình khi người dùng bấm nút
* **Xóa dữ liệu:** Xử lý tính năng xóa toàn bộ (**AC**) hoặc xóa từng ký tự cuối (**DEL**)
* **Xử lý toán học:** Tính toán kết quả chính xác khi nhấn nút dấu bằng (**=**)

---

## II. CÁC TỪ KHÓA KỸ THUẬT QUAN TRỌNG (KEYWORDS)

### 1. Truy xuất phần tử (DOM Manipulation)

* `document.getElementById()`: Dùng để lấy ô hiển thị kết quả (màn hình)
* `document.querySelectorAll()`: Lấy danh sách các nút số hoặc phép tính dưới dạng một NodeList
* `.value`: Thuộc tính để lấy hoặc gán giá trị (con số/toán tử) cho thẻ HTML (thường là thẻ `<input>`)

### 2. Công cụ tính toán & Xử lý chuỗi

* `eval(chuỗi)`: Hàm thực thi một chuỗi văn bản như một phép tính số học
* *Ví dụ:* `eval("2+3*5")`  `17`


* `.slice(0, -1)`: Phương thức cắt chuỗi, giúp loại bỏ 1 ký tự cuối cùng (nút DEL)

### 3. Xử lý sự kiện (Event Handling)

* `forEach()`: Vòng lặp dùng để gắn sự kiện `click` cho hàng loạt nút bấm cùng một lúc

---

## III. LUỒNG XỬ LÝ LOGIC (WORKFLOW)

1. **Bước 1 (NHẬP):** Mỗi khi bấm nút số, ta lấy giá trị hiện tại trên màn hình cộng dồn với giá trị của nút vừa bấm. (nối chuỗi)
2. **Bước 2 (XÓA):**
* **AC:** Gán giá trị màn hình về chuỗi rỗng `""`.
* **DEL:** Lấy chuỗi hiện tại và áp dụng `.slice(0, -1)` để cắt bỏ ký tự cuối


3. **Bước 3 (TÍNH TOÁN):** Khi bấm nút `=`, chuyển toàn bộ chuỗi trên màn hình vào hàm `eval()`, sau đó lấy kết quả trả về hiển thị lại lên màn hình

---

## IV. LƯU Ý

Để mã nguồn hoạt động chính xác, bạn cần chú ý các ID và Class sau:

| Thành phần           |  Selector (ID/Class)  |            Mô tả                  |
| ---                  | ---                   | ---                               |
| **Màn hình**         | `#manHinh`            | Thẻ input hiển thị số             |
| **Nút số/Phép tính** | `.btn-num`            | Các nút 0-9 và `+`, `-`, `*`, `/` |
| **Nút Bằng**         | `.btn-eval`           | Nút thực hiện tính toán           |
| **Nút Xóa hết**      | `.btn-ac`             | Xóa sạch màn hình                 |
| **Nút Xóa từng số**  | `.btn-del`            | Xóa lùi 1 ký tự                   |