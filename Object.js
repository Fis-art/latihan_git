//Object Javascript
//Object adalah kumpulan data tidak berurut yang berisikan pasangan property (key) dan value . 
// Jika kita ingat pada tipe data Array yang merupakan kumpulan data yang berurut sesuai indeks, 
//sedangkan Object mirip dengan Array tapi kini kita memberikan property atau key sendiri.

//cara menuliskan Object menggunakan kurung kurawal ({}) berbeda dengan array yang menggunakan kurung siku.

//Deklarasi Object
//contoh

// contoh object

var orang = [
     {
    nama : "taufik",
    warnaKulit : "kuning langsat",
    jenisKelamin : "Laki-Laki",
    tinggiBadan : 160,
    beratBadan : 55,
    usia : 24,
     }
]
console.log(orang[0])


var identitas = [
     {
    nama : "Adit",
    warnaKulit : "kuning langsat",
    jenisKelamin : "Laki-Laki",
    tinggiBadan : 168,
    beratBadan : 85,
    usia : 21,
},
{
    nama : "Yul",
    warnaKulit : "kuning langsat",
    jenisKelamin : "Perempuan",
    tinggiBadan : 170,
    beratBadan : 60,
    usia : 18,
}
]
// // console.log(identitas[0])
// // console.log(identitas[0].usia)
// // console.log(identitas[1])

// console.log("==================")
// console.log("menggunakan Pengulangan biasa")
// for(i=0;i< orang.length; i++)
//     console.log(orang[i].warnaKulit)

// console.log("==================")
// console.log("menggunakan Pengulangan For Each")

// identitas.forEach(function(item){
//     console.log("warna kulit : " + item.warnaKulit)
// })


// console.log("==================")
// console.log("menggunakan Pengulangan map")

// var warnaKulit = orang.map(function(item){
//     return item.warnaKulit
// })
// console.log(warnaKulit)

// console.log("==================")
// console.log("menggunakan Pengulangan filter")

// var filterJenisKelamin = identitas.filter(function(item){
//     return item.jenisKelamin =="Perempuan"
// })

// console.log(filterJenisKelamin)

// var filterUsia = identitas.filter(function(item){
//     return item.usia > 20
// })

// console.log(filterUsia)














