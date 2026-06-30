// // //Loop/Iteration adalah tindakan mengulang / merepetisi sebuah proses


// // var angka = [9,7,5,3,1]
// // console.log(angka)
// // console.log(angka[1])
// // console.log(angka[4])

// // // array method
// // //length
// // console.log(angka.length)
// // //push
// // console.log("=========","sebelum push :" + angka)
// // angka.push(6)
// // console.log("=========","sesudah push :" + angka)
// // //pop
// // console.log("=========","sebelum pop : "+ angka)
// // angka.pop()
// // console.log("=========","sesudah pop :" + angka)
// // //unshift
// // console.log("=========","sebelum unshift :" + angka)
// // angka.unshift(8)
// // console.log("=========","sesudah unshift :" + angka)
// // //shift
// // console.log("=========","sebelum shift :" + angka)
// // angka.shift()
// // console.log("=========","sesudah shift :" + angka)


// // //join
// // var peserta = ["Andra","Taufiq","Adit","Debby"]
// // console.log(peserta)
// // console.log("=========","sebelum join")
// // console.log(peserta)
// // console.log("=========","sesudah join")
// // console.log(peserta.join("-"))

// // //split
// // var nama = "Muhammad Desta Greddy Aulia Rahman"
// // console.log("=========","sebelum Split")
// // console.log(nama)
// // console.log("=========","setelah Split")
// // console.log(nama.split(" ").length)

// // //sort
// // var peserta = ["Andra","Taufiq","Adit","Debby"]
// // console.log("=========","sebelum Sort")
// // console.log(peserta)
// // console.log("=========","Sesudah Sort")
// // console.log(peserta.sort())
// // console.log("=========","sebelum Reverse ")
// // console.log(peserta.reverse())

// // //slice

// // var nama = ["Andra","Taufiq","Adit","Debby"]
// // console.log("=========","sebelum slice")
// // console.log(nama)
// // console.log("=========","Sesudah Slice")
// // var newpeserta = peserta.slice(0,2)
// // console.log(newpeserta)
// // console.log(peserta)

// // //Splice

// // var nama = ["Andra","Taufiq","Adit","Debby"]
// // console.log("=========","sebelum splice")
// // console.log(nama)
// // console.log("=========","Sesudah splice")
// // peserta.splice(1,2,"Heldi","Huda")
// // console.log(peserta)

// // Looping Array

// //contoh 1
// var arr = ['jeruk','mangga','apel'];
// for (var buah= 0; buah < arr.length;buah++){
//     console.log(arr[buah])
// }
// // contoh 2
// var nama = ["Heldi","Huda","Rendra","Desta"]
// var i = 0
// while (i < nama.length){
//     console.log(nama[i])
//     i++
// }


//Array Method
//Berikut ini adalah beberapa metode atau built-in functions yang dimiliki oleh tipe data array
//● length: menentukan panjang data dari array
//● push: menambah 1 nilai ke array ke index paling belakang
//● pop: menghapus 1 nilai dari array index paling belakang
//● unshift: menambah 1 nilai ke array index paling depan (index 0)
//● shift: menghapus 1 nilai dari array index paling depan (index 0)
//● join: menggabungkan seluruh element array menjadi sebuah string dan mengambil parameter sebagai
//simbol penyambung antar elemen
//● split: memecah string dan mengembalikan array sesuai dengan separator / pemisah yang didefinisikan
//● sort: mengurutkan elemen di dalam array sesuai alphabet
//● slice: mengambil beberapa lapis data
//● splice: mengubah nilai array dengan menghapus dan/atau menambah nilai baru ke array