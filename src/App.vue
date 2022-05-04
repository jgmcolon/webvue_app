<script setup>
import {RouterLink, RouterView} from 'vue-router'</script>

<template>
  <b-nav card-header tabs>
    <b-nav-item>
      <RouterLink to="/">Home</RouterLink>
    </b-nav-item>
    <b-nav-item>
      <RouterLink to="/Permission/Item/">Add</RouterLink>
    </b-nav-item>
    <b-nav-item>
      <RouterLink to="/Permission/Index">Permissions</RouterLink>
    </b-nav-item>


  </b-nav>


  <RouterView/>
</template>

<style>


</style>
