<template>
    
      <div class="search">
        <input type="text" v-model="query" placeholder="Rechercher des images...">
        <button @click="searchImages">Rechercher</button>
      </div>
      <div class="images">
        <div class="img_content" v-for="image in images" :key="image.id">
          <img :src="image.webformatURL" :alt="image.tags">
        </div>
      </div>
    

  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        images: [],
        query: '',
      };
    },
    methods: {
      async searchImages() {
        const response = await axios.get('https://pixabay.com/api/', {
          params: {
            key: '35538166-b5b2a606f1ae0d3c6f6c76632',
            q: this.query,
            image_type: 'photo',
            pretty: true,
          },
        });
        this.images = response.data.hits;
      },
    },
  };
  </script>

