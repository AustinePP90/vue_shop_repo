<template>
  <main class="mt-3">
    <div class="container">
      <div class="float-end mb-3">
        <button type="button" class="btn btn-dark" @click="gotoCreate">
          제품등록
        </button>
      </div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>이미지</th>
            <th>제품번호</th>
            <th>제품명</th>
            <th>제품가격</th>
            <th>카테고리</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(product, idx) in filteredProductList('')"
            v-bind:key="idx"
          >
            <td>
              <img
                :src="`/download/${product.path}`"
                alt=""
                style="height: 50px; width: auto"
              />
            </td>
            <td>{{ product.id }}</td>
            <td>{{ product.product_name }}</td>
            <td>{{ product.product_price.toLocaleString() }}</td>
            <td>
              {{ product.category1 }}>{{ product.category2 }}>{{
                product.category3
              }}
            </td>
            <td>
              <button type="button" class="btn btn-info me-1">사진등록</button>
              <button type="button" class="btn btn-warning me-1">수정</button>
              <button
                type="button"
                class="btn btn-danger me-1"
                @click="deleteProduct(product.id)"
              >
                삭제
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "SalesList",
  computed: {
    // Vuex의 mapGetters를 사용하여 filteredProductList를 가져옴
    ...mapGetters(["filteredProductList"]),
  },
  methods: {
    ...mapMutations(["deleteProduct"]),
    gotoCreate() {
      this.$router.push({ path: "/create" });
    },
  },
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>
