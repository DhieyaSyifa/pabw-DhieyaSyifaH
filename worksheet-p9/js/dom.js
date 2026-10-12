const wadah = document.querySelector(".galeri.grid");
const pesanKosong = document.querySelector("#pesan-kosong");
const formOlahraga = document.querySelector("form");
const inputHari = document.querySelector("#Hari");
const inputJenis = document.querySelector("#Jenis");
const inputDurasi = document.querySelector("#Durasi");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;      // teks, bukan HTML
  return li;
}


function render(daftar) {
  wadah.textContent = "";
  
  if (daftar.length === 0) {              // 2. periksa keadaan kosong
    pesanKosong.hidden = false;
    return;
  }
  pesanKosong.hidden = true;

  daftar.forEach((proyek) => {
    const kartu = buatKartu(proyek);
    wadah.append(kartu);  
});

}

render(daftarProyek);

const barisFilter = document.querySelector("#filter");

function tandaiTombolAktif(tombolAktif) {
    document.querySelectorAll("#filter button").forEach((tombol) => {
        tombol.classList.toggle("aktif", tombol === tombolAktif);
    });
}

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;                 // klik di luar tombol, abaikan

  const kategori = tombol.dataset.kategori;
  const terpilih = daftarProyek.filter((proyek) => {
    if (kategori === "semua") return true;
    if (kategori === "Selesai") return proyek.selesai === true;
    if (kategori === "Proses") return proyek.selesai === false;
  });

  tandaiTombolAktif(tombol)
  render(terpilih);
});

function validasiKolom(input) {
  const kolomWadah = input.closest(".form-kolom");
  const pesanGalat = kolomWadah.querySelector(".pesan-galat");
  const nilaiAsli = input.value;
  const nilaiBersih = input.value.trim();

  if (nilaiAsli === "") {
    input.classList.add("galat");
    if (pesanGalat) {
      pesanGalat.textContent = "Wajib diisi"; // Pesan default
      pesanGalat.style.display = "block";
    }
    return false;
  } 
  // 2. Jika diisi tetapi hanya berisi karakter spasi
  else if (nilaiBersih === "") {
    input.classList.add("galat");
    if (pesanGalat) {
      pesanGalat.textContent = "isi tidak boleh spasi"; // Pesan khusus spasi
      pesanGalat.style.display = "block";
    }
    return false;
  } 
  // 3. Jika isinya valid (ada teksnya)
  else {
    input.classList.remove("galat");
    if (pesanGalat) pesanGalat.style.display = "none";
    return true;
  }

}

[inputHari, inputJenis, inputDurasi].forEach((input) => {
  input.addEventListener("input", () => validasiKolom(input));
});

formOlahraga.addEventListener("submit", (event) => {
  event.preventDefault(); // Menghentikan reload halaman bawaan browser!

  // Periksa keabsahan semua kolom
  const hariValid = validasiKolom(inputHari);
  const jenisValid = validasiKolom(inputJenis);
  const durasiValid = validasiKolom(inputDurasi);

  if (!hariValid || !jenisValid || !durasiValid) {
    // Fokuskan ke kolom pertama yang bermasalah
    if (!hariValid) inputHari.focus();
    else if (!jenisValid) inputJenis.focus();
    else if (!durasiValid) inputDurasi.focus();
    return;
  }

  formOlahraga.reset();
});


