<template>
  <div :class="computedClass">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  props: {
    cardClass: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const defaultClass =
      'p-4 h-[85px] flex items-center whitespace-nowrap justify-center  rounded-lg shadow-md'

    const computedClass = computed(() => `${defaultClass} ${props.cardClass}`)

    return { computedClass }
  },
})
</script>
