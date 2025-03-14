<script setup lang="ts">
const steps = [
  {
    date: '21 Apr - 31 Mei 2024',
    title: 'Pendaftaran untuk submission ABCD',
  },
  {
    date: '1 Jun - 15 Jun 2024',
    title: 'lorem ipsum dolores si amet lorem ipsum dolores si amet',
  },
  {
    date: '16 Jun - 30 Jun 2024',
    title: 'lorem ipsum dolores si amet lorem ipsum dolores si amet',
  },
  {
    date: '1 Jul - 31 Jul 2024',
    title: 'lorem ipsum dolores si amet lorem ipsum dolores si amet',
  },
  {
    date: '1 Jul - 31 Jul 2024',
    title: 'lorem ipsum dolores si amet lorem ipsum dolores si amet',
  },
  {
    date: '1 Jul - 31 Jul 2024',
    title: 'lorem ipsum dolores si amet lorem ipsum dolores si amet',
  },
  {
    date: '10 Agt 2024',
    title: 'lorem ipsum dolores si amet lorem ipsum dolores si amet',
  },
]
</script>

<template>
  <div class="flex items-center justify-center p-8">
    <div class="w-full">
      <div class="relative">
        <div class="absolute top-5 left-5 right-5 h-[1px] bg-teal-600"></div>

        <div class="relative flex justify-between">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="flex-1 max-w-[202px] relative text-center px-4"
          >
            <div class="mb-4 relative flex justify-center">
              <div class="relative">
                <img
                  src="@/assets/marker.svg"
                  v-if="index === 0"
                  alt="Logo"
                  class="mt-2 absolute -top-4"
                />

                <img src="@/assets/dot.svg" alt="Logo" class="mt-2" />
              </div>
            </div>

            <div class="space-y-1">
              <p class="text-sm font-bold text-teal-700">
                {{ step.date }}
              </p>
              <p class="text-sm text-gray-600">{{ step.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
