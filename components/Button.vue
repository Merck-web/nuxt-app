<template>
  <div
    class="px-5 py-3 max-w-[400px] w-full flex justify-center items-center rounded hover:opacity-80 cursor-pointer transition-all ease-linear duration-300"
    :style="{ 'background-color': `${color}` }"
    @click="buttonClick"
  >
    <button :style="{ color: `${colorText}` }">{{ name }}</button>
  </div>
</template>

<script>
export default {
  name: "Btn",
  props: {
    color: {
      type: String,
      default: "",
    },
    colorText: {
      type: String,
      default: "black",
    },
    name: {
      type: String,
      default: "Кнопка",
    },
    error: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    className() {
      return {
        disabled: this.disabled,
        error: this.error,
        success: this.success,
      };
    },
  },
  methods: {
    buttonClick() {
      this.$emit("clickBtn");
    },
  },
};
</script>
