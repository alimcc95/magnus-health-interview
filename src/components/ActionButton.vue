<script lang="ts" setup>
defineProps<{
  label: string;
  color: string
}>();
</script>

<template>
  <button class="ml-2 p-1 text-white  min-w-20 rounded-full" :class="color">
    {{ label }}
  </button>
</template>
