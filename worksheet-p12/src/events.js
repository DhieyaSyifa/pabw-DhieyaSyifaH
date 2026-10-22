import { pilihKategori, tambahFavorit, aturUlang } from './state.js';

export function pasangPendengar () {
    const barisFilter = document.querySelector("#filter");
    if (barisFilter) {
        barisFilter.addEventListener("click", (event) => {
        const tombol = event.target.closest("button");
        if (!tombol) return;
        pilihKategori(tombol.dataset.kategori);
        });
    }
    
    document.querySelector(".galeri.grid").addEventListener("click", (event) => {
    const tombol = event.target.closest(".favorit");
    if (!tombol) return;
    tambahFavorit(tombol.dataset.id);
  });

  const tombolAturUlang = document.querySelector("#atur-ulang");
    if (tombolAturUlang) {
        tombolAturUlang.addEventListener("click", () => {
            aturUlang();
        });
    }
}