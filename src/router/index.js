import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../views/ProductList.vue";
import ProductDetail from "../views/ProductDetail.vue";
import ProductCreate from "../views/ProductCreate.vue";
import ProductUpdate from "../views/ProductUpdate.vue";
import SalesList from "../views/SalesList.vue";
import ImageInsert from "../views/ImageInsert.vue";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: ProductList,
  },
  {
    path: "/create",
    name: "ProductCreate",
    component: ProductCreate,
  },
  {
    path: "/detail",
    name: "ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/update",
    name: "ProductUpdate",
    component: ProductUpdate,
  },
  {
    path: "/sales",
    name: "SalesList",
    component: SalesList,
  },
  {
    path: "/image_insert",
    name: "ImageInsert",
    component: ImageInsert,
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
