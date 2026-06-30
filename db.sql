create TABLE mahasiswa(
    nim int(10) primary key,
    nama char(255) NOT NULL,
    prodi char(255) NOT NULL,
    jenisKelamin enum("Laki-laki","perempuan"),
    alamat text NOT NULL,
    noHp char(255) NOT NULL
);

insert into mahasiswa(nim, nama, prodi, jenisKelamin, alamat, noHp)
values  (123456789,"Taufik", "TIK", "Laki-Laki", "Samarinda", 081234567899);

insert into mahasiswa ()
values  (134567891,"Adit", "TIK", "Laki-Laki", "Samarinda", 081245678910);

update mahasiswa
set alamat = "Balikpapan"
where nim =134567891;

delete from mahasiswa
where nim =134567891;

update mahasiswa
set noHp =  081234567899
where nim = 123456789;

insert into mahasiswa ()
values  (123567891,"Adit",  "TIK", "Laki-Laki", "Samarinda", 081234768111);

insert into mahasiswa ()
values  (123767891,"Debby", "TIK", "Laki-Laki", "Samarinda", 08125567851);

update mahasiswa
set noHp =  081255678510
where nim = 123767891;

insert into mahasiswa ()
values  (123867891,"Andra", "TIK", "Laki-Laki", "Samarinda", 081256887855);

update mahasiswa
set noHp =  081256887855
where nim = 123867891;


-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`kota`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`kota` (
  `idkota` INT NOT NULL,
  `nama kota` VARCHAR(75) NULL,
  PRIMARY KEY (`idkota`))
ENGINE = InnoDB;

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Kota`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Kota` (
  `idkota` INT NOT NULL,
  `namakota` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idkota`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Penjual`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Penjual` (
  `Idpenjual` INT NOT NULL,
  `nama` VARCHAR(50) NOT NULL,
  `alamat` TEXT NULL,
  `Kota_idkota` INT NOT NULL,
  PRIMARY KEY (`Idpenjual`),
  INDEX `fk_Penjual_Kota_idx` (`Kota_idkota` ASC) VISIBLE,
  CONSTRAINT `fk_Penjual_Kota`
    FOREIGN KEY (`Kota_idkota`)
    REFERENCES `mydb`.`Kota` (`idkota`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

select 