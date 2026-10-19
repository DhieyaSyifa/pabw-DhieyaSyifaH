export const profil = {
    namaLengkap : "Dhieya Syifa Hardiana",
    peran : "Mahasiswa informatika yang belajar front-end",
    keahlian : ["Python", "HTML", "CSS", "Java"],
    angka : 99
};

export function buatPerkenalan({ namaLengkap, peran }) {
    return `${namaLengkap} -- ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

export function saring(daftar = [], kategori = "semua") {
    if (!Array.isArray(daftar)) return [];
    if (kategori === "semua") return daftar;
    
    return daftar.filter((proyek) => {
        if (kategori === "Selesai") return proyek.selesai === true;
        if (kategori === "Proses") return proyek.selesai === false;
        return proyek.kategori === kategori;
    });
}