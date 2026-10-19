import { render } from './dom.js';

export const state = {
    daftarProyek: [],
    kategoriAktif: "semua",
    favorit: []
};

export function isiProyek(daftar) {
    state.daftarProyek = daftar;
    render(state);
}

export function pilihKategori(nilai) {
    state.kategoriAktif = nilai;
    render(state);
}

export function tambahFavorit(id) {
    if (state.favorit.includes(id)) {
        // Hapus jika sudah favorit (toggle)
        state.favorit = state.favorit.filter((item) => item !== id);
    } else {
        // Buat salinan baru (immutability)
        state.favorit = [...state.favorit, id];
    }
    render(state);
}

export function pulihkan() {
    // Dipakai nanti untuk Lembar D
}