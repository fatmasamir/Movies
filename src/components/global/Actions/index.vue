<!--script-->
<script setup>
import { defineEmits, computed, ref } from "vue";
import { useStore } from "vuex";

//store
const store = useStore();

//emits
const emits = defineEmits(["FillterMoviesList"]);

//FillterList
const FillterList = { title: "", year: null, numberActorsFillter: null };

//MoviesList list
let MoviesList = store.getters.getMovies;

//ListMovies
const ListMovies = ref([]);

//FillterList
const FillterFun = () => {
  ListMovies.value = MoviesList;

  //filter
  ListMovies.value = ListMovies.value.filter(function (item) {
    for (let key in FillterList) {
      if (key != "numberActorsFillter") {
        if (FillterList[key] && item[key] != FillterList[key]) return false;
      } else {
        if (FillterList[key] && item.actors.length != FillterList[key])
          return false;
      }
    }
    return true;
  });

  //emits FillterMoviesList
  emits("FillterMoviesList", ListMovies.value);
};
</script>
<!--template-->
<template>
  <div class="">
    <div class="fillter">
      <div class="row mb-3">
        <div class="mb-2 col-lg-3">
          <label for="exampleFormControlInput1" class="form-label">Tilte</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="title"
            v-model="FillterList.title"
          />
        </div>
        <div class="mb-2 col-lg-3">
          <label for="exampleFormControlInput1" class="form-label">year</label>
          <input
            type="text"
            class="form-control"
            id="year"
            placeholder="year"
            v-model="FillterList.year"
          />
        </div>
        <div class="mb-2 col-lg-3">
          <label for="exampleFormControlInput1" class="form-label"
            >number of actors</label
          >
          <input
            type="text"
            class="form-control"
            id="actors"
            placeholder="number of actors"
            v-model="FillterList.numberActorsFillter"
          />
        </div>
        <div class="col-lg-12">
          <router-link class="btn btn-primary" to="/add-movie"
            >Add Movies</router-link
          >
          <button class="btn btn-success" @click="FillterFun">Fillter</button>
        </div>
      </div>
    </div>
  </div>
</template>
<!--style-->
<style scoped lang="scss">
//button
button,
a.btn {
  padding: 10px 20px;
  margin-top: 20px;
  margin-right: 20px;
}
//btn-primary
.btn-primary {
  background: #1c92ed;
  border-color: #1c92ed;
}
</style>
