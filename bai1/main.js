function dientich(R) {
    var PI = 3.14;
    var S = R ** 2 * PI;
    var C = 2 * R * PI;
    document.writeln("dien tich hinh tròn S=" + S);
    document.writeln("chu vi hinh tròn C=" + C);
}

function hienthi_1() {
    let R = +prompt("nhap R");
    dientich(R);
}

function ptbn(a, b) {
    var x = -b / a;
    if (a == 0) {
        if (b == 0) {
            document.write("phuong trinh vo so nghiem")
        } else if (b != 0) {
            document.write("phuonf trinh vo nghiem")
        }
    } else {
        document.write("nghiem x=" + x);
    }
}

function hienthi_2() {
    let a = +prompt("nhap a");
    let b = +prompt("nhap b");
    ptbn(a, b);
}

function doidonvi(x) {
    var a = x * 10;
    var b = x / 100;
    var c = x / 1000;
    document.write(x + "cm=" + a + "mm <br/>");
    document.write(x + "cm=" + b + "m <br/>");
    document.write(x + "cm=" + c + "km");
}

function hienthi_3() {
    let x = +prompt("nhapx");
    doidonvi(x);
}

function doidonvic(x) {
    var a = (x * 1.8) + 32;
    var b = x + 273;
    document.write(x + "C=" + a + "F <br/>");
    document.write(x + "C" + b + "K");
}

function hienthi_4() {
    let x = +prompt("nhapx");
    doidonvic(x);
}

function thoigian(a) {
    var x = a % 60;
    var y = (a - x) / 60;
    document.write(a + "'=" + y + "h" + x + "phút");
}

function hienthi_5() {
    let a = +prompt("nhap a");
    thoigian(a);
}

function gtln(a, b, c) {
    var arr = [a, b, c];
    var maxInNumbers = Math.max.apply(Math, arr);
    document.write("Giá trị lớn nhất là " + maxInNumbers + "<br/>");
}

function hienthi_6() {
    let a = +prompt("nhap a")
    let b = +prompt("nhap b")
    let c = +prompt("nhap b")
    gtln(a, b, c);
}

function hienthi_7() {
    let a = +prompt("nhap a");
    chiahet(a);
}

function chiahet(a) {
    if (a % 55 == 0) {
        document.write("chia het cho 5 va 11");
    } else {
        document.write("khong chia het");
    }
}

function hienthi_8() {
    let a = +prompt("nhap a");
    namnhuan(a);
}

function namnhuan(a) {
    if (a % 4 == 0 && a % 100 != 0 || a % 400 == 0) {
        document.write(a + " là nam nhuân ");
    } else {
        document.write(a + "không là năm nhuân");
    }
}

function hienthi_9() {
    let a = prompt("kytu");
    ktkytu(a);
}

function ktkytu(a) {
    if ((a >= 'a' && a <= 'z') || (a >= 'A' && a <= 'Z')) {
        document.write("la ky tu alphabe");
    } else {
        document.write("khong la ky tu alphabe");
    }
}

function hienthi_10() {
    let a = prompt("kytu");
    ktkytunguyenam(a);
}

function ktkytunguyenam(a) {
    switch (a) {
        case 'o':
        case 'O':
        case 'u':
        case 'U':
        case 'i':
        case 'I':
        case 'a':
        case 'A':
        case 'e':
        case 'E':
            document.write(a + "la nguyên am");
            break;
        default:
            document.write("khong la nguyen am");

    }
}

function hienthi_11() {
    let a = prompt("kytu");
    ktchu(a);
}

function ktchu(a) {
    if ((a >= 'a' && a <= 'z')) {
        document.write("la chu thường");
    } else if ((a >= 'A' && a <= 'Z')) {
        document.write("chu hoa");
    } else {
        document.write("không phải chữ");
    }
}

function hienthi_12() {
    let a = +prompt("nhap a");
    let b = +prompt("nhap b");
    let c = +prompt("nhap b");
    ptbac2(a, b, c);
}

function ptbac2(a, b, c) {
    var delta = b ** 2 - 4 * a * c;
    if (delta < 0) {
        document.write("phương trinh vô nghiệm")
    } else if (delta == 0) {
        var x1 = -b / 2 * a;
        var x2 = -b / 2 * a;
        document.write("nghiêm phương trinh x1=x2=" + x1);
    } else {
        var delta = Math.sqrt(delta);
        var x1 = (-b + delta) / 2;
        var x2 = (-b - delta) / 2;
        document.write("nghiem phuong trinh x1=" + x1 + "<br/>");
        document.write("nghiem phương trinh x2=" + x2);
    }
}

function doidiem(a) {
    if (a >= 8.5 && a <= 10) {
        document.write(a + ":A");
    } else if (a >= 7 && a < 8.5) {
        document.write(a + ":B");
    } else if (a >= 5.5 && a < 7) {
        document.write(a + ":C");
    } else if (a >= 4 && a < 5.5) {
        document.write(a + ":D");
    } else {
        document.write("tạch");
    }
}

function hienthi_13() {
    let a = +prompt("nhap a");
    doidiem(a);
}