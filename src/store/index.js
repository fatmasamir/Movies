import { createStore } from "vuex";
import movies from "./modules/movies/index";
const store = createStore({
  modules: {
    movies: movies,
  },
});

export default store;
