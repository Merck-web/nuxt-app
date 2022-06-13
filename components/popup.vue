<template>
  <div
    class="popup flex justify-between items-center flex-col h-full w-full absolute inset-0 bg-slate-500 z-10"
  >
    <div class="popup__header flex justify-center items-center">
      <span class="name"> {{ name }} </span>
    </div>
    <div class="popup__content flex justify-center items-center">
      <slot></slot>
    </div>
    <div class="popop__footer flex justify-beetwen items-center">
      <Btn
        name="Добавить"
        color="#000"
        color-text="white"
        @clickBtn="addProduct"
      />
      <Btn
        name="Закрыть"
        color="blue"
        color-text="white"
        @clickBtn="closePopup"
      />
    </div>
  </div>
</template>

<script>
import Btn from "~/components/Button.vue";
export default {
  name: "Popup",
  components: {
    Btn,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    addProduct() {
      this.$emit("rightBtnAction");
    },
    closePopup() {
      this.$emit("closePopup");
    },
  },
};
</script>
