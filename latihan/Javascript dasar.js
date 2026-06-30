var nama = "taufiq";
var nomor_urut = 11;

console.log(nama);
console.log(nomor_urut);

var buka_pintu = true;
var pintu_terkunci = false;
if (buka_pintu) {buka_pintu = true;}

var lapar = true;

if (lapar) {
    console.log("Saya mau makan!");
} else {
    console.log("Saya tidak lapar.");
}

// operator
console.log("Operator Aritmatika");
console.log("================================");

var a = 10
var b = 5

var soal = "Jika nilai a = 10 dan nilai b = 5, maka hasil dari operasi berikut adalah:"
console.log(soal)
console.log("nilai a: " + a);
console.log("nilai b: " + b);

var tambah = a + b;
var kurang = a - b;
var kali = a * b;
var bagi = a / b;
var modulus = a % b;
console.log("hasil tambah: " + tambah);
console.log("hasil kurang: " + kurang);
console.log("hasil kali: " + kali);
console.log("hasil bagi: " + bagi);
console.log("hasil modulus: " + modulus);

console.log("Operator Perbandingan");
console.log("================================");

console.log(1==1)
console.log(1!=1)
console.log(1===1)
console.log(1!==1)
console.log(2>1)
console.log(1<2)
console.log(2>=1)
console.log(1<=2)

// && (AND) || (OR)
console.log("Operator Kondisional");
console.log("================================");

console.log(true && true)
console.log(true && false)
console.log(true || false)

console.log(false || false)
var status = "open";
var jamBuka = 8.5; // 8:30 dalam format desimal
console.log(status == "open" && jamBuka >= 8.5);

var status = "closed";
var jamBuka = 8.5; // 8:30 dalam format desimal
console.log(status == "open" && jamBuka <= 8.5);

console.log("Javascript String Methoods");
console.log("================================");

var word = "Taufiqurrahman";
console.log(word.length);
console.log(word.charAt(5));
var word1 = "pengembangan";
var word2 = "web";
console.log(word1 + " " + word2);
console.log(`${word1} ${word2}, tahun 2026`);

console.log("================================");
console.log("Javascript String Methods");
console.log("================================");

var word = "Taufiqurrahman";
console.log(word.substring(0,6));
console.log(word.toUpperCase());
console.log(word.toLowerCase());
console.log(`${word.substring(0,6).toUpperCase()}`);

console.log(word.trim());
console.log(word.replace("r", " "));
console.log(word.replaceAll("a", "u"));

console.log("================================");
console.log("Mengubah menjadi string");
console.log(".toString()");
console.log("string(namavariabel)");
console.log("Mengubah menjadi number");
console.log("parseInt('namavariabel')");
console.log("================================");

var angka ="9";
console.log(angka)
console.log(angka=angka)
console.log(String(angka))
console.log(angka.toString());

console.log(parseInt(angka));
console.log(String(angka));

var angka = 9;
var daftarKata = ["nol", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"];

if (angka >= 0 && angka <= 9) {
    console.log(daftarKata[angka]); // Mengambil elemen ke-9, yaitu "sembilan"
} else {
    console.log("Hanya mendukung angka 0-9");
}

console.log("================================");
console.log("Mengubah tipe data lain menjadi String atau sebaliknya");
console.log("================================");

var angka = "9"
console.log(angka)
console.log(Number(angka));
console.log(parseInt(angka));

var angka1 = 2.5
var angka2 = 3.7

var angka3 = angka1 + angka2
console.log(angka3)

