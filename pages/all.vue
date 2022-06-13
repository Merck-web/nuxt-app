<template>
  <section class="all max-w-[1440px] mx-auto">
    <div
      class="header flex w-full justify-center font-extrabold text-[28px] mb-5"
    >
      Каталог
    </div>
    <!--eslint-disable-next-line prettier/prettier -->
    <div
      class="catalog grid grid-cols-cardColumns gap-cardGap w-full mb-10"
    >
      <card
        v-for="product in products"
        :key="product.id"
        :product="product"
        @sendArticle="showArticleData"
      />
    </div>
  </section>
</template>

<script>
import card from "~/components/card.vue";

export default {
  components: { card },
  data() {
    return {
      products: [
        {
          image:
            "https://static.rendez-vous.ru/files/catalog_models/resize_640x630/1/1868764_krossovki_ash_addict_belyy_kozha_natural_naya.JPG",
          name: "T-shirt 1",
          price: 2100.234234234,
          article: "T1",
          available: true,
          category: "Мужские",
        },
        {
          image:
            "https://st.tsum.com/btrx/i/12/59/88/41/01_1526.jpg?u=1645652014",
          name: "T-shirt 2",
          price: 3150.12312412,
          article: "T2",
          available: true,
          category: "Женские",
        },
        {
          image:
            "https://www.sport-life124.ru/image/cache/catalog/0Balenciaga/novye/159119095-1000x1340.jpg",
          name: "T-shirt 3",
          price: 4200.51524,
          article: "T3",
          available: false,
          category: "Женские",
        },
        {
          image:
            "https://ixbt.online/live/images/original/00/96/98/2021/08/02/da0b223f75.webp?w=877",
          name: "T-shirt 4",
          price: 5300.1245512,
          article: "T4",
          available: true,
          category: "Мужские",
        },
        {
          image:
            "https://icdn.lenta.ru/images/2021/08/10/13/20210810135231538/square_320_66167a7cbfc842bf01dcd7ce6c2f04a9.jpg",
          name: "T-shirt 5",
          price: 6500.3522314,
          article: "T5",
          available: false,
          category: "Женские",
        },
        {
          image:
            "https://www.shoppingschool.ru/netcat_files/147/274/Shablon_870_139.jpg",
          name: "T-shirt 6",
          price: 8700.4124123,
          article: "T6",
          available: true,
          category: "Женские",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    showArticleData(data) {
      console.log(data);
    },
  },
};
</script>
