const profil = {
    namaLengkap : "Dhieya Syifa Hardiana",
    peran : "Mahasiswa informatika yang belajar front-end",
    keahlianPemrograman : ["Python", "HTML", "CSS", "Java"],
    angka : 99
}

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

const kalimat = `Nama saya ${profil.namaLengkap} dan saya sedang belajar ${profil.keahlianPemrograman.length} bahasa pemrograman.`
console.log(kalimat)

function buatPerkenalan ({namaLengkap, peran}) {
    return `${namaLengkap} -- ${peran}`
}
const formatKeahlian = (daftar) => daftar.join(" . ")

console.log(buatPerkenalan(profil))
console.log(formatKeahlian(profil.keahlianPemrograman))

console.table(profil.keahlianPemrograman)
console.table(daftarProyek)

const selesai = daftarProyek.filter((proyek) => proyek.selesai)
console.table(selesai)

const katalog = daftarProyek.find((proyek) => proyek.judul === "Katalog Produk")
console.log(katalog)