<script setup>
import { computed } from 'vue'
import { state, tambahFavorit } from '../state.js'
import { saring } from '../data.js'

const tampil = computed(() => saring(state.daftarProyek, state.kategoriAktif))
</script>

<template>
  <div class="galeri-wrapper">
    <ul v-if="tampil.length > 0" class="galeri grid">
      <li v-for="proyek in tampil" :key="proyek.id" class="kartu">
        <div class="kartu__isi">
          <h4 class="kartu__judul">{{ proyek.judul }} ({{ proyek.tahun }})</h4>
          <!-- <p>{{ proyek.deskripsi || 'Tidak ada deskripsi' }}</p> -->
        </div>
        <button
          type="button"
          class="favorit"
          :data-id="proyek.id"
          @click="tambahFavorit(proyek.id)"
        >
          {{ state.favorit.includes(proyek.id) ? '★' : '☆' }}
        </button>
      </li>
    </ul>

    <p id="pesan-kosong" :hidden="state.memuat || tampil.length > 0">
      {{ state.galat || 'Tidak ada hasil' }}
    </p>
    <p id="muat" :hidden="!state.memuat">Memuat data...</p>
  </div>
</template>