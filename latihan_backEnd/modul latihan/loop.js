
// // for (var angka = 1; angka <= 10; angka++) { // isi angka dengan nilai awal dan batas akhir yang diinginkan
// //     console.log("iterasi ke : " + angka);
// // }

// // var jumlah = 0;
// // for (var deret = 5; deret > 0; deret--) {
// //     jumlah += deret;
// // }
// // var jumlah = 0;
// // for (var deret = 5; deret > 0; deret--) {
// //     jumlah += deret;
// //     console.log("Jumlah saat ini: " + jumlah);
// // }

// // console.log("jumlah akhir: " + jumlah);

// // cara 1
// var flag = 1;
// while (flag < 9 ){
//     flag++;
//     console.log('iterasi ke-'+ flag)
// }

// // // cara 2
// var flag = 1;
// do {
//     console.log('iterasi ke-' + flag);
//     flag++
// } while(flag < 10 

// latihan soal
// 
for (var angka = 2; angka <= 10; angka += 2) {
    console.log("Iterasi for ke : " + angka);
}
var angka = 2;
while (angka <= 10) {
    console.log("Iterasi while ke : " + angka);
    angka += 2;
}


for (var angka = 10; angka >= 2; angka -= 2) {
     console.log("Iterasi for ke : " + angka);
}
var angka = 10;
while (angka > 2) {
    console.log("Iterasi while ke : " + angka);
    angka -= 2;
}