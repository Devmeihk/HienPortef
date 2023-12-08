<template>
    <section class="projects">
      <h2>Selected projects</h2>
      <div class="project-list">
        <!-- Loop through projects using v-for if projects are dynamic -->
        <div class="project-item" v-for="project in projects" :key="project.id">
          <!-- Project content goes here -->
        </div>
      </div>
      <button>Show more</button>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ProjectsComponent',
    data() {
      return {
        projects: [] // Populate with project data
      }
    }
  }
  </script>
  
  <style scoped>
  /* Styles specific to projects section */
  </style>
  