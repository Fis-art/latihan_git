//🟢 JALUR 1: HTML List (/movies)
// Jalur ini bebas hambatan, nggak pakai satpam token atau waktu. Cuma satpam logger global yang nyatet kunjungan kamu di terminal.

// Skenario Tampil Semua:

// URL: http://localhost:3000/movies

// Hasil: Muncul list HTML ke-4 film.

// Skenario Filter Judul:

// URL: http://localhost:3000/movies?title=spider

// Hasil: Muncul HTML "1. Spider-Man. Tahun Rilis : 2002".

// Skenario Filter Tahun:

// URL: http://localhost:3000/movies?year=2012

// Hasil: Muncul HTML The Avengers.

// Skenario Gagal (Tidak Ketemu):

// URL: http://localhost:3000/movies?title=batman

// Hasil: Muncul HTML "Judul tidak ditemukan".

// 🟡 JALUR 2: HTML ID (/movies/:id)
// Jalur ini khusus nyari film pakai angka ID.

// Skenario Sukses (ID ada):

// URL: http://localhost:3000/movies/2

// Hasil: Muncul detail HTML John Wick.

// Skenario Iseng (Ngasih parameter lain):

// URL: http://localhost:3000/movies/2?title=avengers

// Hasil: Tetap muncul John Wick, tapi di atasnya ada pesan: "⚠️ Pencarian berdasarkan ID !!! Parameter title dan year diabaikan."

// Skenario Gagal (ID nggak ada):

// URL: http://localhost:3000/movies/99

// Hasil: Status 404, pesan HTML "Movie tidak ditemukan".

// 🔴 JALUR 3: API List (/api/movies)
// ⚠️ PERHATIAN: Di sini Satpam Token dan Satpam Validasi Tahun berjaga ketat!

// Skenario Lupa Token (Diblokir):

// URL: http://localhost:3000/api/movies

// Hasil: Status 401, pesan JSON: "Token tidak valid".

// Skenario Tanpa Parameter (Lolos semua):

// URL: http://localhost:3000/api/movies?token=12345

// Hasil: Karena year sifatnya undefined (nggak ditulis), middleware kamu ngelolosin, dan hasilnya nampilin JSON ke-4 film. (Ini strategi cerdas kamu semalam!).

// Skenario Tahun Kosong (Diblokir):

// URL: http://localhost:3000/api/movies?token=12345&year=

// Hasil: Status 400, pesan JSON: "parameter year wajib diisi".

// Skenario Tahun Pakai Huruf (Diblokir):

// URL: http://localhost:3000/api/movies?token=12345&year=duaRibu

// Hasil: Status 400, pesan JSON: "Parameter year harus berupa angka".

// Skenario Filter Lengkap & Sukses:

// URL: http://localhost:3000/api/movies?token=12345&title=logan&year=2017

// Hasil: Muncul JSON data film Logan.

// 🟣 JALUR 4: API ID (/api/movies/:id)
// ⚠️ PERHATIAN: Di sini Satpam Waktu & Satpam ID yang bekerja. (Sesuai modul, jalur ini TANPA Token).

// Skenario Sukses (ID ada):

// URL: http://localhost:3000/api/movies/4

// Hasil di Browser/Thunder Client: Muncul JSON data film Logan.

// Hasil di Terminal (Efek timeMiddleware): Muncul "Waktu Request : [Tanggal & Jam saat ini]".

// Skenario Gagal (ID nggak ada):

// URL: http://localhost:3000/api/movies/99

// Hasil: Status 404, pesan JSON: "Movie tidak ditemukan". (Ini hasil blokiran dari checkMovieIdMiddleware sebelum masuk handler).

// Skenario Iseng (Nambah query yang nggak guna):

// URL: http://localhost:3000/api/movies/4?year=2012

// Hasil: Nampilin JSON yang isinya message: "Pencarian berdasarkan ID. Parameter title dan year diabaikan." beserta datanya si Logan