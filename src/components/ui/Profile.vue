<template>
  <div class="relative flex items-center space-x-4">
    <!-- Notifikasi -->
    <div class="relative">
      <div class="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
        <img src="@/assets/bell.svg" alt="User Avatar" class="w-4 h-4" />
      </div>
      <div
        class="absolute -top-2 -right-2 bg-[#18918F] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white"
      >
        2
      </div>
    </div>

    <!-- Avatar -->
    <div class="w-9 h-9 rounded-full border-2 border-[#18918F] overflow-hidden shadow-lg">
      <img src="@/assets/avatar.svg" alt="User Avatar" class="w-full h-full object-cover" />
    </div>
  </div>
</template>
