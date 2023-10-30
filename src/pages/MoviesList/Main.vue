<!--script-->
<script setup>
import { ref, computed, onMounted } from "vue";
import Actions from "../../components/global/Actions/index.vue";
import Table from "../../components/pages/MoviesList/Table/index.vue";
import { useStore } from "vuex";

//store
const store = useStore();

//store
let Movies = ref();
//FillterMoviesList
const FillterMoviesList = (values) => {
  console.log("values ===", values);
  Movies.value = values;
};
onMounted(() => {
  Movies.value = store.getters.getMovies;
});
</script>
<!--template-->
<template>
  <Actions @FillterMoviesList="FillterMoviesList" />
  <!--pass prop MoviesList value to table in components-->
  <Table :MoviesList="Movies" />
</template>
