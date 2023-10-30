<!--script-->
<script setup>
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

//route
const route = useRoute();

//store
const store = useStore();

//id
const id = route.params.id;

//MovieDetailes
const MovieDetailes = ref();

//RolesActor from store
const RolesActor = computed(() => store.getters.getRolesActor);

//onMounted
onMounted(() => {
  //condition id
  if (id) {
    //setDetaileMovie action
    store.dispatch("setDetaileMovie", id).then(() => {
      console.log("MovieDetailes");
      MovieDetailes.value = store.getters.getMovieDetailes;
    });
  }
});
</script>
<!--template-->
<template>
  <div>
    <!--MovieDetailes-->
    <div class="row" v-if="MovieDetailes">
      <h2>Show Detailes</h2>
      <!--Tilte-->
      <div class="col-lg-4">
        <label>Tilte</label>
        <p>{{ MovieDetailes.title ? MovieDetailes.title : "No Found" }}</p>
      </div>
      <!--Year-->
      <div class="col-lg-4">
        <label>Year</label>
        <p>{{ MovieDetailes.year ? MovieDetailes.year : "No Found" }}</p>
      </div>
      <!--Description-->
      <div class="col-lg-4">
        <label>Description</label>
        <p>
          {{
            MovieDetailes.description ? MovieDetailes.description : "No Found"
          }}
        </p>
      </div>
      <!--actors Detailes-->
      <div class="col-lg-12"><h6 class="mt-3">actors Detailes :-</h6></div>
      <div class="col-lg-6">
        <!--table actors Detailes-->
        <table class="table table-hover table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>name</th>
              <th>age</th>
              <th>join date</th>
              <th>ctor`s role</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="actor in MovieDetailes.actors" :key="actor.id">
              <td>{{ actor.id }}</td>
              <td>{{ actor.name }}</td>
              <td>{{ actor.age }}</td>
              <td>{{ actor.join_date }}</td>
              <td>{{ RolesActor[actor.role] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<!--style-->
<style scoped>
/*p style*/
p,
td {
  color: #aaa;
  font-size: 15px;
  margin: 10px 0px 20px;
}
</style>
