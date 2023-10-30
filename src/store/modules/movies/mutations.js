import { toast } from "vue3-toastify";
export default {
  // SET_DETAILES to view detailes of Movie by payload = id
  SET_DETAILES(state, payload) {
    // make filter to MoviesList state to take object which have payload
    state.MoviesList.filter((e) => e.id == payload).map((e) => {
      state.MovieDetailes = {
        id: e.id,
        title: e.title,
        year: e.year,
        description: e.description,
        actors: e.actors,
      };
    });
  },

  // SET_DELETE_MOVIE to delete of Movie by payload = id
  async SET_DELETE_MOVIE(state, payload) {
    // filter Movies which not have this  payload
    state.MoviesList = await state.MoviesList.filter((e) => e.id !== payload);
    toast.success("successfly ....");
  },

  // SET_ADD_MOVIE to add of Movie have data payload
  async SET_ADD_MOVIE(state, payload) {
    // push data to MoviesList
    state.MoviesList.push(payload);
    toast.success("successfly ....");
  },
  // SET_ADD_MOVIE to add of Movie have data payload
  async SET_EDIT_MOVIE(state, payload) {
    // push data to MoviesList
    const index = state.MoviesList.findIndex((e) => e.id === payload.id);
    state.MoviesList.splice(index, 1, payload);
    toast.success("successfly ....");
  },
};
