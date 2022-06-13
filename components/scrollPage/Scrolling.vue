<template>
  <section class="scroll">
    <h1 id="title">213123213</h1>
  </section>
</template>

<script>
import gsap from "gsap";
import { Draggable } from "gsap/all";
if (process.client) {
  gsap.registerPlugin(Draggable);
}
export default {
  data() {
    return {};
  },
  mounted() {
    this.gras();
  },
  methods: {
    gras() {
      gsap.to("#title", {
        duration: 1,
        backgroundColor: "#FFDAAD",
        ease: "ease.in",
      });
    },
  },
};
</script>

<style lang="scss">
section.scroll {
}
</style>
