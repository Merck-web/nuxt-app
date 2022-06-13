import { ref } from "vue";
export default function useProducts() {
  const error = ref(null);
  const products = ref(null);

  const load = async () => {
    try {
      const productsResponse = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      products.value = await productsResponse.json();
    } catch (e) {
      error.value = e;
    }
  };
  return { error, products, load };
}
