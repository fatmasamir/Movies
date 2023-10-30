<script setup>
import Navbar from "@/components/global/Navbar/index.vue";
</script>

<template>
  <!--Navbar-->
  <Navbar />
  <!--container-->
  <div class="container mt-5">
    <!--router view-->
    <router-view> </router-view>
  </div>
</template>
