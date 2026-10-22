<script setup>
import { ref } from 'vue'

const hari = ref('')
const jenis = ref('')
const durasi = ref('')

const galatHari = ref('')
const galatJenis = ref('')
const galatDurasi = ref('')

function validasi(nilai) {
  if (!nilai) return 'wajib isi'
  if (nilai.trim() === '') return 'Isi tidak boleh spasi'
  return ''
}

function handleSubmit() {
  galatHari.value = validasi(hari.value)
  galatJenis.value = validasi(jenis.value)
  galatDurasi.value = validasi(durasi.value)

  if (galatHari.value || galatJenis.value || galatDurasi.value) return

  // Reset formulir setelah berhasil
  hari.value = ''
  jenis.value = ''
  durasi.value = ''
}
</script>

<template>
  <div class="sisi-konten">
    <section id="bagian-1">
      <h2>Jadwal Olahraga</h2>
      <div class="table-wrap">
        <table>
          <caption>My exercise</caption>
          <thead>
            <tr>
              <th scope="col">Hari</th>
              <th scope="col">Jenis olahraga</th>
              <th scope="col">Durasi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">selasa</th>
              <td>Lari</td>
              <td>30 menit</td>
            </tr>
            <tr>
              <th scope="row">Rabu</th>
              <td>Push up</td>
              <td>2 menit</td>
            </tr>
            <tr>
              <th scope="row">Kamis</th>
              <td>Wallsit</td>
              <td>10 menit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section id="bagian-2">
      <h2>Jenis Olahraga</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-kolom">
          <label for="Hari">Hari</label>
          <input type="text" id="Hari" v-model="hari" :class="{ galat: galatHari }" />
          <span class="pesan-galat" v-if="galatHari">{{ galatHari }}</span>
        </div>
        <div class="form-kolom">
          <label for="Jenis">Jenis</label>
          <input type="text" id="Jenis" v-model="jenis" :class="{ galat: galatJenis }" />
          <span class="pesan-galat" v-if="galatJenis">{{ galatJenis }}</span>
        </div>
        <div class="form-kolom">
          <label for="Durasi">Durasi</label>
          <input type="text" id="Durasi" v-model="durasi" :class="{ galat: galatDurasi }" />
          <span class="pesan-galat" v-if="galatDurasi">{{ galatDurasi }}</span>
        </div>
        <button type="submit">Simpan</button>
      </form>  
    </section>
  </div>
</template>