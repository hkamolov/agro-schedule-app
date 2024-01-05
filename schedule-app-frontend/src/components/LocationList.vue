<template>
    <div>
      <h2>Location List</h2>
      <ul>
        <li v-for="location in locations" :key="location.id">
          {{ location.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      locations: Array,
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  