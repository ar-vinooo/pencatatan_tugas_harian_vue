<template>
  <div class="p-6 bg-white shadow-lg rounded-md">
    <div class="flex justify-between px-2">
      <div class="w-6 h-6 bg-teal-600 rounded-full slashed-zero"></div>
      <button class="relative" @click="toggleMenu">
        <font-awesome-icon icon="bars" class="text-slate-400 inline-flex" />
        <div
          class="absolute right-0 z-10 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
          :class="{ hidden: !showMenu }"
        >
          <ul>
            <li>
              <a
                href="#"
                class="block text-left py-1 border-b-2 px-4 text-xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >Edit</a>
            </li>
            <li>
              <a
                href="#"
                class="block text-left py-1 border-b-2 px-4 text-xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >Selesai</a>
            </li>
            <li>
              <a
                href="#"
                class="block text-left py-1 border-b-2 px-4 text-xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >Hapus</a>
            </li>
          </ul>
        </div>
      </button>
    </div>
    <div class="mt-4">
      <span class="text-white bg-orange-400 px-2 py-1 rounded shadow text-sm">01 Januari 2022</span>
    </div>
    <div
      class="mt-7 text-sm font-bold px-2"
    >Membuat mockup desain fitur pembelian untuk project supermal jakarta</div>
    <div class="flex justify-between mt-7">
      <div class="text-xs text-teal-500">
        <font-awesome-icon icon="circle-check" class="mr-1" />Complete
      </div>
      <div class="text-xs text-slate-400">
        <font-awesome-icon icon="clock" class="mr-1" />3 Hari Yang Lalu
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleMenu(e) {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>
