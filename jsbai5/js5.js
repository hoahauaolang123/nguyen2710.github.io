// 1. Viết hàm chuyển đổi một chuỗi thành dạng capitalize.
let changeUpper = (string) => {
        let newstr = string.split(" ");
        for (var i = 0; i < newstr.length; i++) {
            newstr[i] = newStr[i].charAt(0).toUpperCase() + newstr[i].substring(1);
        }
        return newstr.join(" ")
    }
    //2. Viết hàm chuyển đổi một chuỗi thành dạng paramaterize
let changepara = (string) => {
        let newstr = string.split(" ");
        for (var i = 0; i < newstr.length; i++) {
            newstr[i] = newstr[i].charAt(0).toUpperCase() + newstr[i].substring(1);
        }
        return newstr.join("-")
    }
    //3. Viết hàm loại bỏ khoảng trắng ở đầu, cuối, và rút gọn khoảng trắng ở giữa các từ trong chuỗi. 

let removeSpace = (string) => {
        let newstr2 = "";
        for (let i = 0; i < string.length; i++) {
            if (string[i - 1] == " ") {
                if (string[i] != " ") {
                    newStr2 += string[i];
                }
            } else {
                newstr2 += string[i];
            }
        }
        return newstr2.trim();
    }
    //4. Viết hàm đảo ngược chữ thường thành chữ hoa, và ngược lại. VD “aBcD” => “AbCd”
let change = (string) => {
    let newstr3 = "";
    for (i = 0; i < string.length; i++) {
        if (string[i] == string[i].toUpperCase()) {
            newstr3 += string[i].toLowerCase();
        } else {
            newstr3 += string[i].toUpperCase();
        }
    }
    return newstr3;
}



//5. Viết hàm lặp chuỗi n lần. VD “Hehe”, 3 => “HeheHeheHehe
let repeat = (string, n) => {
    let newstr4 = "";
    for (let i = 0; i < n; i++) {
        newstr4 += string;
    }
    return newstr4;
}

//6. Viết hàm chèn một chuỗi con vào chuỗi tại index chỉ định. VD “ac”, “b”, 1 => “abc”
let insert = (string1, string2, index) => {
        let newstr5 = "";
        for (let i = 0; i < string1.length; i++) {
            console.log(str1.length)
            if (i == index) {
                newstr5 += string2;
            }
            newstr5 += string1[i];
        }
        return newstr5;
    }
    //7. Viết hàm rút gọn chuỗi nếu chuỗi dài hơn giá trị chỉ định. VD “abcdef”, 2 => “ab...”;

let rutgon = (string, index) => {
        let newStr6 = "";
        for (let i = 0; i < index; i++) {
            return (string.slice(0, index) + "...");
        }
    }
    // 8 Viết hàm đếm số lần xuất hiện của chuỗi con trong chuỗi. VD “abca”, “a” => 2
let _count = (string1, string2) => {
        return string1.split(string2).length - 1;
    }
    //9. Viết hàm cắt chuỗi theo số từ chỉ định. VD “My name is Ba”, 2 => “My name” 
let catchuoi = (string, index) => {
        let newstr = string.split(" ");
        for (let i = 0; i < index; i++) {
            return (newstr.slice(0, index).join(" "));
        }
    }
    // 10 Viết hàm tạo chuỗi GUID ngẫu nhiên với độ dài 32 ký tự. VD “sfjh2ih4(U#%(kljo423oiir*(#%UIOJ”
let random = (a, b) => a + Math.floor(Math.random() * (b - a));
let createguid = () => {
        let str = "";
        for (let i = 1; i <= 32; i++) {
            str += String.fromCodePoint(random(33, 126));
        }
        return str;
    }
    // 11. Viết hàm thay thế các ký tự trong chuỗi thành ký tự liền sau trong bảng mã Unicode.
let thaythe = (str) => {
    let newstr = "";
    for (let i = 0; i < str.length; i++) {
        newstr += String.fromCodePoint(str.charCodeAt(i) + 1);
    }
    return newstr;
};
// Viết hàm arr._forEach(arr, callback) thực thi code giống như hàm forEach()
// arr = [1, 2, 3];
arr._forEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}
arr._forEach((i) => console.log(i * i))
    // Viết hàm arr._filter(arr, callback) thực thi code giống như hàm filter()

arr = [{
        name: "nguyen",
        age: 20
    },
    {
        name: "dung",
        age: 40
    }
]
let xetDk = (tuoi) => {
    if (tuoi.age > 29) return true;
    else return false;
}

arr._filter = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result[result.length] = this[i];
        }
    }
    return result;
}
arr._filter(xetDk);

// Viết hàm arr._concat(arr2) gộp các phần tử của mảng arr2 vào arr1
arr._concat = function(arr2) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result[result.length] = this[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        result[result.length] = arr2[i];
    }
    return result;
};

// Viết hàm arr._push(value) thêm giá trị vào cuối mảng
arr._push = function(value) {
    let result = this;
    result[result.length] = value;
    return result;
};
// arr._pop() xóa phần tử cuối mảng, đồng thời trả về giá trị của các phần tử bị xóa
arr._pop = function() {
    let result = this[this.length - 1];
    this.length--;
    return result;
};
// arr._indexOf() tìm và trả về index của phần tử, nếu ko có trả về -1
arr._indexOf = function(value) {
    let idxex = -1;
    for (let i = 0; i < this.length; i++) {
        if (this[i] == value) {
            return i;
        }
    }
    return idxex;
};
// arr._reverse() đảo ngược
arr._reverse = function() {
    let temp;
    for (let i = 0; i < this.length / 2; i++) {
        temp = this[i];
        this[i] = this[this.length - 1 - i];
        this[this.length - 1 - i] = temp;
    }
    return this;
};