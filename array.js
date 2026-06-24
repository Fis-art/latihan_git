var angka = [9,7,5,3,1]
console.log(angka)
console.log(angka[1])
console.log(angka[4])

// array method
//length
console.log(angka.length)
//push
console.log("sebelum push :" + angka)
angka.push(6)
console.log("sesudah push :" + angka)
//pop
console.log("sebelum pop : "+ angka)
angka.pop()
console.log("sesudah pop :" + angka)
//unshift
console.log("sebelum unshift :" + angka)
angka.unshift(8)
console.log("sesudah unshift :" + angka)
//shift
console.log("sebelum shift :" + angka)
angka.shift()
console.log("sesudah shift :" + angka)


//join
var peserta = ["Andra, Taufiq, Adit, Debby"]
console.log(peserta)
console.log("=========","sebelum join")
console.log(peserta)
console.log("=========","sesudah join")
console.log(peserta.join("-"))

//split
var nama = "Muhammad Desta Greddy Aulia Rahman"
console.log("=========","sebelum Split")
console.log(nama)
console.log("=========","setelah Split")
console.log(nama.split(" ").length)