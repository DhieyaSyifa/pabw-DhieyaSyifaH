export function isiProyek(daftar) {
    state.daftarProyek = daftar;
    render(state);
}

// export async function muat() {
//   aturMemuat(true);                        
//   try {
//     const daftar = await ambilProyek();    
//     pasangFilter(daftar);                  
//     render(daftar);                       
//   } catch (galat) {
//     tampilkanGalat('Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.');
//     console.error(galat.message);          
//   } finally {
//     aturMemuat(false);                    
//   }
// }

export function pulihkan () {

}
