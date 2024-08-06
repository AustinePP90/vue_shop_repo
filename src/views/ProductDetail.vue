<template>
  <div class="">
    <h1>상품 상세페이지</h1>
    <div>
      <img :src="`/download/${product.path}`" alt="상품이미지" />
      <h2>{{ product.product_name }}</h2>
      <p>{{ product.product_price.toLocaleString() }}원</p>
    </div>
    <div>
      <p>상품을 찾을 수 없습니다.</p>
    </div>
    <div>
      <router-link to="/">돌아가기</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProductDetail",
  computed: {
    ...mapGetters(["filteredProductList"]),
    product() {
      const product_id = Number(this.$route.query.id);
      const products = this.filteredProductList();
      return products.find((p) => p.id === product_id);
    },
  },
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>
