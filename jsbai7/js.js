// 1. Đếm xem có tất cả bao nhiêu từ trong 2 đoạn văn có độ dài lớn hơn 8


// 2. Style cho các từ có độ dài lớn hơn 8 trong p1
let p1 = document.querySelector(".p1");
p1.innerHTML = p1.textContent.split(" ").map(i => i.length > 8 ? `<span class="color">${i}</span>` : i).join(" ");

// 3. Thay thế các từ có độ nhỏ hơn 8 trong p2 thành "Anh Ba đẹp trai 🤣". Lưu ý thay thế đúng không thì 0đ!!!

p2.innerHTML = p2.textContent.split(" ").map(i => i.length < 8 ? "Anh Ba đẹp trai 🤣" : i).join(" ");

// 4. Thêm src, alt, href cho ảnh, link
let image = document.body.getElementsByTagName("img")[0];
image.src = "https://genk.mediacdn.vn/2018/10/30/screen-shot-2018-10-30-at-45239-pm-1540893172278416508825.png";
image.alt = "domixi";

let link = document.body.getElementsByTagName("a")[0];
link.href = "https://www.pinterest.com/nguyet9597/xinh-g%C3%A1i-3d/";
link.textContent = "gai3d";

// 5. Thêm background cho các ô ngẫu nhiên trong bảng (mỗi hàng 1 ô, style bằng .style.backgroundColor), và thay đổi nội dung trong các ô đó thành "😍 Mr. Ba đẹp trai"

let table = document.body.getElementsByTagName("table")[0];
for (let i = 0; i < table.rows.length; i++) {
    let j = Math.floor(Math.random() * table.rows.length);
    table.rows[i].cells[j].style.backgroundColor = "red";
    table.rows[i].cells[j].innerHTML = " Mr. Ba đẹp trai";
}