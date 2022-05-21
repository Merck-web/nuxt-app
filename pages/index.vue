<template>
  <div class="body">
    <client-only>
      <h1 class="header">Cats <span class="loader"> Loading...</span></h1>
    </client-only>
    <div class="gallery__box">
      <div id="gallery" class="gallery">
        <div v-for="cat in stats" :key="cat.id" class="gallery__item">
          <img :src="cat.url" :alt="cat.url" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const { data: stats } = await useAsyncData("stats", () =>
  $fetch("https://api.thecatapi.com/v1/images/search?limit=100", {
    "x-api-key": "fe055ebb-1c00-4370-84ae-158fba71d480",
  })
);

// const el = ref([]);
// onMounted(() => {
//   for (let i = 0; i < 100; i++) {
//     stats.value[i].push(el);
//     console.log(el);
//   }
// });
</script>
<script>
import { gsap } from "gsap";
import { Draggable } from "gsap/all";

if (process.client) {
  gsap.registerPlugin(Draggable);
}
export default {
  methods: {
    gras() {
      setTimeout(function () {
        if (window.matchMedia("(min-width: 992px)").matches) {
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

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --gap: 0.5em;
  --index: calc(1vw + 1vh);
  --color-dark: #000;
}
.body {
  overflow: hidden;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header {
  text-transform: uppercase;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  letter-spacing: 0.1em;
  font-size: calc(var(--index) * 2.8);
  position: absolute;
  font-weight: 200;
  text-align: center;
  opacity: 0.9;
  margin-top: 0.2em;
}
.header span {
  display: block;
  font-family: Helvetica, sans-serif;
  font-size: calc(var(--index) * 0.75);
  margin-top: 5px;
}
.gallery {
  width: 30vw;
  column-width: 2em;
  gap: var(--gap);
  transform: scale(8.2);
  will-change: transform;
  transition: transform 1s cubic-bezier(0.075, 1, 0.25, 1), opacity 1s;
}
.gallery__item {
  margin-bottom: var(--gap);
  transform: scale(1.001);
  will-change: transform;
  transition: 0.3s;
}
.gallery__item:hover {
  transform: scale(1.03);
}
.gallery__item img {
  width: 100%;
  display: block;
}
.loaded .gallery {
  opacity: 1;
}
.loaded .header span {
  opacity: 0;
}

/* DARK MODE OS */

@media (prefers-color-scheme: dark) {
  .body {
    background-color: var(--color-dark);
  }
  .header {
    filter: invert(100%);
  }
}

/* MOBILE */

@media (max-width: 992px) {
  .header {
    position: relative;
  }

  .body {
    overflow: scroll;
    display: block;
    padding: var(--gap);
  }

  .gallery {
    width: 100%;
    column-width: 10em;
    transform: scale(1);
  }
  .gallery__item:hover {
    transform: scale(1);
  }
}
</style>
