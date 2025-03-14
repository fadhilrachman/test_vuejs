<template>
  <label class="flex items-center cursor-pointer">
    <input type="checkbox" v-model="isActive" class="hidden" />
    <div
      class="w-12 h-6 rounded-full p-1 transition duration-300"
      :class="{
        'bg-gray-300': !isActive,
        'bg-gray-500': isActive,
      }"
    >
      <div
        class="w-4 h-4 bg-white mb- rounded-full shadow-md transform transition duration-300"
        :class="{ 'translate-x-6': isActive }"
      ></div>
    </div>
    <span class="ml-2 text-gray-600">
      {{ isActive ? 'Aktif' : 'Tidak Aktif' }}
    </span>
  </label>
</template>

<script setup>
import { ref } from 'vue'

const isActive = ref(false)
</script>
