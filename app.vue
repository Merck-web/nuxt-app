<template>
  <div>1</div>
  <div>
    <p v-for="item in stats" :key="item.id">
      {{ stats }}
    </p>
  </div>
</template>

<script setup>
const { data: stats } = await useAsyncData("stats", () =>
  $fetch("https://api.roastandbrew.coffee/api/v1/companies/")
);
</script>
