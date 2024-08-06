import { createStore } from "vuex";
//import persistedstate from 'vuex-persistedstate';

const store = createStore({
  state: {
    user: null,
    hardcodeUser: {
      username: "admin",
      password: "1234",
    },
    productList: [
      {
        id: 1,
        product_name: "게이밍 노트북",
        path: "gaming-laptop.jpg",
        category1: "전자기기",
        category2: "노트북",
        category3: "게이밍",
        product_price: 1200000,
      },
      {
        id: 2,
        product_name: "4K 모니터",
        path: "4k-monitor.jpg",
        category1: "전자기기",
        category2: "모니터",
        category3: "4K",
        product_price: 450000,
      },
      {
        id: 3,
        product_name: "무선 마우스",
        path: "wireless-mouse.jpg",
        category1: "전자기기",
        category2: "PC용품",
        category3: "무선",
        product_price: 30000,
      },
      {
        id: 4,
        product_name: "울트라북",
        path: "ultrabook.jpg",
        category1: "전자기기",
        category2: "노트북",
        category3: "울트라북",
        product_price: 1500000,
      },
      {
        id: 5,
        product_name: "Curved 모니터",
        path: "curved-monitor.jpg",
        category1: "전자기기",
        category2: "모니터",
        category3: "Curved",
        product_price: 600000,
      },
      {
        id: 6,
        product_name: "유선 키보드",
        path: "wired-keyboard.jpg",
        category1: "전자기기",
        category2: "PC용품",
        category3: "유선",
        product_price: 20000,
      },
      {
        id: 7,
        product_name: "게이밍 마우스",
        path: "gaming-mouse.jpg",
        category1: "전자기기",
        category2: "PC용품",
        category3: "게이밍",
        product_price: 50000,
      },
      {
        id: 8,
        product_name: "아이패드",
        path: "ipad.jpg",
        category1: "전자기기",
        category2: "노트북",
        category3: "아이패드",
        product_price: 600000,
      },
      {
        id: 9,
        product_name: "HD 모니터",
        path: "hd-monitor.jpg",
        category1: "전자기기",
        category2: "모니터",
        category3: "HD",
        product_price: 300000,
      },
      {
        id: 10,
        product_name: "무선 키보드",
        path: "wireless-keyboard.jpg",
        category1: "전자기기",
        category2: "PC용품",
        category3: "무선",
        product_price: 25000,
      },
      {
        id: 11,
        product_name: "노트북 가방",
        path: "laptop-bag.jpg",
        category1: "액세서리",
        category2: "PC용품",
        category3: "노트북",
        product_price: 70000,
      },
      {
        id: 12,
        product_name: "1080p 모니터",
        path: "1080p-monitor.jpg",
        category1: "전자기기",
        category2: "모니터",
        category3: "1080p",
        product_price: 400000,
      },
      {
        id: 13,
        product_name: "모니터 스탠드",
        path: "monitor-stand.jpg",
        category1: "액세서리",
        category2: "PC용품",
        category3: "모니터",
        product_price: 35000,
      },
      {
        id: 14,
        product_name: "게이밍 헤드셋",
        path: "gaming-headset.jpg",
        category1: "전자기기",
        category2: "PC용품",
        category3: "게이밍",
        product_price: 80000,
      },
      {
        id: 15,
        product_name: "노트북 쿨러",
        path: "laptop-cooler.jpg",
        category1: "전자기기",
        category2: "PC용품",
        category3: "노트북",
        product_price: 50000,
      },
    ],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state) {
      state.user = null;
    },
    loginUser(state, { username, password }) {
      if (username === "admin" && password === "1234") {
        state.user = { username: username };
      } else {
        state.user = null;
        console.error("아이디나 비번이 올바르지 않습니다.");
      }
    },
    deleteProduct(state, productId) {
      state.productList = state.productList.filter(
        (product) => productId !== product.id
      );
    },
    addProduct(state, product) {
      const newId = state.productList.length
        ? Math.max(...state.productList.map((p) => p.id)) + 1
        : 1;
      state.productList.push({ ...product, id: newId });
    },
  },
  getters: {
    filteredProductList:
      (state) =>
      (selectedCategory = "") => {
        console.log("selectedCategory=>", selectedCategory, "<");

        if (!selectedCategory) {
          return state.productList;
        }
        return state.productList.filter(
          (product) => product.category2 === selectedCategory
        );
      },
  },
});

export default store;
