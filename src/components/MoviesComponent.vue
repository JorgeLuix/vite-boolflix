<template>
    <div class="container">
      <div class="row">
        <h1 class="text-white">movies</h1>
        <div class="tv-shows col-12 col-sm-6 col-md-4 col-lg-2 margin g-1" v-for="movie in movies" :key="movie.id">
          <div class="card tv-show">
            <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" class="card-img-top">
            <div class="card-body details">
              <h6 class="card-title">{{ movie.original_title }}{{ movie.original_name }}</h6>
              <p class="card-text">{{ movie.title }}{{ movie.name }}</p>
              <p class="overview">{{ movie.overview }}</p>
              <div class="d-flex justify-content-between">
                    <span class="card-text">Voto: </span>
                    <i class="fa solid fa-star rating" v-for="(n, index) in 5" :key="index" 
                    :class="(n <= getRating(movie.vote_average) ? 'rating' : 'fa-regular' )" ></i>
                   
                   <!-- <img :src="'/public/flags/' + flags + '.png'" :alt="language">-->
                    <span class="card-text fi fi-{{ getFlag(movie.original_language) }}">
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
      
    },
    getFlag(language) {
        const flags = {
          en: 'us',
          fr: 'fr',
          es: 'es',
          de: 'de',
          it: 'it'
        }
        return flags[language] || 'unknown'
      }
    } 
  
</script>
<style lang="scss" scoped>
.margin{
    margin-top: 80px;
}
.tv-shows {
    display: flex;
    flex-wrap: nowrap;
   // overflow-x: auto;
   // -webkit-overflow-scrolling: touch;
  }
  
.tv-show {
    position: relative;
    margin-right: 1rem;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.2s;
  }
  
.tv-show:hover {
    transform: scale(1.05);
    z-index: 1;
  }
.details {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    transform: translateY(100%);
    transition: all 0.2s;
    height: 100%;
    
  }
  
.tv-show:hover .details {
    transform: translateY(0);
  }
.overview {
    font-size: 10px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    white-space: wrap;
    overflow:hidden
    //text-overflow: ellipsis;
  }
  
  
.rating {
    color: #ffc107;
    margin-right: 5px;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
  
</style>