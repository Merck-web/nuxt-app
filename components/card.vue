<template>
  <div class="p-10 max-w-sm w-full shadow-enter">
    <Popup v-if="isPopupVisible" @closePopup="closePopup"
      ><p>sadsadsadasd</p>
    </Popup>
    <div class="flex justify-beetwen items-center mb-2">
      <div
        class="image flex justify-center items-center w-full px-2 h-80 bg-cover bg-no-repeat bg-center"
        :style="{ 'background-image': `url(${product.image})` }"
      ></div>
    </div>
    <div class="flex justify-start items-center flex-col my-3">
      <div class="name">{{ product.name }}</div>
    </div>
    <div class="flex justify-between items-center">
      <Btn
        name="Добавить в корзину"
        color="#000"
        color-text="white"
        @clickBtn="sendData"
      />
      <Btn
        name="Показать информацию"
        color="blue"
        color-text="white"
        @clickBtn="moreInfo"
      />
    </div>
  </div>
</template>

<script>
import Btn from "~/components/Button.vue";
import Popup from "~/components/popup.vue";
export default {
  name: "Card",
  components: {
    Btn,
    Popup,
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isPopupVisible: false,
    };
  },
  methods: {
    sendData() {
      this.$emit("sendArticle", this.product.article);
    },
    moreInfo() {
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    },
  },
};
</script>
