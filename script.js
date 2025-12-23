let ans = Math.floor(Math.random() * 3) + 1;
let num = parseInt(window.prompt("猜數字，請輸入 1~3"));
let msg;

if (ans == num) {
  msg = "猜對了！";
} else if (ans > num) {
  msg = "猜錯了，數字再大一點！";
} else if (ans < num) {
  msg = "猜錯了，數字再小一點！";
} else {
  msg = "請輸入 1~3 的數字喔！";
}

window.alert(msg);