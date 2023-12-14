<template>
  <header class="header-component">
    <div class="logo">
      <router-link to="/">HN</router-link>
    </div>
    <nav class="navigation">
      <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/cv">CV</router-link></li>
        <li class="contact"><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  // If you're using Vue Router, you can uncomment the code below
  
  methods: {
    navigateTo(section) {
      this.$router.push({ name: section });
    }
  }
 
}
</script>

<style scoped>
.header-component {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  color: #333;
}

.logo a {
  font-size: 1.5rem;
  color: #333;
  text-decoration: none;
}

.navigation ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  display: flex;
  justify-content: center;
  align-items: baseline;
}


.navigation a {
  color: #333;
  text-decoration: none;
}


.navigation a:hover {
  text-decoration: underline;
}

.navigation button:hover {
  text-decoration: underline;
  text-decoration-color: #fff;
}

.contact {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #fff;
  border: solid 2px black;
  border-radius: 60px;
  cursor: pointer;
}
</style>
