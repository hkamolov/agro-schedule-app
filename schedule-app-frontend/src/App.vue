<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<!-- App.vue -->

<template>
  <div id="app">
    <h1>My Schedule App</h1>
    
    <!-- Event Section -->
    <section>
      <h2>Events</h2>
      <EventList :events="events" @edit="editEvent" @delete="deleteEvent" />
      <EventForm @submit="createOrUpdateEvent" />
    </section>

    <!-- Location Section -->
    <section>
      <h2>Locations</h2>
      <LocationList :locations="locations" @edit="editLocation" @delete="deleteLocation" />
      <LocationForm @submit="createOrUpdateLocation" />
    </section>
  </div>
</template>

<script>
import EventList from './components/EventList.vue';
import EventForm from './components/EventForm.vue';
import LocationList from './components/LocationList.vue';
import LocationForm from './components/LocationForm.vue';

export default {
  components: {
    EventList,
    EventForm,
    LocationList,
    LocationForm,
  },
  data() {
    return {
      // Sample data; replace with actual data from your Vuex store or API calls
      events: [
        { id: 1, name: 'Event 1', startDate: '2022-01-01', endDate: '2022-01-02' },
        // Add more events as needed
      ],
      locations: [
        { id: 1, name: 'Location 1' },
        // Add more locations as needed
      ],
    };
  },
  methods: {
    // Your methods for handling events, locations, CRUD operations, etc.
    createOrUpdateEvent(eventData) {
      // Implement logic to create or update an event
      console.log('Create or update event:', eventData);
    },
    editEvent(eventId) {
      // Implement logic to edit an event
      console.log('Edit event with ID:', eventId);
    },
    deleteEvent(eventId) {
      // Implement logic to delete an event
      console.log('Delete event with ID:', eventId);
    },
    createOrUpdateLocation(locationData) {
      // Implement logic to create or update a location
      console.log('Create or update location:', locationData);
    },
    editLocation(locationId) {
      // Implement logic to edit a location
      console.log('Edit location with ID:', locationId);
    },
    deleteLocation(locationId) {
      // Implement logic to delete a location
      console.log('Delete location with ID:', locationId);
    },
  },
};
</script>

<style>
/* Your styles if needed */
</style>


<script>
import EventList from './components/EventList.vue';
import EventForm from './components/EventForm.vue';
import LocationList from './components/LocationList.vue';
import LocationForm from './components/LocationForm.vue';

export default {
  components: {
    EventList,
    EventForm,
    LocationList,
    LocationForm,
  },
  data() {
    return {
      // Your data properties (e.g., events, locations)
      events: [],
      locations: [],
    };
  },
  methods: {
    // Your methods for handling events, locations, CRUD operations, etc.
  },
};
</script>

<style>
/* Your styles if needed */
</style>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
