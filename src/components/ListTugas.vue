<template>
  <div v-if="isLoading" class="grid md:grid-cols-4 sm:grid-cols-1 gap-10">
    <TugasSplash v-for="n in 6" :key="n" />
  </div>
  <div v-else class="grid md:grid-cols-4 sm:grid-cols-1 gap-10">
    <ButtonTambahTugas @click="toggleTambah" class="hover:cursor-pointer" />
    <Tugas
      v-for="(item, index ) in listTugas"
      :key="index"
      :item="item"
      :hapusTugas="hapusTugas"
      :index="index"
    />
  </div>
</template>

<script>
import TugasSplash from "./TugasSplash.vue";
import Tugas from "./Tugas.vue";
import ButtonTambahTugas from "./ButtonTambahTugas.vue";
export default {
  props: ["isLoading", "listTugas", "toggleTambah", "hapusTugas"],
  components: { TugasSplash, Tugas, ButtonTambahTugas },
};
</script>