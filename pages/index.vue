<template>
  <body>
    <!-- <p v-for="item in stats" :key="item.id">
      <span> {{ item.title }} </span>
    </p> -->
    <h1 class="header">Architecture <span>Loading...</span></h1>

    <div class="gallery">
      <div class="gallery__item"><img src="img/1.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/2.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/3.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/4.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/5.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/6.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/7.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/8.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/9.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/10.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/11.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/12.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/13.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/14.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/15.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/16.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/17.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/18.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/19.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/20.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/1.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/2.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/3.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/4.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/5.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/6.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/7.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/8.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/9.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/10.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/11.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/12.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/13.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/14.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/15.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/16.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/17.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/18.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/19.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/20.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/1.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/2.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/3.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/4.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/5.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/6.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/7.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/8.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/9.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/10.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/11.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/12.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/13.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/14.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/15.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/16.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/17.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/18.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/19.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/20.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/1.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/2.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/3.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/4.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/5.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/6.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/7.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/8.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/9.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/10.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/11.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/12.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/13.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/14.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/15.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/16.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/17.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/18.jpg" alt="Alt" /></div>
      <div class="gallery__item"><img src="img/19.jpg" alt="Alt" /></div>
    </div>
  </body>
</template>

<script setup>
const { data: stats } = await useAsyncData("stats", () =>
  $fetch("https://jsonplaceholder.typicode.com/posts")
);

console.log(stats.value[1].title);
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

          Draggable.create(".gallery", {
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
