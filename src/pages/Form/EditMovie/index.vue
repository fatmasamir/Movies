<!--script-->
<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { useForm } from "vee-validate";
import AddActors from "../AddActors/index.vue";
import * as Yup from "yup";

//store
const store = useStore();

//route
const route = useRoute();
//route
const router = useRouter();

//id
const id = route.params.id;

//ListActors
const actors = ref([]);

// emit
let props = defineProps(["MovieDetailes"]);

// meta
const { meta } = useForm();

// formLogin
const { errors, handleSubmit, defineInputBinds } = useForm({
  validationSchema: Yup.object({
    title: Yup.string().required("the title required Filed"),
    year: Yup.number().required("the year required Filed"),
    description: Yup.string(),
  }),
  initialValues: {
    title: props.MovieDetailes.title,
    year: props.MovieDetailes.year,
    description: props.MovieDetailes.description,
  },
});

//title ,year,description
const title = defineInputBinds("title");
const year = defineInputBinds("year");
const description = defineInputBinds("description");

//AddingListActors
let AddingListActors = (value) => {
  actors.value = value;
};
// handel submit
let onSubmit = handleSubmit((values) => {
  //setEditMovie dispatch
  store.dispatch("setEditMovie", {
    id: props.MovieDetailes.id, //a rendom number to make id
    title: values.title, //title of movie
    year: values.year, //year of movie
    description: values.description ? values.description : "", //year of movie
    actors: actors.value, //actors of movie
  });
  router.push("/");
});
onMounted(() => {
  if (props.MovieDetailes && props.MovieDetailes.actors.length != 0) {
    actors.value = props.MovieDetailes.actors;
  }
});
</script>
<!--template-->
<template>
  <form @submit.prevent="onSubmit" v-if="props.MovieDetailes.length != 0">
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
            :placeholder="MovieDetailes.title"
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
        <AddActors
          @AddingListActors="AddingListActors"
          :Oldactors="MovieDetailes.actors"
        />
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
