<template>
    <div>
      <h2>Create/Edit Location</h2>
      <form @submit.prevent="handleSubmit">
        <label for="locationName">Location Name:</label>
        <input v-model="locationName" id="locationName" type="text" required />
  
        <button type="submit">Save Location</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        locationName: '',
      };
    },
    methods: {
      handleSubmit() {
        const locationData = {
          name: this.locationName,
        };
  
        // Call a method to handle the submission (e.g., emit an event to the parent component)
        this.$emit('submit', locationData);
  
        // Clear form fields after submission
        this.locationName = '';
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  