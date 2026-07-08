// // //Recursive Function
// // //Recursive function maksudnya adalah function yang memanggil dirinya sendiri sampai suatu kondisi pemanggilan dirinya berhenti.

// // // function CountDown(number) {
// // //     console.log(number);
// // //     var newNumber = number - 1;
// // //     if (newNumber > 0) {
// // //     CountDown(newNumber);
// // // }
// // // }
// // // CountDown(10);

// // //First-class Function
// // //maksudnya adalah menjadikan fungsi layaknya class atau dalam hal ini kita bisa mendeklarasikan fungsi di dalam fungsi yang lain.

// // console.log("Hitung Lingkaran")
// // function HitungLingkaran(radius) {
// //     var pi = 22/7

// //     function luas (r) {return pi * r * r}
// //     function keliling (r) {return 2 * pi * r}
// //     console.log("luas:", luas (radius))
// //     console.log("keliling:",keliling(radius))

// // }
// // HitungLingkaran(7)

// // console.log("Hitung Persegi")
// // function HitungPersegi(sisi) {

// //     function luas (s) {return s * s}
// //     function keliling (s) {return 4 * s}
// //     console.log("luas:", luas (sisi))
// //     console.log("keliling:",keliling(sisi))

// // }
// // HitungPersegi(6)

// //Currying Function
// //Fungsi currying adalah teknik untuk mengubah bentuk suatu fungsi dengan beberapa argumen menjadi sebuah fungsi anak yang berurutan.

// function tambah (a,b){
//     return a + b
// }
// console.log(tambah(2)(5))

// // Currying Function
// function tambah (a) {
//     return function(b){
//         return a + b
//   }
// }
// console.log(tambah(2)(5))

//Declarative vs Imperative Pattern
// Terdapat dua pattern atau pola ketika membuat kode program yaitu:
// ● Imperative berfokus pada gambaran bagaimana suatu program beroperasi, ada step by stepnya.
// ● Declarative berfokus pada apa yang harus dicapai oleh program tanpa menjabarkan step by stepnya.

//Imperative Pattern
function HitungBilanganGenap(arr) {
    var count = 0
    for (var i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0) {

    }
    }
    return count;
}

