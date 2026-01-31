# HƯỚNG DẪN THỰC HÀNH: XÂY DỰNG ỨNG DỤNG TODO APP

## I. MỤC TIÊU

* **Thêm mới:** Đưa nội dung từ ô nhập liệu vào danh sách hiển thị khi nhấn nút
* **Trạng thái:** Cho phép đánh dấu hoàn thành (Check/Uncheck) từng công việc
* **Loại bỏ:** Xóa hoàn toàn một dòng công việc khỏi danh sách

---

## II. CÁC TỪ KHÓA KỸ THUẬT QUAN TRỌNG (KEYWORDS)

### 1. Truy xuất và Tạo phần tử

* `document.getElementById("id")`: Lấy đối tượng HTML thông qua định danh duy nhất
* `.value`: Trích xuất nội dung văn bản mà người dùng đã nhập vào ô Input
* `document.createElement("thẻ")`: Khởi tạo một thẻ HTML mới (ví dụ: `li`, `button`) trong bộ nhớ trước khi đưa ra màn hình
* `cha.appendChild(con)`: Phương thức "gắn" thẻ con vào bên trong thẻ cha (ví dụ: gắn `li` vào trong `ul`)

### 2. Xử lý sự kiện và Điều hướng DOM

* `.addEventListener("click", function(e) { ... })`: Gắn sự kiện khi click chuột
* `e.target`: Xác định chính xác phần tử nào (nút xóa hay dòng chữ) vừa được click
* `.tagName`: Kiểm tra loại thẻ (Lưu ý: Luôn trả về giá trị **IN HOA** như `"LI"`, `"BUTTON"`)
* `.parentElement`: Truy hồi ngược về thẻ bao bọc phía ngoài (thường dùng để xác định dòng `li` cần xóa khi bấm nút con)

### 3. Thao tác Nội dung và Class

* `.innerHTML`: Cập nhật cấu trúc hoặc văn bản bên trong một phần tử
* `.classList.toggle("tên_class")`: Thêm hoặc gỡ bỏ một class (thường dùng để gạch ngang chữ khi hoàn thành)
* `.remove()`: Phương thức xóa trực tiếp phần tử khỏi cây DOM

---

## III. LUỒNG XỬ LÝ LOGIC (WORKFLOW)

1. **Hành động Thêm:**
* Lấy dữ liệu từ Input  Tạo thẻ `li` mới  Gán nội dung  `appendChild` vào danh sách `ul`


2. **Hành động Tương tác (Event Delegation):**
* Lắng nghe sự kiện click tại thẻ Cha (`ul`)
* Nếu click trúng thẻ `LI`: Dùng `toggle` để thay đổi trạng thái hoàn thành
* Nếu click trúng thẻ `SPAN` hoặc `BUTTON` xóa: Dùng `parentElement.remove()` để hủy dòng đó



---

## IV. LƯU Ý

* **Khớp định danh:** Kiểm tra kỹ `ID` và `Class` giữa file JS và file HTML
* **Case Sensitive:** Khi so sánh `tagName`, phải viết hoa hoàn toàn (ví dụ: `if (e.target.tagName === "LI")`)
* **UX (Trải nghiệm):** Đừng quên gán `input.value = ""` sau khi thêm thành công để người dùng không phải xóa tay