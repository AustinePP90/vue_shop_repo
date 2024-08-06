<template>
  <div class="container mt-4">
    <h1 class="mb-4">상품 등록하기</h1>
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">상품명:</label>
        <input
          type="text"
          class="form-control"
          v-model="newProduct.product_name"
          id="name"
          placeholder="상품명을 입력하세요"
        />
      </div>
      <div class="mb-3">
        <label for="price" class="form-label">가격:</label>
        <input
          type="text"
          class="form-control"
          v-model="newProduct.product_price"
          id="price"
          placeholder="가격을 입력하세요"
        />
      </div>
      <div class="mb-3">
        <label for="path" class="form-label">이미지:</label>
        <input
          type="text"
          class="form-control"
          v-model="newProduct.path"
          id="path"
          placeholder="이미지 경로를 입력하세요"
        />
      </div>
      <div class="mb-3">
        <label for="category1" class="form-label">카테고리1:</label>
        <select
          v-model="newProduct.category1"
          id="category1"
          class="form-select"
        >
          <option value="">선택하세요</option>
          <option value="전자기기">전자기기</option>
          <option value="액세서리">액세서리</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="category2" class="form-label">카테고리2:</label>
        <select
          v-model="newProduct.category2"
          id="category2"
          class="form-select"
        >
          <option value="">선택하세요</option>
          <option value="노트북">노트북</option>
          <option value="모니터">모니터</option>
          <option value="PC용품">PC용품</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="category3" class="form-label">카테고리3:</label>
        <select
          v-model="newProduct.category3"
          id="category3"
          class="form-select"
        >
          <option value="">선택하세요</option>
          <option value="게이밍">게이밍</option>
          <option value="무선">무선</option>
        </select>
      </div>
      <button type="text" class="btn btn-primary" @click="addGood">
        상품 등록
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ProductCreate",
  data() {
    return {
      newProduct: {
        product_name: "",
        product_price: 0,
        path: "none.jpg",
        category1: "",
        category2: "",
        category3: "",
      },
    };
  },
  watch: {
    // sample1() {
    //   console.log('');
    // }
    // 데이터를 감시하고 처리할 로직을 작성합니다.
  },
  computed: {
    // sample2() {
    //   return '';
    // }
    // 필요한 계산된 속성을 정의합니다.
  },
  methods: {
    addGood() {
      this.$store.commit("addProduct", this.newProduct);
      this.$router.push("/sales");
    },
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
