
// var str="";
// for(var i=0;i<n;i++){
//   for(var j=0;j<i;j++){
//      str+="*";}
//   str+="\n";}
// console.log(str);
// let random = (a,b) => Math.floor(Math.random() * (b-a)+a);
// let isTrangle =(a,b,c)=>a+b>c&&b+c>a&&a+c>b?"la tam giac":"khong phai tam giac";
//  let guessNumber=()=>{
//       let c=prompt("doan c=");
//       s= random(0,10);
//       while(c!=s){
//           c=prompt("nhap lai")
//           count=0;
//       }
//           console.log("gut chop");
//  }
// let nearest = (a,b) => ((100-a)<(100-b))?a:b;
// let sequense = (a,b,c) => (a<b && b<c && a<c) ? "Các số tăng dần" : ( a>b && b>c && a>c) ? "Các số giảm dần" : "Các số không theo thứ tự";
// function countDecimal(num){
//      var b=num-Math.floor(num);
//      var decimalPlaces = num.toString().split('.')[1].length;
//      b = b.toFixed(decimalPlaces);
//      var c=b.slice(2);
//      var count=c.length;
//      console.log(count);
// }
// function countEven(number) {
//     let count =0;
//     while (number!=0){
//         let rem = number%10;
//         if (temp % 2 ==0){
//             count++;}                       
//         number = (number-rem)/10;
//     }
//     console.log("So luong cac chu so chan la : " + count);

// }
// function sum(value1, unit1, value2, unit2) {
//     if (unit1 == "km") {
//         if (unit2 == "km") {
//             return value1 + value2;
//         } else if (unit2 == "m") {
//             return value1 + value2*(10 ** -3);
//         } else if (unit2 == "cm") {
//             return value1 + value2*(10 ** -5);
//         } else if (unit2 == "dm") {
//             return value1 + value2*(10 ** -4);
//         } else if (unit2 == "mm") {
//             return value1 + value2*(10 ** -6);
//         }
//     } else if (unit1 == "m") {
//         if (unit2 == "km") {
//             return value1 + value2*1000;
//         } else if (unit2 == "m") {
//             return value1 + value2;
//         } else if (unit2 == "cm") {
//             return value1 + value2/100;
//         } else if (unit2 == "dm") {
//             return value1 + value2/10;
//         } else if (unit2 == "mm") {
//             return value1 + value2*(10 ** -3);
//         }
//     } else if (unit1 == "cm") {
//         if (unit2 == "km") {
//             return value1 + value2*(10 ** 5);
//         } else if (unit2 == "m") {
//             return value1 + value2*100;
//         } else if (unit2 == "cm") {
//             return value1 + value2;
//         } else if (unit2 == "dm") {
//             return value1 + value2*10;
//         } else if (unit2 == "mm") {
//             return value1 + value2/10;
//         }
//     } else if (unit1 == "dm") {
//         if (unit2 == "km") {
//             return value1 + value2*(10 ** 4);
//         } else if (unit2 == "m") {
//             return value1 + value2*10;
//         } else if (unit2 == "cm") {
//             return value1 + value2/10;
//         } else if (unit2 == "dm") {
//             return value1 + value2;
//         } else if (unit2 == "mm") {
//             return value1 + value2/100;
//         }
//     } else if (unit1 == "mm") {
//         if (unit2 == "km") {
//             return value1 + value2*(10 ** 6);
//         } else if (unit2 == "m") {
//             return value1 + value2*(10 ** 3);
//         } else if (unit2 == "cm") {
//             return value1 + value2*10;
//         } else if (unit2 == "dm") {
//             return value1 + value2*100;
//         } else if (unit2 == "mm") {
//             return value1 + value2;
//         }
//     }
//     return false;
// }
// function isAscending(number) {
//     let str = number + "";
//     for (let i = 0; i <= str.length; i++) {
//         if (+str[i] > +str[i + 1]) {
//             return false;
//         }
//     }
//     return true;
// }
// function find(number,n){
//     let sum= 0;
//     let count=0;
//     for(let i=1;i<=n;i++){
//         sum=sum+i;
//         count++}
//     if(sum<=number){
//         console.log(""+count);
//     }}