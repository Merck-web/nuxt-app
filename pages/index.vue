<template>
  <body>
    <client-only>
      <h1 class="header">Cats <span>Loading...</span></h1>
    </client-only>
    <div class="gallery__box">
      <div id="gallery" class="gallery">
        <div v-for="cat in stats" :key="cat.id" class="gallery__item">
          <img :src="cat.url" :alt="cat.url" />
        </div>
      </div>
    </div>
  </body>
</template>

<script setup>
const { data: stats } = await useAsyncData("stats", () =>
  $fetch("https://api.thecatapi.com/v1/images/search?limit=100", {
    "x-api-key": "fe055ebb-1c00-4370-84ae-158fba71d480",
  })
);

// console.log(stats.value);
</script>
<script>
// typical import
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

if (process.client) {
  gsap.registerPlugin(Draggable);
}
export default {
  methods: {
    gras() {
      setTimeout(function () {
        document.body.classList.add("loaded");

        if (window.matchMedia("(min-width: 992px)").matches) {
          // If not mobile

          Draggable.create(".gallery__box", {
            bounds: ".gallery",
            inertia: true,
          });
        }
      }, 200);
    },
  },
  mounted() {
    this.gras();
  },
};
</script>
