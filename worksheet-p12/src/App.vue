<script setup>
import { onMounted, watch } from 'vue'
import { profil } from './data.js'
import { state, simpan, muat, pulihkan, isiProyek } from './state.js'
import { ambilProyek } from './api.js'

import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

onMounted(async () => {
  pulihkan(muat()) // Memuat pilihan terakhir dari localStorage
  try {
    state.memuat = true
    const data = await ambilProyek()
    isiProyek(data)
  } catch (galat) {
    state.galat = 'Data gagal dimuat. Periksa koneksi, lalu muat ulang.'
  } finally {
    state.memuat = false
  }
})

// Otomatis simpan ke localStorage setiap ada perubahan pada state
watch(state, (nilai) => simpan(nilai), { deep: true })
</script>

<template>
  <div class="page">
    <KepalaProfil :profil="profil" />

    <main>
      <div class="isi content">
        <div class="sisi">
          <FormKontak />
        </div>

        <div class="utama">
          <section id="bagian-3">
            <h2>Gambar</h2>
            <TombolFilter />
            <DaftarProyek />
          </section>
        </div>
      </div>
    </main>

    <footer>
      <p>{{ profil.namaLengkap }} · 25523150 · 2026</p>
    </footer>
  </div>
</template>