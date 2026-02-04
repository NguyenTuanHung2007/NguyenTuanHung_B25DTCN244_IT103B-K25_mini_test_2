// Câu 1

let nameStr = "Quý, Nam, Lan, Hùng, Nam";
let students = nameStr.split(", ");
let flag1 = true;
let flag2 = true;
students.reverse();
// Có làm thay dổi mảng gốc
for (let i = 0; i < students.length; i++) {
  console.log(`${i + 1}. Tên học sinh: ${students[i]}`);
}

if (students.includes("Lan")) {
  console.log("Tên Lan tồn tại trong mảng");
  flag1 = false;
} else {
  console.log("Tên Lan không tồn tại trong mảng");
}
for (let i = 0; i < students.length; i++) {
  if (students[i] === "Nam") {
    console.log(
      `Tên Nam tồn tại trong mảng tại vị trí ${students.indexOf("Nam")}`,
    );
    flag1 = false;
    break;
  }
}
if (flag) {
  console.log("Không tìm thấy tên Nam");
}

// Câu 2
let moneyArr = [100, 200, 300, 400];

console.log("Giá trị của các phần tử là");
for (let value of moneyArr) {
  console.log(`${value}`);
}

console.log("Index các phần tử là");
for (let index in moneyArr) {
  console.log(`${index}`);
}

let sum = 0;
for (let i = 0; i < moneyArr.length; i++) {
  if (i % 2 == 0) {
    sum += moneyArr[i];
  }
}
console.log(sum);
