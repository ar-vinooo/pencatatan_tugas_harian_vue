<template>
    <div
        class="absolute right-0 flex justify-end transition-all duration-300"
        :class="{ 'bottom-0 top-0 left-0 bg-slate-600/50': showTambah, 'bg-transparent': !showTambah }"
    >
        <div
            class="h-screen fixed w-max bg-white p-8 rounded-l-lg transition-all duration-300"
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
            <div class="mt-10">
                <div class="form-group space-y-2">
                    <label for="tanggal_deadline">Tanggal Deadline</label>
                    <input
                        type="date"
                        class="shadow border outline-none block h-8 bg-gray-200 text-sm p-2"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["showTambah", "toggleTambah"]
}
</script>

<style>
</style>