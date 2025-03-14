<script setup lang="ts">
import Pagination from './ui/Pagination.vue'
import Table from './ui/Table.vue'
const progress = {
  current: 46,
  total: 67,
}
</script>

<template>
  <div class="bg-[#F2F5FE] rounded-4xl shadow-2xl py-6 px-8">
    <div class="flex items-center justify-between mb-6 space-x-3 px-12">
      <div class="flex items-center w-full justify-between space-x-3">
        <p class="text-gray-700 font-medium whitespace-nowrap">Progress Penilaian :</p>
        <div class="bg-gray-200 rounded-full w-full h-2.5">
          <div
            class="bg-teal-700 h-2.5 rounded-full"
            :style="{ width: `${(progress.current / progress.total) * 100}%` }"
          ></div>
        </div>
        <span class="text-gray-700">{{ progress.current }}/{{ progress.total }}</span>
      </div>

      <div class="relative w-full">
        <input
          type="text"
          placeholder="Cari disini"
          class="pl-4 pr-10 py-1 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
        <button class="absolute right-3 top-1/2 transform -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      <button
        class="bg-teal-700 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-teal-800 transition-colors"
      >
        Save
      </button>
    </div>

    <Table />
    <Pagination />
  </div>
</template>
