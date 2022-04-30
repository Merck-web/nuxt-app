<template>
  <div>1</div>
  <div>
    <p v-for="item in stats" :key="item.id">
      <span> {{ item.title }} </span>
    </p>
  </div>
</template>

<script setup>
const { data: stats } = await useAsyncData("stats", () =>
  $fetch("https://jsonplaceholder.typicode.com/posts")
);

console.log(stats.value[1].title);
</script>
