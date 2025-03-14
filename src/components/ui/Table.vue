<script setup lang="ts">
interface TableData {
  namaBatch: string
  totalInnovators: string
  batch: number
  createdAt: string
}

const tableData: TableData[] = [
  {
    namaBatch: 'Nama Batch',
    totalInnovators: '289 Innovators',
    batch: 6,
    createdAt: '22 Juli 2023 09:00 AM',
  },
  {
    namaBatch: 'Nama Batch',
    totalInnovators: '289 Innovators',
    batch: 5,
    createdAt: '22 Juli 2023 09:00 AM',
  },
  {
    namaBatch: 'Nama Batch',
    totalInnovators: '289 Innovators',
    batch: 4,
    createdAt: '22 Juli 2023 09:00 AM',
  },
  {
    namaBatch: 'Nama Batch',
    totalInnovators: '289 Innovators',
    batch: 3,
    createdAt: '22 Juli 2023 09:00 AM',
  },
  {
    namaBatch: 'Nama Batch',
    totalInnovators: '289 Innovators',
    batch: 2,
    createdAt: '22 Juli 2023 09:00 AM',
  },
  {
    namaBatch: 'Nama Batch',
    totalInnovators: '289 Innovators',
    batch: 1,
    createdAt: '22 Juli 2023 09:00 AM',
  },
]
</script>

<template>
  <div class="container mx-auto">
    <div class="overflow-x-auto">
      <table class="w-full border-separate border-spacing-y-4">
        <thead>
          <tr class="bg-white text-teal-700 font-bold">
            <th class="text-left border-teal-700 border-y border-l rounded-l-lg px-6 py-4">
              Nama Batch
            </th>
            <th class="text-left border-teal-700 border-y px-6 py-4">Total Innovators</th>
            <th class="text-left border-teal-700 border-y px-6 py-4">Batch</th>
            <th class="text-left border-teal-700 border-y px-6 py-4">CREATED AT</th>
            <th class="text-left border-teal-700 border-y border-r rounded-r-lg px-6 py-4">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableData" :key="item.batch" class="bg-white">
            <td
              class="px-6 py-2 text-teal-700 font-bold border-teal-700 border-y border-l rounded-l-lg"
            >
              {{ item.namaBatch }}
            </td>
            <td class="px-6 py-2 border-teal-700 border-y">
              {{ item.totalInnovators }}
            </td>
            <td class="px-6 py-2 border-teal-700 border-y text-teal-700 font-bold">
              {{ item.batch }}
            </td>
            <td class="px-6 py-2 border-teal-700 border-y">{{ item.createdAt }}</td>
            <td class="px-6 py-2 border-teal-700 border-y border-r rounded-r-lg">
              <button
                v-if="item.batch === 6"
                class="bg-teal-700 cursor-pointer text-white px-4 py-2 rounded hover:bg-teal-800 transition-colors"
              >
                Add Score
              </button>
              <button
                v-else
                class="bg-red-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              >
                Detail
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
