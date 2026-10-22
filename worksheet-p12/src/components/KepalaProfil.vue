<script setup>
const props = defineProps({
  profil: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <header>
    <input type="checkbox" id="tema" class="pengalih-tema">
    <label for="tema" class="tombol-tema">Tema gelap</label>
    <div class="header-baris">
      <h1>Jadwal dan Target Olahraga</h1>
      <!-- <p class="sub-identitas">{{ props.profil.namaLengkap }} · {{ props.profil.peran }}</p> -->
      <nav class="navbar" aria-label="Navigasi Utama">
        <ul>
          <li><a href="#bagian-1">Jadwal Olahraga</a></li>
          <li><a href="#bagian-2">Jenis Olahraga</a></li>
          <li><a href="#bagian-3">Gambar</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>