<template>
  <div class="banner-container">
    <div class="banner-content">
      <div class="left-column">
        <!-- Content for the left column goes here -->
        <h1>Welcome to My Portfolio</h1>
        <p>This is where I showcase my work and projects.</p>
        <button>Learn More</button>
      </div>
      <div class="right-column">
        <!-- Content for the right column goes here -->
        <!-- Assuming you might want to put an image or animation here -->
        <img src="../assets/green-plants.jpg" alt="Banner Image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerComponent',
  // You can add your script here if needed
};
</script>

<style scoped>
.banner-container {
  display: flex; /* This enables flexbox */
  align-items: center; /* Align items vertically */
  justify-content: center; /* Center the content horizontally */
  min-height: 400px; /* Or whatever height you want for your banner */
  background-color: #ffcb50; /* Just an example background color */
}

.banner-content {
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.left-column button{
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.right-column {
  /* Styles specific to the right column */
  display: flex;
  justify-content: center; /* Center the image horizontally */
  align-items: center; /* Center the image vertically */
}

.right-column img {
  max-width: 100%; /* Make sure the image is responsive and doesn't overflow */
  height: auto; /* Maintain the aspect ratio */
}
</style>
