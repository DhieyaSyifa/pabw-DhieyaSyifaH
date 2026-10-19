import { saring } from './data.js';

const wadah = document.querySelector(".galeri.grid");
const pesanKosong = document.querySelector("#pesan-kosong");
const muatEl = document.querySelector("#muat");

const formOlahraga = document.querySelector("form");
const inputHari = document.querySelector("#Hari");
const inputJenis = document.querySelector("#Jenis");
const inputDurasi = document.querySelector("#Durasi");

export function buatKartu(proyek, favorit = []) {
  const li = document.createElement("li");
  li.className = "kartu";
  
  const judul = document.createElement("h3");
  judul.textContent = proyek.judul || proyek.nama;
  li.append(judul);

  const tombol = document.createElement("button");
  tombol.className = "favorit";
  tombol.dataset.id = proyek.id;
  tombol.textContent = favorit.includes(proyek.id) ? "★" : "☆";
  li.append(tombol);

  return li;
}

export function tandaiTombolAktif(kategoriAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.kategori === kategoriAktif);
  });
}

// js/dom.js
export function render(state) {
  if (!wadah) return;
  wadah.textContent = ""; 
  
  const tampil = saring(state.daftarProyek, state.kategoriAktif); 
  
  tandaiTombolAktif(state.kategoriAktif);

  if (tampil.length === 0) { 
    if (pesanKosong) {
      pesanKosong.textContent = "Belum ada data";
      pesanKosong.hidden = false;
    }
    return;
  }
  
  if (pesanKosong) pesanKosong.hidden = true;

  tampil.forEach((proyek) => {
    const kartu = buatKartu(proyek, state.favorit);
    wadah.append(kartu);  
  });
}

export function aturMemuat(aktif) {
  if (muatEl) muatEl.hidden = !aktif;
}

export function tampilkanGalat(pesan) {
  if (wadah) wadah.textContent = '';
  if (pesanKosong) {
    pesanKosong.textContent = pesan;
    pesanKosong.hidden = false;
  }
}

function validasiKolom(input) {
  if (!input) return true;
  const kolomWadah = input.closest(".form-kolom");
  const pesanGalat = kolomWadah ? kolomWadah.querySelector(".pesan-galat") : null;
  const nilaiAsli = input.value;
  const nilaiBersih = input.value.trim();

  if (nilaiAsli === "") {
    input.classList.add("galat");
    if (pesanGalat) {
      pesanGalat.textContent = "Wajib diisi";
      pesanGalat.style.display = "block";
    }
    return false;
  } else if (nilaiBersih === "") {
    input.classList.add("galat");
    if (pesanGalat) {
      pesanGalat.textContent = "Isi tidak boleh spasi";
      pesanGalat.style.display = "block";
    }
    return false;
  } else {
    input.classList.remove("galat");
    if (pesanGalat) pesanGalat.style.display = "none";
    return true;
  }
}

if (formOlahraga) {
  [inputHari, inputJenis, inputDurasi].forEach((input) => {
    if (input) input.addEventListener("input", () => validasiKolom(input));
  });

  formOlahraga.addEventListener("submit", (event) => {
    event.preventDefault();

    const hariValid = validasiKolom(inputHari);
    const jenisValid = validasiKolom(inputJenis);
    const durasiValid = validasiKolom(inputDurasi);

    if (!hariValid || !jenisValid || !durasiValid) {
      if (!hariValid) inputHari.focus();
      else if (!jenisValid) inputJenis.focus();
      else if (!durasiValid) inputDurasi.focus();
      return;
    }

    formOlahraga.reset();
  });
}