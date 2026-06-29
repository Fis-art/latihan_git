create TABLE mahasiswa(
    nim int(10) primary key,
    nama char(255) NOT NULL,
    prodi char(255) NOT NULL,
    jenisKelamin enum("Laki-laki","perempuan"),
    alamat text NOT NULL,
    noHp char(255) NOT NULL
);

insert into mahasiswa(nim, nama, prodi, jenisKelamin, alamat, noHp)
values  (123456789,"Taufik", "TIK", "Laki-Laki", "Samarinda", 08123456789);

insert into mahasiswa ()
values  (134567891,"Adit", "TIK", "Laki-Laki", "Samarinda", 081245678910);

update mahasiswa
set alamat = "Balikpapan"
where nim =134567891;

delete from mahasiswa
where nim =134567891;