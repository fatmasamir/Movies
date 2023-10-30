<!--script-->
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import AddMovie from "./AddMovie/index.vue";
import EditMovie from "./EditMovie/index.vue";

//store
const store = useStore();

//route
const route = useRoute();

//MovieDetailes
const MovieDetailes = ref([]);

//id
const id = route.params.id;

//onMounted
onMounted(() => {
  //condition id
  if (id) {
    store.dispatch("setDetaileMovie", id).then(() => {
      MovieDetailes.value = store.getters.getMovieDetailes;
    });
  }
});
</script>
<!--template-->
<template>
  <div class="PageForms">
    <div class="title">
      <!--Title page-->
      <h2 v-if="id">Edit Movie</h2>
      <h2 v-else>Add Movie</h2>
    </div>
    <!--choose if add or edit-->
    <div v-if="id">
      <EditMovie
        v-if="MovieDetailes.length != 0"
        :MovieDetailes="MovieDetailes"
      />
    </div>
    <AddMovie v-else />
  </div>
</template>
