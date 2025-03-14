<script setup>
import Card from './ui/Card.vue'
import Toogle from './ui/Toogle.vue'

const steps = [
  {
    title: 'Screening Tahap 1',
    count: 67,
    type: 'Idea',
    active: true,
    color: 'teal',
  },
  {
    title: 'Announce Result',
    count: 53,
    type: 'Idea',
    active: false,
    color: 'white',
  },
  {
    title: 'Re-Grouping',
    count: 53,
    type: 'Idea',
    active: false,
    color: 'white',
    hasToggle: true,
  },
  {
    title: 'Screening Tahap 2',
    count: 40,
    type: 'Idea',
    active: false,
    color: 'white',
  },
  {
    title: 'Re-screening',
    count: 17,
    type: 'Idea',
    active: false,
    color: 'white',
    hasToggle: true,
  },
  {
    title: 'Close Batch',
    count: null,
    type: null,
    active: false,
    color: 'teal',
  },
]
</script>

<template>
  <div class="flex items-center justify-between gap-4 py-4 mb-[64px] px-12">
    <div class="relative">
      <Card card-class="bg-teal-700 text-white">
        <div>
          <h3 class="font-bold text-md underline">Screening Tahap 1</h3>
          <p class="text-center">67 Idea</p>
        </div>
      </Card>
      <img src="@/assets/triangle_red.svg" alt="" class="w-4 h-4 absolute right-0 left-0 mx-auto" />
      <div
        class="bg-[#F65751] absolute -bottom-9 text-white right-0 left-0 rounded-md px-4 w-max mx-auto"
      >
        <span>You're Here!</span>
      </div>
    </div>
    <Card class="">
      <h3 class="text-teal-700 font-bold text-md underline">Announce Result</h3>
    </Card>
    <Card class="">
      <div class="flex items-center text-teal-700 space-x-4">
        <div>
          <h3 class="font-bold text-md underline">Re Grouping</h3>
          <p class="">67 Idea</p>
        </div>
        <!-- <input type="checkbox" name="" id="" /> -->
        <Toogle />
      </div>
    </Card>
    <Card class="">
      <div class="text-teal-700">
        <h3 class="font-bold text-md underline">Screening Tahap 2</h3>
        <p class="text-center">40 Idea</p>
      </div>
    </Card>
    <Card class="">
      <div class="flex text-teal-700 items-center space-x-4">
        <div>
          <h3 class="font-bold text-md underline">Re Screening</h3>
          <p class="">40 Idea</p>
        </div>
        <!-- <input type="checkbox" name="" id="" /> -->
        <Toogle />
      </div>
    </Card>
    <Card card-class="bg-teal-700 text-white">
      <h3 class="font-bold text-md underline">Close Batch</h3>
    </Card>
  </div>
</template>
