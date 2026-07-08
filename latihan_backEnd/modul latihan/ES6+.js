// // // //Apa itu ES6

// // // //ES6 atau EcmaScript 6 atau EcmaScript 2015 merupakan fitur bahasa pada pemrograman Javascript modern atau biasa di sebut next gen javascript. 
// // // //lalu kenapa kita harus mempelajari ES6, itu karena library maupun framework JS terkini banyak menggunakan sintaks-sintaks ES6.
// // // //setelah EcmaScript 6 ini banyak fitur-fitur yang dapat digunakan untuk mengoptimalkan

// // // // let = 

// // // let nama = "John"
// // //     if(true){
// // //     let nama = "Doe"
// // //     console.log(nama)
// // //     }
// // // console.log(nama)

// // // const pi = 3.14

// // // //Arrow Function
// // // const myFunc =()=>{}

// // // {
// // // function Tampilkan(a){
// // //     console.log("halo!"+ a);
// // // }
// // // Tampilkan("huda");
// // // }
// // // {
// // // //Anonymous Function
// // // function tampilkanNama(a){
// // // console.log("halo,"+ a)
// // // }
// // // tampilkanNama("huda")
// // // }
// // // {
// // // //Arrow Function
// // // const tampilkanNama= (a) => {
// // //     console.log("halo,"+ a)
// // // }
// // // }

// // // //Latihan soal
// // // // function lama
// // // function HitungPersegi(sisi) {

// // // function luas (s) {return s * s}
// // // function keliling (s) {return 4 * s}
// // // console.log("luas:", luas (sisi))
// // // console.log("keliling:",keliling(sisi))
// // // }
// // // HitungPersegi(6)


// // // //anonymous
// // // var HitungPersegi = function(sisi) {
// // //     var luas = function(s) { return s * s; };
// // //     var keliling = function(s) { return 4 * s; };
    
// // //     console.log("luas:", luas(sisi));
// // //     console.log("keliling:", keliling(sisi));
// // // };
// // // HitungPersegi(6);


// // // //Arrow Functions
// // // var HitungPersegi=(sisi) => {

// // //     var luas = (s) => s*s; 
// // //     var keliling = (s) => 4*s;
   
// // //     console.log("luas:", luas(sisi));
// // //     console.log("keliling:", keliling(sisi));
// // // };
// // // HitungPersegi(6);

// // // const Hitung_Persegi = (sisi) => {
// // //     const luas = (s) => {
// // //     return s * s; }
// // //     const keliling = (s) => {
// // //     return 4 * s;}
    
// // //     console.log("luas:", luas(sisi));
// // //     console.log("keliling:", keliling(sisi));
// // // };

// // // Hitung_Persegi(6);


// // // let nama = "Taufiqurrahman"
// // // console.log("halo, selamat datang."+nama)
// // // console.log("halo, selamat datang.   "+nama)

// // // console.log("halo, "+nama +"! selamat datang")
// // // console.log(`halo, ${nama},selamat datang`)

// // // text1 = "hai"
// // // text2 = "namaku"
// // // text3 = "taufiq"

// // // //Template Literal
// // // //template literal atau biasa di sebut template string merupakan fitur ES6 yang memungkinkan kita menyusun string dengan rapi dengan menggunakan tanda etik terbalik dan ${variabelnya}.

// // // console.log(text1+", "+text2+" "+text3)
// // // console.log(`${text1}, ${text2}, ${text3}`)

// // //Enhanced object literals/
// // // Enhanced object literals merupakan fitur ES6 yang memungkinkan kita untuk kmenyederhanakan sebuah object,
// // // dimana biasanya kita selalu menulis property dan value,
// // // tetapi jika terdapat kondisi ada variabel yang namanya sama dengan property maka kita bisa assign hal tersebut sebagai value tetapi dengan hanya menulis property nya saja.

// // // let nama = "Taufiqurrahman"
// // // let person = {
// // //     nama : nama,    //Penggunaan object biasa
// // //     nama,           //Enhanced object literals
// // //     umur : 24,
// // // }
// // // console.log(person)

// // //Destructuring
// // //Destructuring merupakan ekspresi javascript yang memungkinkan untuk membagi atau memecah nilai dari sebuah array atau objek ke dalam variabel yang berbeda.

// // //Destructuring Array

// // // let numb = [1,3,5,7]    //bentuk biasa

// // // let numb1= numb[0]      //bentuk biasa
// // // let numb2= numb[1]      //bentuk biasa
// // // let numb3= numb[2]      //bentuk biasa
// // // let numb4= numb[3]      //bentuk biasa
// // // let numb5= numb[4]      //bentuk biasa

// // // console.log(numb4)      //bentuk biasa

// // let [num1,num2,num3,num4,lastnum] = [1,5,6,7,8] //Destructuring Array

// // console.log(num1)

// // //bentuk object biasa
// // //Destructuring Object
// // let name = "Taufiqurrahman"
// // let person = {
// //     // name   : name,    //Penggunaan object biasa
// //     name,                //penulisan Enhanced object literals
// //     tinggi : 160,
// //     umur   : 24
// // }

// // let namaPerson = person.nama        //Enhanced object literals
// // let umurPerson = person.umur        //Enhanced object literals
// // let tinggiPerson = person.tinggi    //Enhanced object literals
// // let {nama,umur,tinggi} = person     //Enhanced object literals

// // console.log(person)

// //Rest Parameter + Spread Operator
// //Rest Parameters dan Spread Operator di lambangkan dengan simbol yang sama yaitu "..."

// //Rest Parameter
// //Rest Parameter ini berguna untuk menggabungkan semua paramater pada function ke dalam array. 
// //Dengan menggunakan Rest Parameter ini dapat membantu kita mendefinisikan function dengan rapi serta memberikan parameter yang tidak terbatas pada sebuah function.

// // let [num1, , , , lastnum] = [1,5,6,7,8]

// // let footballers = ["Messi", "Ronaldo", "Neymar","Halland", "Mbappe"]
// // let [foot1, foot2, ...restFoots] = footballers //parameter rest wajib berada di paling belakang index

// // console.log(foot1)
// // console.log(foot2)
// // console.log(restFoots)      //rest parameter
// // console.log(restFoots[1])   //select rest parameter

// // let names = "Taufiqurrahman"
// // let person = {
// //     //key : value
// //     nama   : names,    //Penggunaan object biasa
// //     tinggi : 160,
// //     umur   : 24
// // }

// // let {nama,...restbio} = person     //Enhanced object literals

// // console.log(nama)
// // console.log(restbio)

// //Spread Operator
// //Spread Operator digunakan untuk membagi elemen array atau properti pada objek, 
// //sehingga elemen array dapat ditambahkan/dimasukan ke dalam array baru

// //di array
// // let fruit = ["strawberry","mangga","apel"]

// // // fruit.unshift("jeruk")  // menambahkan object di depan secara biasa/dasar
// // // fruit.push("durian")    // menambahkan object di belakang secara biasa/dasar

// // // console.log(fruit)

// // fruit = ["langsat",...fruit,"rambutan"] //sprad operator ditaruh dititik mana ingin u/ menambahkan depan-belakang
// // console.log(fruit)

// //di object
// let botol  = {              //penulisan object cara dasar
//     merk    : "Le minerale",   //penulisan object cara dasar
//     warna   : "biru",         //penulisan object cara dasar
//     harga   : 5000            //penulisan object cara dasar
// }
// // botol.ukuran = "1500ml"        //penambahkan object cara dasar
// // botol.kemasan = "plastik"   //penambahkan object cara dasar

// botol = { ...botol, ukuran : "1500ml", kemasan : "plastik"}

// console.log(botol)