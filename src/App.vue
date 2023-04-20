<template>
  <div>
    <HeaderComponent @search="searchMovies"/>
    <MoviesComponent :movies="movies"/>
    <TvShowsComponent />

  </div>
</template>

<script>
import axios from 'axios'
import HeaderComponent from './components/HeaderComponent.vue';
import MoviesComponent from './components/MoviesComponent.vue';
import TvShowsComponent from './components/TvShowsComponent.vue'
  export default {
    name: 'App',
    components: { HeaderComponent, MoviesComponent, TvShowsComponent },
    data() {
    return {
      movies: [],
      tvShows: []
    }
    
  },
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

      //axios.get('https://api.themoviedb.org/3/search/tv', { // chiamata per showTv
       // params: {
         //// api_key: 'ae758d764b49bd80a077b2774e344530',
         // language: 'en-US',
          //query: query
        //}
      //}).then(response => {
        //this.movies = this.movies.concat(response.data.results);
     // }).catch(error => {
       // console.log(error);
    //  });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>