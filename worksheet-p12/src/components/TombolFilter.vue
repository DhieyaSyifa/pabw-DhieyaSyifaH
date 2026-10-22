<script setup>
import { state, pilihKategori, aturUlang } from '../state.js'

const daftarKategori = ['semua', 'Selesai', 'Proses', 'Lainnya']
</script>

<template>
  <div class="area-filter-wrapper">
    <div id="filter">
      <button
        v-for="kat in daftarKategori"
        :key="kat"
        type="button"
        :data-kategori="kat"
        :class="{ aktif: state.kategoriAktif === kat }"
        @click="pilihKategori(kat)"
      >
        {{ kat.charAt(0).toUpperCase() + kat.slice(1) }}
      </button>
    </div>
    <button type="button" id="atur-ulang" @click="aturUlang">Atur ulang</button>
  </div>
</template>