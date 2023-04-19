<template>
  <div>
    <HeaderComponent @search="searchMovies"></HeaderComponent>
    <MoviesComponent :movies="movies"></MoviesComponent>
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
      movies: []
    }
  },
  methods: {
    searchMovies(query) {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ae758d764b49bd80a077b2774e344530&language=en-US&query=${query}`)
        .then(response => {
          this.movies = response.data.results
        })
        .catch(error => console.log(error))
    }
  }
}
</script>

<style lang="scss" scoped>

</style>