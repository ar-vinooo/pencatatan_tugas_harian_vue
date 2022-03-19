<template>
  <div class="flex flex-col justify-between p-6 bg-white shadow-lg rounded-md">
    <div>
      <div class="flex justify-between px-2">
        <div
          class="w-6 h-6 rounded-full slashed-zero"
          :class="{ 'bg-teal-600': item.complete, 'bg-red-500': !item.complete }"
        ></div>
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
                <button
                  @click="hapusTugas(index)"
                  class="block text-left py-1 border-b-2 px-4 text-xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Hapus</button>
              </li>
            </ul>
          </div>
        </button>
      </div>
      <div class="mt-4">
        <span class="text-white bg-orange-400 px-2 py-1 rounded shadow text-sm">{{ item.deadLine }}</span>
      </div>
      <div class="mt-7 text-sm font-bold px-2">{{ item.keterangan }}</div>
    </div>
    <div class="flex justify-between mt-7">
      <div v-if="item.complete" class="text-xs text-teal-500">
        <font-awesome-icon icon="circle-check" class="mr-1" />Complete
      </div>
      <div v-else class="text-xs text-red-500">
        <font-awesome-icon icon="circle-xmark" class="mr-1" />Incomplete
      </div>
      <div class="text-xs text-slate-400">
        <font-awesome-icon icon="clock" class="mr-1" />3 Hari Yang Lalu
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "index", "hapusTugas"],
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
