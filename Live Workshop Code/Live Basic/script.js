// console.log("External JS");

//###     Vấn đề khai báo lại (Redeclaration)
// var x = 10;
// var x = 20;
// console.log(x);

// let y = 10;
// y = 20;

//###     Vấn đề phạm vi (Block Scope)
// if (true) {
//     var nameVar = "CICT";
//     let nameLet = "CTU";
//     console.log(nameLet);
// }

// console.log(nameVar);

//###     const (Hằng số)
// const greeting = "say Hi";
// greeting = "say Hello instead";

// const greeting = {
//     message: "Hello",
//     number: "five",
// };
// greeting.message = "Hi";
// greeting.number = 'six';
// console.log(greeting);

//###     Number
// let a = 5, b = 2.5;       //=> Khai báo nhiều biến trên cùng dòng
let c = 12e-3;            //=> Số thực dạng khoa học
let d = .25;              //=> Rút gọn cho 0.25
// let e =
//     10;                   //=> Viết trên nhiều dòng
let f = 0b1010;           //=> Hệ nhị phân (Binary) - Bắt đầu bằng 0b
let g = 0xff;             //=> Hệ thập lục phân (Hexadecimal) - Bắt đầu bằng 0x
// let h = Infinity;         //=> Giá trị vô cực (xảy ra khi chia một số cho 0)
// let i = NaN;              //=> Not a Number - Kết quả của một phép tính không hợp lệ
// console.log(g);


//###     String (Chuỗi)
// let studentName = 'Nguyen Van A';
// let schoolName = 'CICT';
// console.log(studentName+" "+schoolName)

// console.log(studentName.length)     //=> Độ dài chuỗi

// let monAn = "   bún bò Huế   "; 
// console.log(monAn.trim());          //=> Xóa dấu cách thừa ở đầu và cuối
// console.log(monAn.toUpperCase());   //=> In hoa
// console.log(monAn.toLowerCase());   //=> In thường

// let s = "Viet Nam    vo dich";
// s.split("");        //=> Tách từng kí tự
// // s.split(" ");       //=> Tách từng từ
// // s.split(/ {1,}/);   //=> Tách nhiều dấu cách
// console.log(s.split(/ {1,}/));

//###     Object
// const smartphone = {
//     brand: "Apple",
//     model: "iPhone 15",
//     price: 1000
// };

// // console.log(smartphone);

// //* Truy cập thuộc tính
// console.log(smartphone.brand);
// console.log(smartphone['model']);

// //* Thêm thuộc tính
// smartphone.ios = 26;
// //* Xóa thuộc tính
// delete smartphone.price

// //* Duyệt Object
// for (let key in smartphone) {
//     console.log(key, smartphone[key])
// }

// //* Lấy danh sách
// console.log(Object.keys(smartphone));
// console.log(Object.values(smartphone));
// console.log(Object.entries(smartphone));


// console.log(smartphone);


//###     Kiểu đặc biệt 
//* null => giá trị được gán để biểu thị rằng biến "không có giá trị" hoặc "trống"
// let b = null;
// console.log(b);

//* undefined => giá trị mặc định của một biến khi chưa được gán
// let a;
// console.log(a); 

// function test() {}
// // console.log(test()); 

// let obj = {};
// console.log(obj.name); 

//###     Toán tử
// let a = 10;
// let b = 5;
// console.log(a + b);
// console.log(a * b);

//* Cộng chuỗi
// let ho = "Nguyễn";
// let ten = "A";
// let hoTen = ho + " " + ten;
// console.log(hoTen);

//###     Điều kiện
// let diem = 2;
// if (diem >= 4) {
//     console.log("Đậu");
// } else {
//     console.log("Trượt");
// }

// console.log(5 == "5");

// console.log(5 === "5");

//###     Hàm
// function tinhTong(a, b=10) {
//     return a + b;
// }

// console.log(tinhTong(2));


//###     Mảng
// //* Cách 1: Dùng dấu ngoặc vuông []
let traiCay = ["Táo", "Nho", "Cam"];
// //* Thêm phần tử mới vào cuối mảng
// traiCay.push("Xoài"); 
// console.log(traiCay[3]);
// console.log(traiCay);

//* Cách 2: Dùng từ khóa new Array()
// let numbers = new Array(1, 2, 3, 4);
// console.log(numbers)

//###     Vòng lặp
//* for
// for (let i = 0; i < 5; i++) {
//     console.log("Lần lặp thứ:", i);
// }

//* forEach(): duyệt từng phần tử trong mảng
traiCay.forEach(function(i) {
    console.log(i);
});

