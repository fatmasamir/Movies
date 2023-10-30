export default {
  //setDetaileMovie to commit payload to SET_DETAILES
  setDetaileMovie(context, payload) {
    context.commit("SET_DETAILES", payload);
  },
  //setDeleteMovie commit payload to SET_DELETE_MOVIE
  setDeleteMovie(context, payload) {
    context.commit("SET_DELETE_MOVIE", payload);
  },
  //setDeleteMovie commit payload to SET_DELETE_MOVIE
  setAddMovie(context, payload) {
    context.commit("SET_ADD_MOVIE", payload);
  },
  //setDeleteMovie commit payload to SET_DELETE_MOVIE
  setEditMovie(context, payload) {
    context.commit("SET_EDIT_MOVIE", payload);
  },
  setMoviesLocal(context) {
    context.commit("SET_MOVIES_LOCALSTORAGE");
  },
};
