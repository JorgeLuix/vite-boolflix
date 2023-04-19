<template>
    <div>
      <div class="row">
        <div class="col-md-4" v-for="movie in movies" :key="movie.id">
          <div class="card mb-3">
            <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">{{ movie.title }}</h5>
             <!-- <p class="card-text">{{ movie.overview }}</p>-->
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
  import HeaderComponent from './HeaderComponent.vue'
 
  export default {
    components: {
        HeaderComponent
    },
    name: 'MoviesComponent',
    props: {
    movies: Array
  },
   
  }
</script>
<style lang="">
</style>