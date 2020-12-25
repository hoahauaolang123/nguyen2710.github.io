//1 Viết hàm tạo Weapon với các thuộc tính name, damage, ...
//2 Viết hàm tạo Player với các thuộc tính name, level, weapon, weapon object khởi tạo từ Weapon. Player có các methods:
//  attack() tính và in ra màn hình lượng sát thương gây ra = weapon.damage * level
// changeWeapon() thay đổi weapon của Player

function Weapon(name, damage) {
    this.name = name;
    this.damage = damage;
}

let tank = new Weapon("beudou", 13000);
let buff = new Weapon("jean", 5000)
let dps = new Weapon("diluc", 20000)

function Player(name, level, weapon) {
    this.name = name;
    this.level = level;
    this.weapon = weapon;
    this.attack = function() {
        console.log("Sát thương vật lý: " + (this.weapon.damage * this.level) + " damg")
    };
    this.changeWeapon = function(newWeapon) {
            this.weapon = newWeapon;
        } // } 3 Tạo một vài đối tượng từ Player và Weapon, gọi phương thức attack() trên các đối tượng đó
}

let beudou = new Player("nhanvatbeudou", 69, tank)
let jean = new Player("nhanvatjean", 1, buff)
let diluc = new Player("nhanvandiluc", 1, dps)
    //4. Tạo một object calculator, có các thuộc tính a, b là 2 số, và các phương thức:  
    // a. get(a, b) tham số nhận vào là 2 số a, b
    // b. add() trả về tổng a + b
    // c. sub() trả về hiệu a - b
    // d. div(), mul(), rem(), exp(), ... trả về kết quả phép tính tương ứng
    // e. Làm thế nào để cho phép gọi hàm theo chuỗi VD cal.get(4,5).add(); 
function Calculator() {
    this.get = function() {
        let a = +prompt("Nhập vào số a"),
            b = +prompt("Nhập vào số b");
        this.a = a;
        this.b = b;
    };
    this.add = function() {
        console.log("tong = " + (this.a + this.b));
    };
    this.sub = function() {
        console.log("hieu = " + (this.a - this.b));
    };
    this.div = function() {
        console.log("thuong = " + (this.a / this.b));
    };
    this.mul = function() {
        console.log("tich = " + this.a * this.b);
    };
}
//     Viết hàm tạo Counter, có thuộc tính count, và các phương thức
// count là tham số truyền vào, mặc định = 0
// up() tăng count lên 1
// down() giảm count 1
// get() in ra count hiện tại
// Làm thế nào để cho phép gọi hàm theo chuỗi VD counter.up().up().get().down().get();

function Counter(count = 0) {
    this.count = count;
    this.up = function() {
        console.log("Count tăng 1: " + ++this.count);
    }
    this.down = function() {
        console.log("Count giảm 1: " + --this.count);
    }
    this.get = function() {
        console.log("Count hiện tại: " + this.count);
    }
}
let counter = new Counter();
// Viết hàm tạo Girl có các thuộc tính và phương thức tùy ý 😅
// Viết hàm tạo Boy có các thuộc tính và phương thức tùy ý 😉 (Boys, you know what I mean?)
function people(name, age, hair, facebook) {
    this.name = name;
    this.age = age;
    this.facebook = facebook;
    this.hair = hair;
    this.hobbies = function(a) {
        let a = prompt("nhap so thich ");
        this.hobbies = a;
    }
    this.food = function(b) {
        let b = prompt("mon thich an");
        this.food = b;
    }
}
let tutrinh = new people("Luu vu tu trinh", 20, "fb.com", this.hobbies("xem phim"), this.food("ga"))
let nguyen = new people("nguyen", 20, this.hobbies("xem phim"), this.food("ga"))