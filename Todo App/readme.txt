============================================================
HƯỚNG DẪN THỰC HÀNH: XÂY DỰNG ỨNG DỤNG TODO LIST (DOM JS)
============================================================

I. MỤC TIÊU:
1. Thêm công việc mới vào danh sách khi nhấn nút.
2. Đánh dấu hoàn thành (Check/Uncheck) dòng công việc.
3. Xóa bỏ dòng công việc khi nhấn vào nút X.

------------------------------------------------------------
II. CÁC TỪ KHÓA KỸ THUẬT QUAN TRỌNG (KEYWORD):

1. TRUY XUẤT VÀ TẠO PHẦN TỬ:
   - document.getElementById("id"): Lấy phần tử qua ID.
   - .value: Lấy giá trị chữ từ ô Input.
   - document.createElement("thẻ"): Tạo một thẻ HTML mới trong RAM.
   - cha.appendChild(con): Lồng thẻ con vào trong thẻ cha.

2. XỬ LÝ SỰ KIỆN VÀ ĐIỀU HƯỚNG DOM:
   - .addEventListener("click", function(e) { ... }): Lắng nghe sự kiện.
   - e.target: Xác định phần tử nào vừa được tương tác.
   - .tagName: Kiểm tra tên thẻ (Lưu ý: Luôn trả về chữ IN HOA).
   - .parentElement: Tìm thẻ cha của thẻ hiện tại.

3. THAO TÁC NỘI DUNG VÀ CLASS:
   - .innerHTML: Thay đổi nội dung HTML bên trong.
   - .classList.toggle("tên_class"): Bật/tắt trạng thái của Class.
   - .remove(): Xóa bỏ phần tử khỏi giao diện.

------------------------------------------------------------
III. LƯU Ý KHI THỰC HIỆN:
- Kiểm tra kỹ tên ID và Class phải khớp với file HTML/CSS.
- Cẩn thận với chữ in hoa/thường khi sử dụng tagName (ví dụ: "LI" thay vì "li").
- Xóa trắng ô Input sau khi thêm công việc để tăng trải nghiệm người dùng.
============================================================