import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
export default {
  state() {
    return {
      //gMovies List array
      MoviesList: [
        {
          id: 1,
          title: "Movies1",
          year: 1,
          description: "Hello",
          actors: [
            {
              id: 1,
              name: "Ali",
              age: 30,
              join_date: 1,
              role: 1,
            },
          ],
        },
        {
          id: 2,
          title: "Movies2",
          year: 3,
          description: "Hello",
          actors: [
            {
              id: 1,
              name: "Ali",
              age: 30,
              join_date: 1,
              role: 2,
            },
          ],
        },
      ],
      //MovieDetailes List array
      MovieDetailes: null,
      //RolesActor List array
      RolesActor: [
        "Background role",
        "Cameo",
        "Recurring cWharacter",
        "Side character",
        "Series regular",
      ],
    };
  },
  mutations,
  actions,
  getters,
};
