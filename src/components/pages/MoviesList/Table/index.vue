<!--script-->
<script setup>
import { defineProps, ref } from "vue";
import delete_model from "../../../global/Models/DeleteModel/index.vue";

//props MoviesList
const props = defineProps(["MoviesList"]);

//DeleteId value
const DeleteId = ref();

//DeleteModel value
let DeleteModel = ref(false);

//DeleteId value
const openDeleteFun = (id) => {
  DeleteModel.value = true;
  DeleteId.value = id;
};

//DeleteId value
const EndDeleteId = () => {
  DeleteModel.value = false;
  DeleteId.value = null;
};
</script>
<!--template-->
<template>
  <!--table data -->
  <div class="table-responsive">
    <table class="table table-hover table-sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Year</th>
          <th>Actors</th>
          <th>Control</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="Movie in props.MoviesList" :key="Movie.id">
          <td>{{ Movie.id }}</td>
          <td>{{ Movie.title }}</td>
          <td>{{ Movie.year }}</td>
          <td>
            {{ Movie.actors.length }}
          </td>
          <td>
            <!--controlList icons -->
            <ul class="controlList">
              <li class="view">
                <!--view-movie -->
                <router-link :to="'/view-movie/' + Movie.id"
                  ><BootstrapIcon icon="eye"
                /></router-link>
              </li>
              <li class="edit">
                <!--edit-movie -->
                <router-link :to="'/edit-movie/' + Movie.id">
                  <BootstrapIcon icon="pencil-square"
                /></router-link>
              </li>
              <li class="delete">
                <!--delete-movie -->
                <button
                  type="button"
                  class="btn"
                  @click="openDeleteFun(Movie.id)"
                >
                  <BootstrapIcon icon="trash-fill" />
                </button>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="DeleteModel">
    <!--delete model -->
    <delete_model :DeleteId="DeleteId" @EndDeleteId="EndDeleteId" />
  </div>
</template>

<!--style-->
<style lang="scss" scoped>
//table-responsive
.table-responsive {
  //table
  .table {
    width: 100%;
    margin: 3% auto;
    // th,td
    th,
    td {
      text-align: center;
      vertical-align: middle;
    }
  }
}
</style>
