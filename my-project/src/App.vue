<template>
  <div class="title">
    <h1>Pixabay Stock</h1>
  </div> 
   <div class="content">
    <SearchImages></SearchImages>
  </div>
</template>

<script >
import SearchImages from './components/SearchImages.vue'

export default {
  components: {
    SearchImages,
  },
};
</script>



