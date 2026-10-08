const profil = {
    namaLengkap : "Dhieya Syifa Hardiana",
    peran : "Mahasiswa informatika yang belajar front-end",
    keahlianPemrograman : ["Python", "HTML", "CSS", "Java"],
    angka : 99
};

const kalimat = `Nama saya ${profil.namaLengkap} dan saya sedang belajar ${profil.keahlianPemrograman.length} bahasa pemrograman.`;
console.log(kalimat);

function buatPerkenalan ({namaLengkap, peran}) {
    return `${namaLengkap} -- ${peran}`;
}
const formatKeahlian = (daftar) => daftar.join(" . ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlianPemrograman))