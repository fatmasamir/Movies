<!--script-->
<script setup>
import { defineProps, ref, defineEmits, computed } from "vue";
import { useForm } from "vee-validate";
import * as Yup from "yup";
import { useStore } from "vuex";

//props
const props = defineProps(["EditList"]);

//emits
const emits = defineEmits(["EndEditFun", "EditActor"]);

//store
const store = useStore();

//RolesActor from store
const RolesActor = computed(() => store.getters.getRolesActor);

// meta
const { meta } = useForm();

// form
const { errors, handleSubmit, defineInputBinds } = useForm({
  validationSchema: Yup.object({
    id: Yup.string().required("the name required Filed"),
    name: Yup.string().required("the name required Filed"),
    age: Yup.number().required("the name age Filed"),
    join_date: Yup.string().required("the name date Filed"),
    role: Yup.string().required("the role date Filed"),
  }),
  initialValues: {
    id: props.EditList.id,
    name: props.EditList.name,
    age: props.EditList.age,
    join_date: props.EditList.join_date,
    role: props.EditList.role,
  },
});

//name ,age,join_date,role
const name = defineInputBinds("name");
const age = defineInputBinds("age");
const join_date = defineInputBinds("join_date");
const role = defineInputBinds("role");

//Closefun
const Closefun = () => {
  emits("EndEditFun");
};

//onSubmit
let onSubmit = handleSubmit((values) => {
  console.log("values", values);
  emits("EditActor", values);
});
</script>
<!--template-->
<template>
  <!-- Modal -->
  <div class="update_popup">
    <div class="content">
      <form @submit.prevent="onSubmit">
        <div class="row">
          <div class="col-lg-6">
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
          <div class="col-lg-6">
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
          <div class="col-lg-6">
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
          <div class="col-lg-6">
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
          <div class="col-lg-12 buttons mt-3 mb-3">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="Closefun"
            >
              Close
            </button>
            <button type="submit" class="btn btn-success">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<!--style-->
<style scoped lang="scss">
.update_popup {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: #0000006b;
  .content {
    width: 40%;
    background: white;
    border-radius: 8px;
    margin: auto;
    margin-top: 10%;
    padding: 20px;
    text-align: center;
  }
  .buttons {
    button {
      width: 100px;
      margin-left: 10px;
    }
  }
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
}
</style>
