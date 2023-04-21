<template>
  <div>
   <!--<video ref="video" width="100%" height="100%" autoplay>
      <source src="/src/assets/video/boolflix.mp4" type="video/mp4">
    </video>-->
    <div ref="app" class="app" style="display:">
    <HeaderComponent @search="searchMovies"/>
    <MoviesComponent :movies="movies"/>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import HeaderComponent from './components/HeaderComponent.vue';
import MoviesComponent from './components/MoviesComponent.vue';

  export default {
    name: 'App',
    components: { HeaderComponent, MoviesComponent },
    data() {
    return {
      movies: [],
      
    }
  },
 /* mounted() {
    const video = this.$refs.video;
    const app = this.$refs.app;
    video.addEventListener('ended', () => {
      video.style.display = 'none';
      app.style.display = 'block';
      
    });
  },*/
  methods: {
      searchMovies(query) {
        axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: 'ae758d764b49bd80a077b2774e344530',
            language: 'en-US',
            query: query
          }
        }).then(response => {
          this.movies = response.data.results;
        }).catch(error => {
          console.log(error);
        });
  
        axios.get('https://api.themoviedb.org/3/search/tv', { // chiamata per showTv
          params: {
            api_key: 'ae758d764b49bd80a077b2774e344530',
            language: 'en-US',
            query: query
          }
        }).then(response => {
          this.movies = this.movies.concat(response.data.results);
        }).catch(error => {
          console.log(error);
        });
      },
    }
  }

</script>

<style lang="scss" scoped>
/*.video {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}
.app {
      width: 100%;
      height: 100%;
      //background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }*/
</style>