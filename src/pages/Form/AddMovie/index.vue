<!--style-->
<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useForm } from "vee-validate";
import { useRouter } from "vue-router";
import AddActors from "../AddActors/index.vue";
import * as Yup from "yup";

//store
const store = useStore();

//store
const router = useRouter();

//MoviesList list
const MoviesList = computed(() => store.getters.getMovies);

//ListActors
const actors = ref([]);

// emit
let emit = defineEmits(["OnSubmitFun"]);

// meta
const { meta } = useForm();

// form
const { errors, handleSubmit, defineInputBinds } = useForm({
  validationSchema: Yup.object({
    title: Yup.string().required("the title required Filed"),
    year: Yup.number().required("the year required Filed"),
    description: Yup.string(),
  }),
});

//title ,year,description
const title = defineInputBinds("title");
const year = defineInputBinds("year");
const description = defineInputBinds("description");

//AddingListActors
let AddingListActors = (value) => {
  console.log("AddingListActors = ", value);
  actors.value = value;
};
// handel submit
let onSubmit = handleSubmit((values) => {
  //setAddMovie dispatch
  store.dispatch("setAddMovie", {
    id: MoviesList.value.length + 1, //a rendom number to make id
    title: values.title, //title of movie
    year: values.year, //year of movie
    description: values.description ? values.description : "", //year of movie
    actors: actors.value, //actors of movie
  });
  router.push("/");
});
</script>
<!--template-->
<template>
  <form @submit.prevent="onSubmit">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <label for="exampleInputEmail1"
            >title<span class="start"></span
          ></label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Enter title"
            required
            v-bind="title"
            :class="{ 'is-invalid': errors.title }"
          />

          <div class="invalid-feedback">{{ errors.title }}</div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <label for="exampleInputEmail1"
            >Year<span class="start"></span
          ></label>
          <input
            type="text"
            class="form-control"
            id="Year"
            placeholder="Enter Year"
            required
            v-bind="year"
            :class="{ 'is-invalid': errors.year }"
          />

          <div class="invalid-feedback">{{ errors.year }}</div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="form-group">
          <label for="exampleInputPassword1">Description</label>
          <textarea
            class="form-control"
            rows="5"
            v-bind="description"
          ></textarea>
        </div>
      </div>
      <div class="col-lg-12">
        <AddActors @AddingListActors="AddingListActors" />
      </div>
      <div class="col-lg-12 mt-2 mb-5">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </form>
</template>

<!--style-->
<style scoped lang="scss">
form {
  width: 70%;
  .form-group {
    margin-bottom: 20px;
    label {
      margin-bottom: 5px;
    }
  }
  button.add::before {
    content: "+";
  }
}
</style>
