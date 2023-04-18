<template>
    
      <div class="search flex content-center items-center pb-[25px]">
        <input class=" border rounded-[10px] border-solid w-[300px] h-[40px] p-[10px] mr-[20px] border-borderColor" type="text" v-model="query" placeholder="Rechercher des images...">
        <button class="border border-solid bg-button text-textColor hover:bg-hover border-borderColor " @click="searchImages">Rechercher</button>
      </div>
      <div class="images grid grid-cols-3 gap-[10px] pt-[50px]">
        <div class="img_content col-span-1" v-for="image in images" :key="image.id">
          <img  :src="image.webformatURL" :alt="image.tags">
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

