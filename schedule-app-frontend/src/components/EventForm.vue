<template>
    <div>
      <h2>Create/Edit Event</h2>
      <form @submit.prevent="handleSubmit">
        <label for="eventName">Event Name:</label>
        <input v-model="eventName" id="eventName" type="text" required />
  
        <label for="startDate">Start Date:</label>
        <input v-model="startDate" id="startDate" type="datetime-local" required />
  
        <label for="endDate">End Date:</label>
        <input v-model="endDate" id="endDate" type="datetime-local" required />
  
        <button type="submit">Save Event</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        eventName: '',
        startDate: '',
        endDate: '',
      };
    },
    methods: {
      handleSubmit() {
        const eventData = {
          name: this.eventName,
          startDate: this.startDate,
          endDate: this.endDate,
        };
  
        // Call a method to handle the submission (e.g., emit an event to the parent component)
        this.$emit('submit', eventData);
  
        // Clear form fields after submission
        this.eventName = '';
        this.startDate = '';
        this.endDate = '';
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  