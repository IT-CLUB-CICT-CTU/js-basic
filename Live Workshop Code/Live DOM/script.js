//?             1. LẤY PHẦN TỬ
//* getElementById
const manHinh = document.getElementById("man-hinh");
// console.log(manHinh);
const nut = document.getElementById("nut-bam");
// console.log(nut); 


//* querySelector
const statusText = document.querySelector(".trang-thai");
// console.log(statusText);


//* querySelectorAll
const danhSachDen = document.querySelectorAll(".bong-den");
console.log(danhSachDen);
// danhSachDen.style.backgroundColor = "red"
// danhSachDen[1].style.backgroundColor = "red"


// //?             2. THAY ĐỔI NỘI DUNG
// //* innerText
const tieuDe = document.getElementById("tieu-de");
// tieuDe.innerText = 'TV MỞ'


// //* innerHTML
// tieuDe.innerHTML = "<span style = ' color: blue'>TV</span>";


// //?             3. Đổi Style 
// manHinh.style.backgroundColor = 'deepskyblue';
// tieuDe.style.color = "yellow";


// //* Thêm/bớt class
// tieuDe.classList.remove("active"); 
// tieuDe.classList.add("active");    
// tieuDe.classList.toggle("active"); //! Bật/Tắt class (hay dùng cho menu)


//?             4. Bắt sự kiện (Events)
// nut.addEventListener("click", function() {
//     tieuDe.classList.toggle("active");
// })


// nut.addEventListener('click', function() {
//     tieuDe.innerText = "TV MỞ";
//     statusText.innerText = "Xin chào";
//     manHinh.style.backgroundColor = "#2c6dad";

//     danhSachDen.forEach(function(tungCaiDen) {
//         tungCaiDen.style.backgroundColor = "yellow";
//         tungCaiDen.style.boxShadow = "0 0 10px yellow";
//     });

//     nut.style.backgroundColor = "#27ae60";
// });


//?             5. Tạo mới và thêm phần tử 
//* Tạo một thẻ mới
// const thongBaoMoi = document.createElement("p"); 

//* Thêm nội dung cho thẻ
// thongBaoMoi.innerText = "Hệ thống đang khởi động...";

//* Thêm thẻ vào trang
// manHinh.appendChild(thongBaoMoi);


//?             6. Tìm phần tử cha (parentElement)
// const denDauTien = document.querySelector(".bong-den");
// const khungChuaDen = denDauTien.parentElement; 

// khungChuaDen.style.border = "1px solid white";
// khungChuaDen.remove()


//?             7. tagName
// console.log(nut.tagName); //=> kết quả trả về luôn viết HOA
// console.log(manHinh.tagName);


//?             8. Target
// const heThongDen = document.querySelector(".he-thong-den");

// heThongDen.addEventListener("click", function(e) {
//     console.log(e.target);
//     if (e.target.tagName === "SPAN") {
//         e.target.style.backgroundColor = "yellow";
//         e.target.style.boxShadow = "0 0 15px cyan";
//     }
// });