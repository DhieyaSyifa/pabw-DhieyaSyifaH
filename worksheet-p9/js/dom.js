const wadah = document.querySelector(".galeri.grid");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;      // teks, bukan HTML
  return li;
}


function render(daftar) {
  wadah.textContent = "";

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





