// //Apa itu ES6

// //ES6 atau EcmaScript 6 atau EcmaScript 2015 merupakan fitur bahasa pada pemrograman Javascript modern atau biasa di sebut next gen javascript. 
// //lalu kenapa kita harus mempelajari ES6, itu karena library maupun framework JS terkini banyak menggunakan sintaks-sintaks ES6.
// //setelah EcmaScript 6 ini banyak fitur-fitur yang dapat digunakan untuk mengoptimalkan

// // let = 

// let nama = "John"
//     if(true){
//     let nama = "Doe"
//     console.log(nama)
//     }
// console.log(nama)

// const pi = 3.14

// //Arrow Function
// const myFunc =()=>{}

// {
// function Tampilkan(a){
//     console.log("halo!"+ a);
// }
// Tampilkan("huda");
// }
// {
// //Anonymous Function
// function tampilkanNama(a){
// console.log("halo,"+ a)
// }
// tampilkanNama("huda")
// }
// {
// //Arrow Function
// const tampilkanNama= (a) => {
//     console.log("halo,"+ a)
// }
// }

// //Latihan soal
// // function lama
// function HitungPersegi(sisi) {

// function luas (s) {return s * s}
// function keliling (s) {return 4 * s}
// console.log("luas:", luas (sisi))
// console.log("keliling:",keliling(sisi))
// }
// HitungPersegi(6)


// //anonymous
// var HitungPersegi = function(sisi) {
//     var luas = function(s) { return s * s; };
//     var keliling = function(s) { return 4 * s; };
    
//     console.log("luas:", luas(sisi));
//     console.log("keliling:", keliling(sisi));
// };
// HitungPersegi(6);


// //Arrow Functions
// var HitungPersegi=(sisi) => {

//     var luas = (s) => s*s; 
//     var keliling = (s) => 4*s;
   
//     console.log("luas:", luas(sisi));
//     console.log("keliling:", keliling(sisi));
// };
// HitungPersegi(6);

// const Hitung_Persegi = (sisi) => {
//     const luas = (s) => {
//     return s * s; }
//     const keliling = (s) => {
//     return 4 * s;}
    
//     console.log("luas:", luas(sisi));
//     console.log("keliling:", keliling(sisi));
// };

// Hitung_Persegi(6);


let nama = "Taufiqurrahman"
console.log("halo, selamat datang."+nama)
console.log("halo, selamat datang.   "+nama)

console.log("halo, "+nama +"! selamat datang")
console.log(`halo, ${nama},selamat datang`)

text1 = "hai"
text2 = "namaku"
text3 = "taufiq"

//Template Literal
//template literal atau biasa di sebut template string merupakan fitur ES6 yang memungkinkan kita menyusun string dengan rapi dengan menggunakan tanda etik terbalik dan ${variabelnya}.

console.log(text1+", "+text2+" "+text3)
console.log(`${text1}, ${text2}, ${text3}`)