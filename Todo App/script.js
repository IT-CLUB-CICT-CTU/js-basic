const inputBox = document.getElementById("input-box");
const listContainer = ; // lấy listContainer

// 1. Hàm thêm công việc
function addTask() {
    if (inputBox.value === "") {

    } else {
        // Tạo thẻ li (dòng công việc)


        // Tạo thẻ span (nút xóa hình tròn màu đỏ)


        // Đưa vào danh sách

    }
    // Xóa chữ trong ô input

}

// 2. Xử lý sự kiện Click vào danh sách
listContainer.addEventListener("click", function(e) {
    // Nếu click trúng thẻ LI -> Đổi màu (Check/Uncheck)
    if (e.target.tagName === "LI") {
        
    }
    // Nếu click trúng thẻ SPAN (nút X) -> Xóa dòng đó
    else if (e.target.tagName === "SPAN") {
        
    }
});
