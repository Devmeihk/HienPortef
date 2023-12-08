<template>
  <header class="header-component">
    <div class="logo">
      Hien.
    </div>
    <nav class="navigation">
      <ul>
        <li><a href="#about">About me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#cv">CV</a></li>
        <li><b-button href="#contact">Contact</b-button></li>
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

.logo {
  font-size: 1.5rem;
}

.navigation ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.navigation a {
  color: #333;
  text-decoration: none;
}


.navigation a:hover {
  text-decoration: underline;
}

.navigation b-button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
