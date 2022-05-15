<template>
  <body>
    <client-only>
    <h1 class="header">Cats <span>Loading...</span></h1>
    </client-only>

    <div id="gallery" class="gallery">
      <div v-for="cat in stats" :key="cat.id" class="gallery__item">
        <img :src="cat.url" :alt="cat.url" />
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

console.log(stats.value);
</script>
<script>
export default {
  methods: {
    importGsap() {
      let first = document.createElement("script");
      first.setAttribute("src", "assets/js/gsap.min.js");
      document.head.appendChild(first);
    },
    importDraggable() {
      let second = document.createElement("script");
      second.setAttribute("src", "assets/js/Draggable.min.js");
      document.head.appendChild(second);
    },
    importInert() {
      let third = document.createElement("script");
      third.setAttribute("src", "assets/js/InertiaPlugin.min.js");
      document.head.appendChild(third);
    },
    gras() {
      setTimeout(function () {
        document.body.classList.add("loaded");

        if (window.matchMedia("(min-width: 992px)").matches) {
          // If not mobile

          const gallery = document.querySelector(".gallery");

          Draggable.create("#gallery", {
            bounds: "body",
            inertia: true,
          });
        }
      }, 200);
    },
  },
  beforeMount() {
    this.importGsap();
    this.importDraggable();
    this.importInert();
  },
  mounted() {
    this.importDraggable();
    this.importInert();
    this.gras();
  },
};
</script>
