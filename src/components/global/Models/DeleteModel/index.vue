<script setup>
import { defineProps, ref, defineEmits } from "vue";
import { useStore } from "vuex";

//props
const props = defineProps(["DeleteId"]);

//emits
const emits = defineEmits(["EndDeleteId"]);

//store
const store = useStore();

//store
const Loading = ref(false);

//Closefun
const Closefun = () => {
  emits("EndDeleteId");
};
const DeleteFun = async () => {
  Loading.value = true;
  await store.dispatch("setDeleteMovie", props.DeleteId).then(() => {
    Loading.value = false;
    Closefun();
  });
};
</script>
<template>
  <!-- Modal -->
  <div class="delete_popup">
    <div class="content">
      <p>You Want Delete THis Movie Realy ?</p>
      <div class="buttons mb-3">
        <button
          type="button"
          class="btn btn-secondary"
          data-dismiss="modal"
          @click="Closefun"
        >
          Close
        </button>
        <button type="button " class="btn btn-danger" @click="DeleteFun">
          <span v-if="!Loading">Delete</span>
          <span v-else>loading ...</span>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.delete_popup {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 999;
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
  p {
    color: rgb(255 96 96);
    margin: 50px auto;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }
  .buttons {
    button {
      width: 100px;
      margin-left: 10px;
    }
  }
}
</style>
