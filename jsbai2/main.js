function bcc() {
    for (i = 1; i < 10; i++) {
        for (j = 1; j < 10; j++) {
            console.log(j * i);
        }
    }
}

function chiahet() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            console.log(i + "fizz");
            continue;
        } else if (i % 5 == 0) {
            console.log(i + "buzz");
            continue;
        } else if (i % 15 == 0) {
            console.log(i + "fizzbuzz");
            continue;
        } else {
            console.log(i + "bizzbuzz");
        }
    }
}

function tong() {
    let sum = 0;
    for (let i = 0; i <= 1000; i += 15) {

        console.log(i);
        sum += i;
    }
    console.log(sum);
}

function snt(n) {
    if (n < 2) {
        console.log("khong phai so nguyen to");
    }
    let count = 0;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            count++;
        }
    }
    if (count == 0) {
        console.log("songuyento");
    } else {
        console.log("khong la so ngto");
    };
}

function daysongto(a, b) {
    for (i = a + 1; i < b; i++) {
        let flag = 1;
        for (j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                flag = 0;
                break;
            }
        }
        if (flag == 1) {
            console.log(i + "songuyento");
        }
    }
}


// function prime(n) {
//     let check = true;
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             check = false;
//         }
//     }

//     check
//         ?
//         console.log(n + " là số nguyên tố") :
//         console.log(n + " không phải số nguyên tố");
// }

// function printPrime(n = 1000) {
//     for (let i = 0; i <= n; i++) {
//         prime(i);
//     }
// }
function nguoc() {
    for (i = 10; i <= 10; i--) {
        if (i <= 0) {
            continue;
        }
        let count = i;
        for (j = 10; j <= 10; j--) {
            if (j <= 0) {
                break;
            }
            console.log(j * count);
        }
    }
}
// let sum = 0;
// for (let i = 1; i < 10000; i += 10) {
//     console.log(i);
//     console.log(i + 2);
//     console.log(i + 4);
//     console.log(i + 6);
//     console.log(i + 8);
//     sum += 5 * i + 20;
// }
// console.log(sum);
function daudit(a) {
    let donvi = 0;
    let frist = 0;
    while (frist >= 1) {
        frist = a % 10;
        a = a / 10;
    }
    console.log(frist);
}

function fibonacci(n) {
    if (n < 0) {
        return -1;
    } else if (n == 0 || n == 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function inn(n) {
    for (j = 0; j <= n; j++) {
        fibonacci(j);
    }
}

function ucln(a, b) {
    while ((a != b)) {
        if (a != b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }
    return a;
}

function bcnn(a, b) {
    return a * b / ucln(a, b);
}

function UCLNvaBCNN() {
    let a = +prompt("Nhập số a"),
        b = +prompt("Nhập số b");
    console.log(`Ước chung lớn nhất của ${a} và ${b} là: ${ucln(a,b)}`);
    console.log(`Bội chung nhỏ nhất của ${a} và ${b} là: ${bcnn(a,b)}`);
}

function thuattoantamgiacan(a) {
    document.write('<table border="1"')
    for (let i = 0; i < a; i++) {
        document.write('<tr>');
        for (j = a - 1; j > i; j--) {
            document.write('<td>');
            document.write(" ");
            document.write('</td');
        }
        for (let j = 1; j <= (2 * i + 1); j++) {
            document.write('<td>');
            document.write("*");
            document.write('</td');
        }
        document.write('</tr>');
    }
    document.write('</table>');
}

function hinh() {
    a = +prompt("nhap a");
    thuattoantamgiacan(a);
}