const profil = {
    namaLengkap : "Dhieya Syifa Hardiana",
    peran : "Mahasiswa informatika yang belajar front-end",
    keahlianPemrograman : ["Python", "HTML", "CSS", "Java"],
    angka : 99
}
window.profil = profil

const nama = "Ayu"
const jumlahProyek = 3
let pilihanAktif = "semua"

console.log(typeof nama)
console.log(typeof jumlahProyek)
console.log(typeof belumDibuat)

const daftarProyek = [
    {
        judul : "Halaman Profil", 
        tahun : 2026,
        selesai : true
    },

    {
        judul : "Katalog Produk",
        tahun : 2026, 
        selesai : false
    }
]
window.daftarProyek = daftarProyek

const kalimat = `Nama saya ${profil.namaLengkap} dan saya sedang belajar ${profil.keahlianPemrograman.length} bahasa pemrograman.`
window.kalimat = kalimat
console.log(kalimat)

function buatPerkenalan ({namaLengkap, peran}) {
    return `${namaLengkap} -- ${peran}`
}
window.buatPerkenalan = buatPerkenalan

function sapa ({nama}) {
    return `halo ${nama}`
}
window.sapa = sapa

const formatKeahlian = (daftar) => daftar.join(" . ")

console.log(buatPerkenalan(profil))
console.log(formatKeahlian(profil.keahlianPemrograman))

console.table(profil.keahlianPemrograman)
console.table(daftarProyek)

const selesai = daftarProyek.filter((proyek) => proyek.selesai)
console.table(selesai)

const katalog = daftarProyek.find((proyek) => proyek.judul === "Katalog Produk")
console.log(katalog)

const judulProyek = daftarProyek.map((proyek) => proyek.judul)
window.judulProyek = judulProyek
console.table(judulProyek)