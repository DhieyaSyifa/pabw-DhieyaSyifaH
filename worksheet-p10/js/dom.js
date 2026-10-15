const wadah = document.querySelector(".galeri.grid");
const pesanKosong = document.querySelector("#pesan-kosong");
const muatEl = document.querySelector("#muat");
const barisFilter = document.querySelector("#filter");

const formOlahraga = document.querySelector("form");
const inputHari = document.querySelector("#Hari");
const inputJenis = document.querySelector("#Jenis");
const inputDurasi = document.querySelector("#Durasi");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = `${proyek.judul} (${proyek.tahun})`;
  return li;
}

export function render(daftar) {
  wadah.textContent = ""; 
  
  if (daftar.length === 0) { 
    pesanKosong.textContent = "Belum ada data";
    pesanKosong.hidden = false;
    return;
  }
  
  pesanKosong.hidden = true;

  daftar.forEach((proyek) => {
    const kartu = buatKartu(proyek);
    wadah.append(kartu);  
  });
}

export function aturMemuat(aktif) {
  if (muatEl) muatEl.hidden = !aktif;
}

export function tampilkanGalat(pesan) {
  wadah.textContent = '';
  pesanKosong.textContent = pesan;
  pesanKosong.hidden = false;
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

export function pasangFilter(daftar) {
  if (!barisFilter) return;
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;                 
  
    const kategori = tombol.dataset.kategori;
    const terpilih = daftar.filter((proyek) => {
      if (kategori === "semua") return true;
      if (kategori === "Selesai") return proyek.selesai === true;
      if (kategori === "Proses") return proyek.selesai === false;
      return false;
    });
  
    tandaiTombolAktif(tombol);
    render(terpilih);
  });
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