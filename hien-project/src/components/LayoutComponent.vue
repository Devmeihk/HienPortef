<!-- LayoutComponent.vue -->
<template>
    <div>
      <HeaderComponent />
      <router-view />
    </div>
</template>
  
<script>
  import HeaderComponent from './HeaderComponent.vue';
  
  export default {
    components: {
      HeaderComponent
    }
  };
</script>
  