<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import DataTable from '../components/DataTable.vue'
import CardSection from '@/components/CardSection.vue'
import Marquee from '@/components/Marquee.vue'
import Footer from '@/components/Footer.vue'
import Stepper from '@/components/Stepper.vue'
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
