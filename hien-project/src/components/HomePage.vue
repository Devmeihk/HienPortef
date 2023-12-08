<template>
    <div id="home-page">
    <!-- <h1>{{ msg }}</h1> -->
      <HeaderComponent/>
      <BannerComponent />
      <!-- <AboutComponent />
      <ProjectsComponent />
      <CvComponent />
      <ContactComponent />
      <FooterComponent /> -->
    </div>
  </template>
  
  <script>
  import HeaderComponent from './HeaderComponent.vue'
  import BannerComponent from './BannerComponent.vue'
  /* import AboutComponent from './AboutComponent.vue'
  import ProjectsComponent from './ProjectsComponent.vue'
  import CvComponent from './CvComponent.vue'
  import ContactComponent from './ContactComponent.vue'
  import FooterComponent from './FooterComponent.vue' */
  
  export default {
    name: 'HomePage',
    components: {
      HeaderComponent,
      BannerComponent,
      /* AboutComponent,
      ProjectsComponent,
      CvComponent,
      ContactComponent,
      FooterComponent */
    },
    props: {
    msg: String
  }
  }
  </script>
  
  <style>
  /* Global styles */
  </style>
  