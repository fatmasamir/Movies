import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/MoviesList/Main.vue";
import Form from "../pages/Form/Main.vue";
import ViewMovies from "../pages/ViewMovies/Main.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/add-movie",
      component: Form,
    },
    {
      path: "/edit-movie/:id",
      component: Form,
    },
    {
      path: "/view-movie/:id",
      component: ViewMovies,
    },
  ],
});
