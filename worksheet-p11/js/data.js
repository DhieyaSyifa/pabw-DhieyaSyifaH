export const profil = {
    namaLengkap : "Dhieya Syifa Hardiana",
    peran : "Mahasiswa informatika yang belajar front-end",
    keahlian : ["Python", "HTML", "CSS", "Java"],
    angka : 99
};

export function buatPerkenalan({ namaLengkap, peran }) {
    return `${namaLengkap} -- ${peran}`
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

export function saring(daftar, kategori) { /* ... ditulis di lembar C */ }
