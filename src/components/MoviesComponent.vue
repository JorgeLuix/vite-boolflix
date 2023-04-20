<template>
    <div class="container">
      <div class="row">
        <div class=" col-12 col-sm-6 col-md-4 col-lg-2 margin g-1" v-for="movie in movies" :key="movie.id">
          <div class="card">
            <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">{{ movie.original_title }} sono movie</h5>
              <p class="card-text">{{ movie.title }}</p>
              <div class="d-flex justify-content-between">
                    <span class="card-text">{{ getRating(movie.vote_average) }} / 5</span>
                    <span class="card-text">
                    <i class="flag-icon flag-icon- {{ getFlag(movie.original_language) }}"></i>
                    {{ movie.original_language }}</span>
              </div>
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
        movies: {
        type: Array,
        default: () => []
      }
  },
  methods: {
      getRating(vote) {
        return Math.ceil(vote / 2)
      },
      getFlag(language) {
        const flags = {
          En: 'Us',
          Fr: 'Fr',
          Es: 'Es',
          De: 'De',
          It: 'It'
        }
        return flags[language] || 'unknown'
      }
    } 
  }
</script>
<style lang="scss" scoped>
.margin{
    margin-top: 80px;
}
</style>