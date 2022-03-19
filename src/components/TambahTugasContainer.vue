<template>
    <div
        class="absolute right-0 flex justify-end transition-all duration-300"
        :class="{ 'bottom-0 top-0 left-0 bg-slate-900/75': showTambah, 'bg-transparent': !showTambah }"
    >
        <div
            class="h-screen fixed w-max bg-white p-8 rounded-l-lg transition-all duration-300 overflow-auto"
            :class="{ 'translate-x-0 ': showTambah, 'translate-x-full ': !showTambah }"
        >
            <div class="flex justify-between">
                <div class="font-bold text-xl">Tambah Tugas Baru</div>
                <div>
                    <font-awesome-icon
                        icon="xmark"
                        class="text-red-500 hover:cursor-pointer"
                        @click="toggleTambah"
                    />
                </div>
            </div>
            <p class="text-xs text-slate-400">Gunakan form dibawah untuk menambahkan tugas baru</p>
            <div class="mt-5">
                <div
                    v-if="isFormTambahError"
                    class="w-full p-2 bg-red-200 rounded mb-5 text-sm"
                >Field Inputan Masih Ada Yang Kosong!</div>
                <div class="space-y-2 mt-5">
                    <label for="tanggal_deadline">
                        Tanggal Deadline
                        <span class="text-red-500">*</span>
                    </label>
                    <input
                        type="date"
                        class="shadow top-0 rounded border outline-none block h-8 bg-gray-200 text-sm p-2"
                        :class="{ 'invalid:outline-red-500': deadlineInvalid }"
                        placeholder="Pilih Tanggal Deadline"
                        v-model="formTambah.inputDeadLine"
                        required
                    />
                </div>
                <div class="space-y-2 mt-10">
                    <label for="tanggal_deadline">
                        Kategori Warna Tugas
                        <span class="text-red-500">*</span>
                    </label>
                    <input
                        type="color"
                        class="shadow top-0 rounded border outline-none block h-8 bg-gray-200 text-sm"
                        :class="{ 'invalid:outline-red-500': warnaTugasInvalid }"
                        placeholder="Pilih Kategori Warna Tugas"
                        v-model="formTambah.inputWarnaTugas"
                        required
                    />
                </div>
                <div class="space-y-2 mt-10">
                    <label for="tanggal_deadline">
                        Keterangan Tugas
                        <span class="text-red-500">*</span>
                    </label>
                    <textarea
                        rows="4"
                        class="shadow top-0 rounded border outline-none block w-full bg-gray-200 text-sm p-2"
                        placeholder="Masukkan Keterangan"
                        v-model="formTambah.inputKeterangan"
                        required
                    ></textarea>
                </div>
                <div class="float-right mt-6">
                    <button
                        class="p-2 bg-blue-500 text-white rounded text-sm"
                        @click="simpanTugas"
                    >Simpan Tugas Ini</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["showTambah", "toggleTambah", "formTambah", "simpanTugas", "isFormTambahError"],
    data() {
        return {
            deadLineInvalid: false,
            warnaTugasInvalid: false,
            keteranganInvalid: false,
        }
    }
}
</script>

<style>
</style>