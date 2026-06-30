// Mengenal Database


// Database atau basis data merupakan kumpulan berbagai informasi yang disimpan secara sistematis
// pada komputer agar informasi tersebut dapat diolah kembali dengan mudah.
// Kriteria database yang baik ditinjau dari beberapa faktor yakni:
// ● kecepatan
// ● performa
// ● akurasi
// ● availability
// ● terhindar dari duplikasi dan inkonsistensi data
// ● keamanan
// Database ditinjau dari sifat relasional nya terbagi menjadi dua yaitu: relational database dan non-relational database.

// SQL (Structure Query Language)
// Structured Query Language (SQL) adalah sebuah bahasa yang digunakan untuk mengakses data
// dalam basis data relasional
// Terdapat empat jenis perintah dasar dalam SQL, yaitu:

// Data
// Definition
// Language

// Data
// Manipulation
// Language

// Data
// Query
// Language

// Data
// Control
// Language

// Data Definition Language (DDL)
// Perintah ini digunakan untuk membuat struktur sebuah database. Terdapat lima perintah utama,
// diantaranya:
// ● Perintah Create: sebuah perintah yang bisa kamu gunakan ketika membuat sebuah basis data maupun tabel baru.
// ● Perintah Alter: biasa digunakan ketika seseorang ingin mengubah struktur tabel yang sebelumnya sudah ada.
// ● Perintah Rename: dapat kamu gunakan untuk mengubah sebuah nama di sebuah tabel ataupun kolom yang ada.
// ● Perintah Drop: Bisa kamu gunakan dalam menghapus baik itu berupa database, table maupun kolom hingga index.
// ● Perintah Show: perintah DDL ini digunakan untuk menampilkan sebuah data tabel atau basis data

// Data Manipulation Language (DML)
// Perintah dasar SQL ini bertujuan untuk memanipulasi data yang ada dalam sebuah database. 
// Beberapa perintah dalam DML di antaranya adalah insert, update, dan delete.
// ● Perintah Insert: Kamu bisa menggunakan perintah ini untuk memasukkan sebuah record baru di dalam sebuah tabel database.
// ● Perintah update: Ini dapat kamu gunakan ketika ingin melakukan pembaruan data di sebuah tabel. 
// Contohnya saja jika ada kesalahan ketika memasukkan sebuah record. Kamu tidak perlu menghapusnya dan bisa diperbaiki menggunakan perintah ini.
// ● Perintah Delete: Perintah DML ini dapat digunakan ketika kamu ingin menghapus sebuah record yang ada dalam sebuah tabel.

// Data Query Language (DQL)
// Perintah yang digunakan untuk melakukan query data pada SQL.
// ● Perintah Select: Pada perintah ini kamu dapat menggunakannya dalam menampilkan maupun mengambil sebuah data pada tabel. 
// Data yang diambil pun tidak hanya terbatas pada satu jenis saja melainkan lebih dari satu tabel dengan memakai relasi.

// Data Control Language (DCL)
// Perintah SQL ini berhubungan dengan administrasi dan aksesibilitas, digunakan khususnya untuk mengatur hak apa saja yang dimiliki oleh pengguna. 
// Dua perintah yang termasuk pada DCL adalah:
// ● Perintah Grant: Digunakan untuk memberikan hak akses ke user lainnya. Tentu pemberian hak akses ini dapat dibatasi atau diatur.
// ● Perintah Revoke: Digunakan untuk mencabut maupun menghapus hak akses seorang pengguna yang awalnya diberikan akses oleh admin database melalui perintah Grant sebelumnya.


//Pengenalan MySQL *harusnya DBMS soalnya MySQL itu merk populer

// Pengenalan Database Management System

// DBMS adalah aplikasi yang digunakan untuk me-manage data. Tanpa menggunakan DBMS, untuk me-manage data, seperti data produk, data customer, data penjualan, 
// kita harus simpan dalam bentuk file (misal seperti ketika menggunakan Excel).
// DBMS biasanya berjalan sebagai aplikasi server yang digunakan untuk me-manage data, kita hanya tinggal memberi perintah ke DBMS untuk melakukan proses manajemen
// datanya, seperti menambah, mengubah, menghapus atau mengambil data. 
// Contoh DBMS yang populer seperti MySQL, PostgreSQL, MongoDB, Oracle, dan lain-lain

//MYSQL

// MySQL adalah DBMS Relational OpenSource yang paling populer di dunia saat ini. 
// Tidak hanya OpenSource, MySQL juga gratis untuk digunakan. MySQL pertama kali dibuat dan diperkenalkan tahun 1995 oleh David Axmark dan Michael Widenius. 
// MySQL mendukung berbagai macam sistem operasi, Linux, Windows, dll. MySQL juga sering dipakai saat kita ingin mengembangkan sebuah perangkat lunak berbasis web.