<!--script-->
<script setup>
import { computed, ref, defineProps, onMounted } from "vue";
import { useStore } from "vuex";
import { useForm } from "vee-validate";
import * as Yup from "yup";
import { defineEmits } from "vue";
import { toast } from "vue3-toastify";
import tableActores from "../../../components/pages/Form/AddActors/Table.vue";

// props
let props = defineProps(["Oldactors"]);

//emits
const emits = defineEmits(["AddingListActors"]);

//store
const store = useStore();

//ListActors
const ListActors = ref([]);

//RolesActor from store
const RolesActor = computed(() => store.getters.getRolesActor);

// meta
const { meta } = useForm();

// form
const { errors, handleSubmit, defineInputBinds } = useForm({
  validationSchema: Yup.object({
    name: Yup.string().required("the name required Filed"),
    age: Yup.number().required("the name age Filed"),
    join_date: Yup.string().required("the name date Filed"),
    role: Yup.string().required("the role date Filed"),
  }),
});

//name ,age,date ,role
const name = defineInputBinds("name");
const age = defineInputBinds("age");
const join_date = defineInputBinds("join_date");
const role = defineInputBinds("role");

// handel submit
let onSubmit = handleSubmit((values) => {
  if (values) {
    //add object value form in array ListActors
    ListActors.value.push({
      id: ListActors.value.length + 1, //a rendom number to make id
      name: values.name, //a name actor
      age: values.age, //a age actor
      join_date: values.join_date, //a join_date actor
      role: values.role, //a role actor
    });
    emits("AddingListActors", ListActors.value);
    resetData();
  }
});
//emit Delete Table Item Have id
const openDeleteFun = (id) => {
  ListActors.value = ListActors.value.filter((e) => e.id !== id);
  emits("AddingListActors", ListActors.value);
  toast.success("successfly ....");
};

//AddEditActor value
const AddEditActor = (actorObj) => {
  const index = ListActors.value.findIndex((e) => e.id === actorObj.id);
  ListActors.value.splice(index, 1, actorObj);
  toast.success("successfly ....");
};

//onMounted
onMounted(() => {
  if (props.Oldactors && props.Oldactors.length != 0) {
    ListActors.value = props.Oldactors;
  }
});
</script>
<!--template-->
<template>
  <div class="blockActors mt-3">
    <form @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-lg-12">
          <h4>Add Actors</h4>
        </div>
        <div class="col-lg-3">
          <div class="form-group">
            <label for="exampleInputEmail1"
              >name actor <span class="start"></span
            ></label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter name actor"
              required
              v-bind="name"
              :class="{ 'is-invalid': errors.name }"
            />

            <div class="invalid-feedback">{{ errors.name }}</div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="form-group">
            <label for="exampleInputEmail1"
              >age actor <span class="start"></span
            ></label>
            <input
              type="text"
              class="form-control"
              id="age"
              placeholder="Enter age actor"
              required
              v-bind="age"
              :class="{ 'is-invalid': errors.age }"
            />

            <div class="invalid-feedback">{{ errors.age }}</div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="form-group">
            <label for="exampleInputEmail1">
              join date<span class="start"></span>
            </label>
            <input
              type="date"
              class="form-control"
              id="join_date"
              placeholder="Enter join date"
              v-bind="join_date"
              :class="{ 'is-invalid': errors.join_date }"
            />

            <div class="invalid-feedback">{{ errors.join_date }}</div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="form-group">
            <label for="exampleInputEmail1">
              Role actor<span class="start"></span
            ></label>
            <select
              class="form-control"
              v-bind="role"
              :class="{ 'is-invalid': errors.role }"
            >
              <option
                v-for="(role, index) in RolesActor"
                :key="index"
                :value="index"
              >
                {{ role }}
              </option>
            </select>

            <div class="invalid-feedback">{{ errors.role }}</div>
          </div>
        </div>
        <div class="col-lg-3">
          <button class="btn btn-success add">Add Actor</button>
        </div>
        <div class="col-lg-12 mt-3" v-if="ListActors.length != 0">
          <tableActores
            :ListActors="ListActors"
            :RolesActor="RolesActor"
            @openDeleteFun="openDeleteFun"
            @AddEditActor="AddEditActor"
          ></tableActores>
        </div>
      </div>
    </form>
  </div>
</template>
<!--style-->
<style scoped lang="scss">
form {
  width: 100%;
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
