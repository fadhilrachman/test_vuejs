<script>
import VueMarqueeText from 'vue-marquee-text-component'

export default {
  components: {
    VueMarqueeText,
  },
}
</script>
<template>
  <div class="bg-[#F5BB65] py-1">
    <VueMarqueeText class="w-full z-0" :duration="10" :repeat="10">
      <p class="font-semibold mr-20">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, at?
      </p>
    </VueMarqueeText>
  </div>
</template>
