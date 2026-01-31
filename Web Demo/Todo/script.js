const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// 1. Hàm thêm công việc
function addTask() {
    if (inputBox.value === "") {
        alert("Bạn chưa nhập gì cả!");
    } else {
        // Tạo thẻ li (dòng công việc)
        let li = document.createElement("li");
        li.innerText = inputBox.value;

        // Tạo thẻ span (nút xóa hình tròn màu đỏ)
        let span = document.createElement("span");
        span.innerText = "X"; 
        li.appendChild(span);

        // Đưa vào danh sách
        listContainer.appendChild(li);
    }
    // Xóa chữ trong ô input
    inputBox.value = "";
}

// 2. Xử lý sự kiện Click vào danh sách
listContainer.addEventListener("click", function(e) {
    
    // Nếu click trúng thẻ LI -> Đổi màu (Check/Uncheck)
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    // Nếu click trúng thẻ SPAN (nút X) -> Xóa dòng đó
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    
});
