<template>
  <section class="banner">
    <div class="banner-content">
      <h1>Welcome to My Portfolio</h1>
      <p>I'm a passionate developer with a knack for building web applications.</p>
      <button @click="scrollToWork">View My Work</button>
    </div>
    <div>
      <h1>HEI TEST</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BannerComponent',
  methods: {
    scrollToWork() {
      // If you're using Vue Router with history mode, you might use this.$router.push({ name: 'work' })
      // For simple anchor-based scrolling, the following line would suffice:
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh; /* Adjust the height of the banner as needed */
  background-image: url('../assets/green-plants.jpg'); /* Replace with your image path */
  background-size: cover;
  background-position: center;
  color: #fff;
}

.banner-content {
  text-align: center;
}

.banner h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.banner p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.banner button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #000;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.banner button:hover {
  background-color: #444;
}
</style>
