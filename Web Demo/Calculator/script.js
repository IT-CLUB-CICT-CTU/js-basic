// 1. Lấy các phần tử cần thiết
const manHinh = document.getElementById("manHinh");
const buttons = document.querySelectorAll(".btn-num"); // Lấy tất cả nút số & phép tính
const btnEqual = document.querySelector(".btn-eval");  // Nút bằng
const btnAC = document.querySelector(".btn-ac");       // Nút AC
const btnDEL = document.querySelector(".btn-del");     // Nút DEL

// 2. Gắn sự kiện cho các nút SỐ và PHÉP TÍNH
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Lấy giá trị từ thuộc tính value (ví dụ value="*")
        let giaTri = button.getAttribute("value"); 
        manHinh.value += giaTri;
    });
});

// 3. Gắn sự kiện cho nút BẰNG
btnEqual.addEventListener("click", function() {
    try {
        if (manHinh.value === "") return; // Nếu rỗng thì không tính
        manHinh.value = eval(manHinh.value);
    } catch (error) {
        manHinh.value = "Lỗi!";
    }
});

// 4. Gắn sự kiện cho nút AC
btnAC.addEventListener("click", function() {
    manHinh.value = "";
});

// 5. Gắn sự kiện cho nút DEL (Xóa 1 ký tự)
btnDEL.addEventListener("click", function() {
    manHinh.value = manHinh.value.slice(0, -1);
});
