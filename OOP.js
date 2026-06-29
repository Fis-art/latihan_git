//Object Oriented Programming (OOP)

//Di dalam dunia pemrograman dikenal sebuah konsep dengan nama OOP atau Object Oriented Programming. 
// Secara sederhana, dengan konsep OOP maka segala sesuatu dapat kita anggap sebagai sebuah Object.

//Class dalam konsep OOP
//Class dalam OOP adalah sebuah blueprint atau template untuk menciptakan object-object yang memiliki atribut (data) dan metode (fungsi) yang terkait.
//Class adalah cara untuk mendefinisikan struktur atau tipe data yang akan digunakan untuk membuat object dalam suatu program.

//Class pada Javascript
//Class sebetulnya adalah sebuah functions yang spesial, 
// dan seperti function yang kita ketahui sebelumnya bahwa functions dapat dideklarasikan dan dipanggil begitu pula dengan Class.

//Deklarasi Class di Javascript
//Cara yang pertama untuk membuat sebuah class yaitu dengan mendeklarasikannya.
//Caranya adalah tuliskan "Class" diikuti dengan nama class-nya.

class car {
    constructor(brand,factory){
        this.brand = brand
        this.factory = factory }}

//Deklarasi Class dengan variabel
//Cara lain untuk membuat sebuah class yaitu dengan cara membuat sebuah variabel.
//Class tersebut boleh diberikan nama atau tidak diberi nama.

// class Car = class {
//     constructor(brand,factory){
//         this.brand = brand
//         this.factory = factory }}

// class Car = class Cars2 {
//     constructor(brand,factory){
//         this.brand = brand
//         this.factory = factory }}

//Aturan Penamaan Class
//Nama sebuah Class biasanya menggunakan kapital pada huruf pertama nya. 
//Jika terdapat dua kata atau lebih maka huruf pertama pada kata yang selanjutnya harus kapital.

// class Car{} //benar
// class car{} //salah
// class SportCar {} // benar
// class sportcar {} // salah

//this pada class javascript
//Jika diperhatikan selalu terdapat sintaks this pada contoh class di atas. 
// this tersebut adalah sintaks untuk menunjuk class atau seluruh body di class itu sendiri. 
// Sintaks "this" hanya hidup di dalam deklarasi Class dan tidak bisa dipanggil di luar class.

//Di dalam deklarasi sebuah class maka cara untuk memanggil property atau methods 
// adalah dengan menambahkan "this" lalu diikuti dengan titik dan nama property atau methodsnya.

//constructor() pada class javascript

//Constructor adalah methods yang selalu dijalankan paling pertama ketika sebuah "class" dipanggil (instance). 
//Constructor dapat menerima parameter yang mengirim nilai ke dalam class tersebut.

//Instance Class (membuat Object dari Class)
//Seperti function pada umumnya yang terdapat deklarasi dan pemanggilan function atau instance. Deklarasi Class sudah dijelaskan pada point sebelumnya.

// class Car {
//     constructor (brand,factory) {
//         this.brand = brand
//         this.factory = factory
//         this.sound = "Honk! honk! vroomvromm"
//     }}
// // Instance dari class car
// var Innova = new Car ("M3 GTR","BMW")
// console.log(Innova)


//Method
//Sintaks constructor pada class merupakan method khusus, dimana dilakukan inisialisasi properties, yang akan dieksekusi secara otomatis ketika class dibuat, 
//dan ia harus memiliki nama "constructor". (Jika tidak dituliskan, maka Javascript akan menambahkan method constructor kosong secara otomatis).

//Contoh Method pada Javascript

class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return "I Have A " + this.carname;
    }}
mycar = new Car("Mustang")
console.log(mycar.present()) //


class Car2 {
    constructor(brand) {
        this.carname = brand;
    }
    present(x) {
        return x + ", I Have A " + this.carname;
    }}
mycar = new Car2("Lamborghini")
mycar2 = new Car2("Ferrari")
console.log(mycar.present("halo")) // 
console.log(mycar2.present("halo")) // 

//Getters dan Setters
class Car5 {
    constructor(brand) {
        this._carname = brand;
    }
    get carname() {
        return this._carname;
    } 
    set carname(x) {
        this._carname = x;
    }
}
mycar = new Car5 ("Ferrari");
mycar.carname = "Porsche"; // memanggik setter, mengubah ford menjadi volvo
console.log(mycar.carname); //

//Static Method
class Car6 {
    constructor(brand) {
        this.carname = brand;
    }
    static hello() {
        return "Hello! !";
    }
}
mycar = new Car6 ("Ultima");
// memanggil 'hello()' pada class  Car :
console.log(Car6.hello());

//Inheritance
//Inheritance merupakan konsep pewarisan dimana sebuah class dapat mewarisi method maupun property dari class parentnya.
//Untuk membuat inheritance dari suatu class, gunakan keyword extends. Class yang dibuat dengan metode inheritance, akan memiliki method yang sama dengan class asalnya.

