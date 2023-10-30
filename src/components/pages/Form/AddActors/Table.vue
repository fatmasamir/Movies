<!--script-->
<script setup>
import { defineProps, ref } from "vue";
import ModuleEdite from "./ModuleEdite.vue";
import { defineEmits } from "vue";

// props
let props = defineProps(["ListActors", "RolesActor"]);

//emits
const emits = defineEmits(["openDeleteFun", "AddEditActor"]);

//EditList value
const EditList = ref();

//EditModel value
let EditModel = ref(false);

//openEditFun value
const openEditFun = (list) => {
  EditModel.value = true;
  EditList.value = list;
};

//EndEditFun value
const EndEditFun = () => {
  EditModel.value = false;
  EditList.value = null;
};
//EditActor value
const EditActor = (actorObj) => {
  console.log("actorObj =", actorObj);
  emits("AddEditActor", actorObj);
  EndEditFun();
};
//DeleteId value
const openDeleteFun = (id) => {
  emits("openDeleteFun", id);
};
</script>
<!--template-->
<template>
  <table class="table table-hover table-sm" v-if="props.ListActors.length != 0">
    <thead>
      <tr>
        <th>#</th>
        <th>name</th>
        <th>age</th>
        <th>join date</th>
        <th>role</th>
        <th>control</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="ListActor in props.ListActors" :key="ListActor">
        <td>{{ ListActor.id }}</td>
        <td>{{ ListActor.name }}</td>
        <td>{{ ListActor.age }}</td>
        <td>{{ ListActor.join_date }}</td>
        <td>{{ props.RolesActor[ListActor.role] }}</td>
        <td>
          <!--controlList icons -->
          <ul class="controlList">
            <li class="edit">
              <!--edit-movie -->
              <a @click="openEditFun(ListActor)">
                <BootstrapIcon icon="pencil-square" />
              </a>
            </li>
            <li class="delete">
              <!--delete-movie -->
              <button
                type="button"
                class="btn"
                @click="openDeleteFun(ListActor.id)"
              >
                <BootstrapIcon icon="trash-fill" />
              </button>
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
  <div v-if="EditModel">
    <!--delete model -->
    <ModuleEdite
      @EndEditFun="EndEditFun"
      @EditActor="EditActor"
      :EditList="EditList"
    />
  </div>
</template>
<!--style-->
<style scoped lang="scss">
table {
  width: 100%;
  margin: 3% auto;
  // th,td
  th,
  td {
    text-align: center;
    vertical-align: middle;
  }
}
</style>
