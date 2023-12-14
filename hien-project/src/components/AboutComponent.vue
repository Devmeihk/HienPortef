<template>
    <div class="about-container">
      <div class="about-content">
        <div class="left-column">
          <!-- Image goes here -->
          <img src="../assets/hien.png" alt="About Image" />
        </div>
        <div class="right-column">
          <h2>A few words about me</h2>
          <p><!-- Brief introduction -->
          Hei på deg din gamle sei
          </p>
          <button>Read more</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutComponent'
  }
  </script>
  
  
<style scoped>
.about-container {
  display: flex; /* This enables flexbox */
  align-items: center; /* Align items vertically */
  justify-content: center; /* Center the content horizontally */
  min-height: 400px; /* Or whatever height you want for your banner */
  background-color: #fff; /* Just an example background color */
}

.about-content {
  display: flex;
  width: 100%; /* This ensures the banner content stretches to the container width */
  max-width: 1200px; /* Maximum width of the content, you can adjust this */
  margin: 0 auto; /* This centers the banner content horizontally */
}

.left-column, .right-column {
  flex: 1; /* This makes both columns equal width */
  padding: 20px; /* Add some spacing around the content */
}

.left-column {
  /* Styles specific to the left column */
  display: flex;
  justify-content: center; /* Center the image horizontally */
  align-items: center; /* Center the image vertically */
}

.right-column {
  /* Styles specific to the right column */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.right-column button{
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.left-column img {
  max-width: 100%; /* Make sure the image is responsive and doesn't overflow */
  height: auto; /* Maintain the aspect ratio */
}
</style>
  