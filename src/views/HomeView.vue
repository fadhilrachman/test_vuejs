<script setup lang="ts">
import DataTable from '../components/DataTable.vue'

import Footer from '@/components/Footer.vue'
import Stepper from '@/components/Stepper.vue'
// @ts-ignore
import Navbar from '../components/Navbar.vue'

// @ts-ignore
import CardSection from '@/components/CardSection.vue'

// @ts-ignore
import Marquee from '@/components/Marquee.vue'
// import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
</script>

<template>
  <div className="min-h-screen bg-[#E9F2FF] space-y-6">
    <Navbar />
    <Marquee />
    <Stepper />
    <div class="px-12">
      <CardSection />
      <DataTable />
    </div>
    <Footer />
  </div>
</template>
