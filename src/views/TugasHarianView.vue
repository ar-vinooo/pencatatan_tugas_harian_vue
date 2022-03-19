<template>
  <div class="relative">
    <div class="container mx-auto p-14">
      <div class="grid md:grid-cols-2 sm:grid-cols-1 mb-12 gap-6">
        <div>
          <div class="text-slate-500 font-bold text-2xl mb-3">List Tugas Harian</div>Klik Tombol
          <span class="px-2 bg-cyan-400 text-white rounded-md text-sm">+ Tugas Baru</span>
          Untuk Membuat Tugas Harian Baru
          <br />jangan lupa untuk memeriksa tugas
          anda yang sudah terselesaikan
        </div>
        <div class="items-end justify-end lg:space-x-5 lg:flex">
          <div class="sm:pb-2 lg:pb-0">
            Tampilkan Tugas yang
            <div class="mt-2">
              <button class="bg-blue-500 text-white px-2 py-1 rounded-l-sm shadow text-xs">
                Belum Selesai
                <span class="ml-2">0</span>
              </button>
              <button class="bg-white text-dark px-2 py-1 rounded-r-sm shadow text-xs">
                Sudah Selesai
                <span class="ml-2">4</span>
              </button>
            </div>
          </div>
          <div>
            Urutkan
            <div class="mt-2">
              <button
                class="bg-blue-500 text-white px-2 py-1 rounded-sm shadow text-xs"
              >Tanggal Dibuat (Terbaru)</button>
            </div>
          </div>
        </div>
      </div>
      <ListTugas :listTugas="listTugas" :isLoading="isLoading" :toggleTambah="toggleTambah" />
    </div>
    <TambahTugasContainer :showTambah="showTambah" :toggleTambah="toggleTambah" />
  </div>
</template>

<script>
import ListTugas from "../components/ListTugas.vue";
import TambahTugasContainer from "../components/TambahTugasContainer.vue";
export default {
  components: { ListTugas, TambahTugasContainer },
  data() {
    return {
      listTugas: [],
      isLoading: true,
      showTambah: false,
    }
  },
  methods: {
    toggleTambah() {
      this.showTambah = !this.showTambah;
    }
  },
  mounted() {
    setTimeout(() => {
      this.listTugas = [{
        complete: true,
        deadLine: "01 Januari 2022",
        keterangan: "Membuat mockup desain fitur pembelian untuk project supermal jakarta",
        warnaTugas: "#1abc9c"
      }, {
        complete: true,
        deadLine: "01 Januari 2022",
        keterangan: "Membuat mockup desain fitur pembelian untuk project supermal jakarta",
        warnaTugas: "#1abc9c"
      }, {
        complete: true,
        deadLine: "01 Januari 2022",
        keterangan: "Membuat mockup desain fitur pembelian untuk project supermal jakarta",
        warnaTugas: "#1abc9c"
      }, {
        complete: false,
        deadLine: "01 Januari 2022",
        keterangan: "Membuat mockup desain fitur pembelian untuk project supermal jakarta",
        warnaTugas: "#1abc9c"
      }];
      this.isLoading = false;
    }, 2000)
  }
};
</script>
