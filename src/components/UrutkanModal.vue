<template>
    <div
        class="fixed left-0 top-0 bg-slate-900/75 flex justify-center transition"
        :class="{ 'top-0 right-0 bottom-0': showUrutkan, 'hidden': !showUrutkan }"
    >
        <div class="self-center bg-white p-5 rounded-xl">
            <div class="flex justify-between">
                <div class="font-bold">Urutkan Berdasarkan</div>
                <div class="font-bold">
                    <font-awesome-icon
                        icon="xmark"
                        class="text-red-500 ml-4 hover:cursor-pointer"
                        @click="toggleUrutkan"
                    />
                </div>
            </div>
            <div class="mt-4">
                <ul class="p-4">
                    <li class="border-b-2 border-slate-200 p-4">
                        <input
                            type="radio"
                            value="0"
                            id="filterTanggal"
                            @click="changeFilterTanggal(0)"
                            v-model="checkedFilterTanggal"
                        /> Tanggal Dibuat (Terbaru)
                    </li>
                    <li class="border-b-2 border-slate-200 p-4">
                        <input
                            type="radio"
                            value="1"
                            id="filterTanggal"
                            @click="changeFilterTanggal(1)"
                            v-model="checkedFilterTanggal"
                        /> Tanggal Dibuat (Terlama)
                    </li>
                    <li class="border-b-2 border-slate-200 p-4">
                        <input
                            type="radio"
                            value="2"
                            id="filterTanggal"
                            @click="changeFilterTanggal(2)"
                            v-model="checkedFilterTanggal"
                        /> Tanggal Deadline (Terbaru)
                    </li>
                    <li class="border-b-2 border-slate-200 p-4">
                        <input
                            type="radio"
                            value="3"
                            id="filterTanggal"
                            @click="changeFilterTanggal(3)"
                            v-model="checkedFilterTanggal"
                        /> Tanggal Deadline (Terlama)
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["showUrutkan", "toggleUrutkan", "changeFilterTanggal", "checkedFilterTanggal"]
}
</script>

<style>
</style>