<script setup>
import { ref } from 'vue'
import Profile from './ui/Profile.vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <nav class=" ">
    <div class="mx-auto px-12 py-6 font-bold">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center">
            <img src="@/assets/scala.svg" alt="Logo" class="h-24 w-24" />
          </div>
        </div>
        <div class="hidden md:ml-6 md:flex md:space-x-8">
          <a href="#" class="text-teal-600 hover:text-teal-700 px-3 py-2">Home</a>
          <a href="#" class="text-teal-600 hover:text-teal-700 px-3 py-2">Setup</a>
          <a href="#" class="text-teal-600 hover:text-teal-700 px-3 py-2">Explore</a>
          <div class="relative mt-1.5 z-50">
            <a href="#" class="text-teal-600 underline hover:text-teal-700 px-3 py-2">Score</a>
            <div>
              <img
                src="@/assets/triangle_green.svg"
                alt=""
                class="w-4 h-4 absolute right-0 left-0 mx-auto"
              />
              <div
                class="bg-teal-700 space-y-2 w-[247px] py-6 absolute top-8 text-white rounded-md px-4"
              >
                <p>Scoring</p>
                <p>Jury’s Progress</p>
              </div>
            </div>
          </div>
          <a href="#" class="text-teal-600 hover:text-teal-700 px-3 py-2">Blast</a>
          <a href="#" class="text-teal-600 hover:text-teal-700 px-3 py-2">Tutorial</a>
          <a href="#" class="text-teal-600 hover:text-teal-700 px-3 py-2">FAQ</a>
        </div>

        <Profile />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  color: #059669;
  border-bottom: 2px solid #059669;
}
</style>
