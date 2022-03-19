<template>
  <div class="relative min-h-screen bg-slate-50">
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
                <span class="ml-2">{{ countBelumSelesai }}</span>
              </button>
              <button class="bg-white text-dark px-2 py-1 rounded-r-sm shadow text-xs">
                Sudah Selesai
                <span class="ml-2">{{ countSudahSelesai }}</span>
              </button>
            </div>
          </div>
          <div>
            Urutkan
            <div class="mt-2">
              <button
                @click="toggleUrutkan"
                class="bg-blue-500 text-white px-2 py-1 rounded-sm shadow text-xs"
              >Tanggal Dibuat (Terbaru)</button>
            </div>
          </div>
        </div>
      </div>
      <ListTugas
        :listTugas="listTugas"
        :isLoading="isLoading"
        :toggleTambah="toggleTambah"
        :hapusTugas="hapusTugas"
      />
    </div>
    <TambahTugasContainer
      :showTambah="showTambah"
      :toggleTambah="toggleTambah"
      :formTambah="formTambah"
      :simpanTugas="simpanTugas"
      :isFormTambahError="isFormTambahError"
    />
    <UrutkanModal
      :showUrutkan="showUrutkan"
      :toggleUrutkan="toggleUrutkan"
      :checkedFilterTanggal="checkedFilterTanggal"
      :changeFilterTanggal="changeFilterTanggal"
    />
  </div>
</template>

<script>
import ListTugas from "../components/ListTugas.vue";
import TambahTugasContainer from "../components/TambahTugasContainer.vue";
import UrutkanModal from "../components/UrutkanModal.vue";
import collect from "collect.js";
import moment from "moment";

export default {
  components: { ListTugas, TambahTugasContainer, UrutkanModal },
  data() {
    return {
      listTugas: [],
      isLoading: true,
      showTambah: false,
      showUrutkan: false,
      formTambah: {
        inputDeadLine: '',
        inputWarnaTugas: '#ffffff',
        inputKeterangan: '',
      },
      isFormTambahError: false,
      checkedFilterTanggal: 0,
    }
  },
  computed: {
    countBelumSelesai() {
      return collect(this.listTugas).where('complete', false).count();
    },
    countSudahSelesai() {
      return collect(this.listTugas).where('complete', true).count();

    }
  },
  watch: {
    checkedFilterTanggal() {
      this.filterData();

    },
    listTugas() {
      this.filterData();
    }
  },
  methods: {
    changeFilterTanggal(number) {
      this.showUrutkan = false;
      this.checkedFilterTanggal = number;

      this.isLoading = true;

      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
    toggleUrutkan() {
      this.showUrutkan = !this.showUrutkan;
    },
    toggleTambah() {
      this.showTambah = !this.showTambah;
    },
    simpanTugas() {
      for (var item in this.formTambah) {
        if (this.formTambah[item].trim() == '') {
          this.isFormTambahError = true;
          return;
        }
      }

      this.listTugas.push({
        complete: false,
        deadLine: this.formTambah.inputDeadLine,
        warnaTugas: this.formTambah.inputWarnaTugas,
        keterangan: this.formTambah.inputKeterangan,
        createdAt: moment().format('Y-m-d'),
      });


      this.isFormTambahError = false;


      this.$swal('success', 'Berhasil Menambahkan Data!', 'success');

      this.formTambah = {
        inputDeadLine: '',
        inputWarnaTugas: '#ffffff',
        inputKeterangan: '',
      };

      this.showTambah = false;

      this.isLoading = true;

      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
    hapusTugas(index) {
      this.listTugas.splice(index, 1);

      this.$swal('success', 'Berhasil Menghapus Data!', 'success');

      this.isLoading = true;

      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },

    filterData() {
      var data = collect(this.listTugas);

      if (this.checkedFilterTanggal == 0) {
        data = data.sortByDesc('createdAt');
      } else if (this.checkedFilterTanggal == 1) {
        data = data.sortBy('createdAt');
      } else if (this.checkedFilterTanggal == 2) {
        data = data.sortByDesc('deadLine');
      } else if (this.checkedFilterTanggal == 3) {
        data = data.sortBy('deadLine');
      }

      this.listTugas = data;
    },
  },
  mounted() {
    setTimeout(() => {
      this.listTugas = [{
        complete: true,
        deadLine: "2022-03-01",
        keterangan: "Membuat mockup desain fitur pembelian untuk project supermal jakarta",
        warnaTugas: "#1abc9c",
        createdAt: "2022-03-01",
      }, {
        complete: true,
        deadLine: "2022-03-02",
        keterangan: "Membuat mockup desain fitur pembelian untuk project supermal jakarta",
        warnaTugas: "#1abc9c",
        createdAt: "2022-03-06",

      }, {
        complete: true,
        deadLine: "2022-03-04",
        keterangan: "Membuat mockup desain fitur pembelian untuk project supermal jakarta",
        warnaTugas: "#1abc9c",
        createdAt: "2022-03-05",

      }, {
        complete: false,
        deadLine: "2022-03-03",
        keterangan: "Membuat mockup desain fitur pembelian untuk project supermal jakarta",
        warnaTugas: "#1abc9c",
        createdAt: "2022-03-04",
      }];
      this.isLoading = false;
    }, 2000)
  }
};
</script>
