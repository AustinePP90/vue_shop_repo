<template>
  <main class="mt-3">
    <div class="container">
      <div class="row mb-2">
        <div class="col-12">
          <!-- 카테고리 선택박스 -->
          <select class="form-select" v-model="selectedCategory">
            <option value="">선택하세요</option>
            <option value="노트북">노트북</option>
            <option value="모니터">모니터</option>
            <option value="PC용품">PC용품</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xl-3 col-lg-4 col-md-6"
          v-for="(product, idx) in filteredProductList"
          v-bind:key="idx"
        >
          <div class="card" style="width: 18rem">
            <a @click="gotoDetail(product.id)" style="cursor: pointer">
              <img
                v-bind:src="`/download/${product.path}`"
                class="card-img-top"
                alt="제품사진"
              />
            </a>
            <div class="card-body">
              <h5 class="card-title">{{ product.product_name }}</h5>
              <p class="card-text">
                <span class="badge bg-dark text-white me-1">{{
                  product.category1
                }}</span>
                <span class="badge bg-dark text-white me-1">{{
                  product.category2
                }}</span>
                <span class="badge bg-dark text-white me-1">{{
                  product.category3
                }}</span>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    장바구니 담기
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    주문하기
                  </button>
                </div>
                <small class="text-dark">{{ product.product_price }}원</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProductList",
  data() {
    return {
      selectedCategory: "",
    };
  },
  computed: {
    ...mapGetters({
      filteredProductList: "filteredProductList",
    }),
    filteredProductList() {
      return this.$store.getters.filteredProductList(this.selectedCategory);
    },
  },
  methods: {
    gotoDetail(product_id) {
      this.$router.push({ path: "/detail", query: { id: product_id } });
    },
    // sample3() {
    //   return '';
    // }
    // 컴포넌트에서 사용할 메서드를 정의합니다.
  },
  setup() {
    // Vue 3 Composition API의 setup 함수에서 추가적인 로직을 처리할 수 있습니다.
  },
  created() {
    // 컴포넌트가 생성될 때 실행될 로직을 작성합니다.
  },
  mounted() {
    // 컴포넌트가 DOM에 마운트된 직후 실행될 로직을 작성합니다.
  },
  unmounted() {
    // 컴포넌트가 파괴되기 전 실행될 로직을 작성합니다.
  },
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>
