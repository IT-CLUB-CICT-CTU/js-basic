/* =========================================
   1. KHAI BÁO BIẾN (DOM ELEMENTS)
   ========================================= */
const inputs = document.querySelectorAll('.qty-input'); // Tất cả ô nhập số lượng
const subtotalSpan = document.getElementById('subtotal');
const taxSpan = document.getElementById('tax');
const finalPriceSpan = document.getElementById('final-price');

// Các phần tử liên quan đến Modal
const modal = document.getElementById('successModal');
const btnCheckout = document.getElementById('btn-checkout');
const btnClose = document.getElementById('btn-close');
const modalAmount = document.getElementById('modal-amount');

// Hàm tiện ích: Định dạng số thành tiền Việt Nam (VD: 1.000.000 đ)
const formatMoney = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount);
};

/* =========================================
   2. HÀM TÍNH TOÁN HÓA ĐƠN
   ========================================= */
function updateBill() {
    let subtotal = 0;

    // Duyệt qua từng ô input để tính tổng
    inputs.forEach(input => {
        const price = Number(input.getAttribute('data-price')); // Lấy giá từ HTML
        const qty = Number(input.value); // Lấy số lượng người dùng nhập

        if (qty >= 0) {
            subtotal += price * qty;
        }
    });

    // Tính thuế 8%
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    // Cập nhật lại giao diện
    subtotalSpan.textContent = formatMoney(subtotal);
    taxSpan.textContent = formatMoney(tax);
    finalPriceSpan.textContent = formatMoney(total);
}

/* =========================================
   3. GẮN SỰ KIỆN (EVENT LISTENERS)
   ========================================= */

// Khi người dùng thay đổi số lượng -> Tính lại tiền ngay
inputs.forEach(input => {
    input.addEventListener('input', updateBill);
});

// Khi bấm nút Thanh Toán -> Hiện Modal
btnCheckout.addEventListener('click', () => {
    // Copy tổng tiền cuối cùng vào trong Modal
    modalAmount.textContent = finalPriceSpan.textContent;
    // Thêm class 'active' để kích hoạt CSS hiển thị
    modal.classList.add('active');
});

// Khi bấm nút Đóng -> Ẩn Modal
btnClose.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Khi click ra vùng đen bên ngoài -> Cũng ẩn Modal
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

/* =========================================
   4. KHỞI TẠO
   ========================================= */
// Chạy hàm tính toán 1 lần ngay khi tải trang để hiển thị số liệu ban đầu
updateBill();