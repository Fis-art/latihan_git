// //Asynchronous Javascript
// //Di dalam dunia pemrograman terdapat dua cara dalam menjalankan program: Synchronous dan Asynchronous. 
// // Synchronous artinya program berjalan secara berurutan sedangkan Asynchronous artinya program berjalan bersama-sama.

// //contoh

// // setTimeout(function(){
// //     console.log("sehingga saya terlambar 30 detik")
// // }, 3000)

// // console.log("saya masih di jalan")

// //Promise
// //Sesuai dengan namanya, Promise berarti janji. Seperti janji yang biasanya memakan waktu dan janji bisa ditepati (resolve) atau diingkari (reject).

// var isMomHappy = true;
// //promise
// var willGetNewPhone = new Promise ( //penulisan anonymous
//     function (resolve, reject) {    //penulisan anonymous
//     var willGetNewPhone 
//         if (isMomHappy) {
//             var phone = { 
//                     brand       : "ROG Phone",
//                     tipe        : "18 pro mix max",
//                     color       : "pink"
//                 };
//                 // // phone = {                               // eksperimen
//                 // //     ...phone,                           // eksperimen
//                 // //     comment: "Ibu senang dapat HP"      // eksperimen
//                 // }                                          // eksperimen
//                 resolve(phone); //fulfilled atau janji ditepati
//             } else {
//                 var reason = new Error("mom is not happy");
                
//                 reject(reason); //reject (ingkar)
//             }
//         }
// );
// function askMom(){
//     willGetNewPhone
//         .then(function(terpenuhi) {
//             console.log(terpenuhi);
//         })
//         .catch(function(gagal)  {
//             console.log(gagal.message);
//         });
// }
// askMom ()

// // contoh promise lainnya (promise memiliki parameter)
// function periksaDataPasien(nomorIdPasien){ //penulisan function bisa
//     var dataPasien = [
//         {id : 1, nama: "John", jenisKelamin : "Laki-Laki"},
//         {id : 2, nama: "Michael", jenisKelamin : "Laki-Laki"},
//         {id : 3, nama: "Sarah", jenisKelamin : "Perempuan"},
//         {id : 4, nama: "Frank", jenisKelamin : "Laki-Laki"},
//     ]
//     return new Promise( function (resolve, reject){
//         // var pasien = dataPasien.find(x=> x.id === nomorIdPasien)         // arrow function 
//         // var pasien = dataPasien.find(function(x)                            // function Declaration / function biasa
//         // {return x.id === nomorIdPasien})
        
//         if (pasien === undefined){
//             reject("data pasien tidak ada")
//         }else {
//             resolve(pasien)
//         }
//     })
// }
// //Cara menggunakan Promise yang memiliki parameter
// periksaDataPasien(1)        //input no id
// .then(function(data){  
//     console.log(data)}
// ).catch(function(err){
//     console.log(err)})


//Apa itu Async/Await
//Async/await adalah fitur yang hadir sejak ES2017. Fitur ini mempermudah kita dalam menangani proses asynchronous.

function doAsync(){
    return new Promise ( function (resolve, reject){
        var check = false
        if (check) {
            resolve("berhasil")
        } else {
            var gagal = new Error("anda kurang beruntung");
            reject(gagal)
        }
    })
}
async function hello () {
    try{
    var result = await doAsync()
    console.log(result)
    } catch(err){
        console.log(err.message)
    }
}
hello()