<template>
  <div class="title text-titleColor flex items-center content-center pb-[2rem]">
    <h1>Pixabay Stock</h1>
  </div> 
   <div class="content items-center">
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



