// //Object Oriented Programming (OOP)

// //Di dalam dunia pemrograman dikenal sebuah konsep dengan nama OOP atau Object Oriented Programming. 
// // Secara sederhana, dengan konsep OOP maka segala sesuatu dapat kita anggap sebagai sebuah Object.

// //Class dalam konsep OOP
// //Class dalam OOP adalah sebuah blueprint atau template untuk menciptakan object-object yang memiliki atribut (data) dan metode (fungsi) yang terkait.
// //Class adalah cara untuk mendefinisikan struktur atau tipe data yang akan digunakan untuk membuat object dalam suatu program.

// //Class pada Javascript
// //Class sebetulnya adalah sebuah functions yang spesial, 
// // dan seperti function yang kita ketahui sebelumnya bahwa functions dapat dideklarasikan dan dipanggil begitu pula dengan Class.

// //Deklarasi Class di Javascript
// //Cara yang pertama untuk membuat sebuah class yaitu dengan mendeklarasikannya.
// //Caranya adalah tuliskan "Class" diikuti dengan nama class-nya.

// class car {
//     constructor(brand,factory){
//         this.brand = brand
//         this.factory = factory }}

// //Deklarasi Class dengan variabel
// //Cara lain untuk membuat sebuah class yaitu dengan cara membuat sebuah variabel.
// //Class tersebut boleh diberikan nama atau tidak diberi nama.

// // class Car = class {
// //     constructor(brand,factory){
// //         this.brand = brand
// //         this.factory = factory }}

// // class Car = class Cars2 {
// //     constructor(brand,factory){
// //         this.brand = brand
// //         this.factory = factory }}

// //Aturan Penamaan Class
// //Nama sebuah Class biasanya menggunakan kapital pada huruf pertama nya. 
// //Jika terdapat dua kata atau lebih maka huruf pertama pada kata yang selanjutnya harus kapital.

// // class Car{} //benar
// // class car{} //salah
// // class SportCar {} // benar
// // class sportcar {} // salah

// //this pada class javascript
// //Jika diperhatikan selalu terdapat sintaks this pada contoh class di atas. 
// // this tersebut adalah sintaks untuk menunjuk class atau seluruh body di class itu sendiri. 
// // Sintaks "this" hanya hidup di dalam deklarasi Class dan tidak bisa dipanggil di luar class.

// //Di dalam deklarasi sebuah class maka cara untuk memanggil property atau methods 
// // adalah dengan menambahkan "this" lalu diikuti dengan titik dan nama property atau methodsnya.

// //constructor() pada class javascript

// //Constructor adalah methods yang selalu dijalankan paling pertama ketika sebuah "class" dipanggil (instance). 
// //Constructor dapat menerima parameter yang mengirim nilai ke dalam class tersebut.

// //Instance Class (membuat Object dari Class)
// //Seperti function pada umumnya yang terdapat deklarasi dan pemanggilan function atau instance. Deklarasi Class sudah dijelaskan pada point sebelumnya.

// // class Car {
// //     constructor (brand,factory) {
// //         this.brand = brand
// //         this.factory = factory
// //         this.sound = "Honk! honk! vroomvromm"
// //     }}
// // // Instance dari class car
// // var Innova = new Car ("M3 GTR","BMW")
// // console.log(Innova)


// //Method
// //Sintaks constructor pada class merupakan method khusus, dimana dilakukan inisialisasi properties, yang akan dieksekusi secara otomatis ketika class dibuat, 
// //dan ia harus memiliki nama "constructor". (Jika tidak dituliskan, maka Javascript akan menambahkan method constructor kosong secara otomatis).

// //Contoh Method pada Javascript

// // class Car {
// //     constructor(brand) {
// //         this.carname = brand;
// //     }
// //     present() {
// //         return "I Have A " + this.carname;
// //     }}
// // mycar = new Car("Mustang")
// // console.log(mycar.present()) //


// // class Car2 {
// //     constructor(brand) {
// //         this.carname = brand;
// //     }
// //     present(x) {
// //         return x + ", I Have A " + this.carname;
// //     }}
// // mycar = new Car2("Lamborghini")
// // mycar2 = new Car2("Ferrari")
// // console.log(mycar.present("Halo")) // 
// // console.log(mycar2.present("Halo")) // 

// //Getters dan Setters
// class Car3 {
//     constructor(brand) {
//         this._carname = brand;
//     }
//     get carname() {
//         return this._carname;
//     } 
//     set carname(x) {
//         this._carname = x;
//     }
// }
// mycar = new Car3 ("Ferrari");
// mycar.carname = "Porsche"; // memanggik setter, mengubah Ferrari menjadi Porsche
// console.log(mycar.carname); //

// contoh kasus Getter Setters
// class Car4 {
//     // 1. Deklarasi properti privat wajib di bagian atas kelas
//     #carname; 

//     constructor(brand) {
//         this.#carname = brand; 
//     }

//     // 2. Fungsi Getter: Pintu untuk membaca nilai dari luar
//     get carname() {
//         return this.#carname; 
//     } 

//     // 3. Fungsi Setter: Pintu untuk mengubah nilai dari luar
//     set carname(x) {
//         this.#carname = x; 
//     }
// }

// // === CARA PENGGUNAAN DI LUAR KELAS ===

// // Pembuatan objek baru
// mycar = new Car4 ("Porsche");

// // CARA MENGUBAH NILAI: Panggil nama setter-nya langsung (tanpa tanda #)
// mycar.carname = "Ultima"; 

// // CARA MEMBACA NILAI: Panggil nama getter-nya langsung (tanpa tanda #)
// console.log(mycar.carname); // Output: Porsche

// // ==========================================
// // 1. DEFINISI KELAS (DI DALAM KELAS)
// // ==========================================
// class Car3 {
//     // WAJIB: Daftarkan semua properti privat di bagian atas kelas
//     #carname; 
//     #caryear;

//     constructor(brand, year) {
//         // Simpan data langsung ke properti privat asli (#)
//         this.#carname = brand; 
//         this.#caryear = year;
//     }

//     // --- Akses Data Nama Mobil ---
//     get carname() {
//         return this.#carname; // Mengambil dari properti privat
//     } 
//     set carname(x) {
//         this.#carname = x;    // Mengubah isi properti privat
//     }

//     // --- Akses Data Tahun Mobil ---
//     get caryear() {
//         return this.#caryear;
//     }
//     set caryear(y) {
//         this.#caryear = y;
//     }
// }

// // ==========================================
// // 2. CARA PENGGUNAAN (DI LUAR KELAS)
// // ==========================================

// // LANGKAH 1: Membuat objek mobil baru
// let mycar = new Car3("Ferrari", 2024);


// // LANGKAH 2: Mengubah nilai data menggunakan "Setter" (HARAM pakai tanda # di luar sini)
// mycar.carname = "Porsche"; 
// mycar.caryear = 2026;      


// // LANGKAH 3: Membaca/Menampilkan nilai menggunakan "Getter" (HARAM pakai tanda # di luar sini)
// console.log("Nama Mobil Baru : " + mycar.carname); // Output: Porsche
// console.log("Tahun Rilis Baru: " + mycar.caryear); // Output: 2026

// // === CONTOH YANG AKAN MENGHASILKAN ERROR ===
// // mycar.#carname = "Lamborghini"; 
// // Perintah di atas jika diaktifkan akan langsung membuat aplikasi crash/error!



// //Static Method
// class Car5 {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     static hello() {
//         return "Hello! I Have a new car!";
//     }
// }
// mycar = new Car5 ("Ultima");
// // memanggil 'hello()' pada class  Car :
// console.log(Car5.hello());


// //study_case

// class Person {
//     constructor(nama){
//         this.name = nama
//         this.mapel = ""
//     }
//     get personMapel(){
//         return this._mapel
//     }
//     set personMapel(mapel){
//         this._mapel = mapel
//     }
//     berjalan () { //static
//         return "prok prok prok"
//     }
// }
// //Inheritance
// //Inheritance merupakan konsep pewarisan dimana sebuah class dapat mewarisi method maupun property dari class parentnya.
// //Untuk membuat inheritance dari suatu class, gunakan keyword extends. Class yang dibuat dengan metode inheritance, akan memiliki method yang sama dengan class asalnya.

// class school extends Person {
//     constructor (nama){
//         super(nama)
//         this.school = ""
//     }
//     berjalan(){
//         return "prak prak prak"
//     }
// }
// var guru = new school ("Pak Budi")
// guru.personMapel = "Matermatika"
// console.log(guru)
// console.log(guru.berjalan())




