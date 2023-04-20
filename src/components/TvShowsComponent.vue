<template>
    <div class="tv-shows">
      <div class="tv-show" v-for="show in tvShows" :key="show.id" @mouseover="show.hover = true" @mouseleave="show.hover = false">
        <img :src="'https://image.tmdb.org/t/p/w500/' + show.poster_path" :alt="show.name">
        <div class="details" v-show="show.hover">
          <h3>{{ show.name }} Sonoshow</h3>
          <p class="overview">{{ show.overview }}</p>
          <p class="rating"><i class="fas fa-star"></i> {{ getRating(show.vote_average) }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'SeriesTv',
    props: ['searchTerm'],
    data() {
      return {
        tvShows: []
      }
    },
    created() {
      this.searchTvShows();
    },
    methods: {
      searchTvShows() {
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=ae758d764b49bd80a077b2774e344530&language=en-US&query=${this.searchTerm}`)
          .then(response => {
            this.tvShows = response.data.results.map(show => ({
              id: show.id,
              name: show.name,
              overview: show.overview,
              vote_average: show.vote_average,
              poster_path: show.poster_path,
              hover: false
            }));
          })
          .catch(error => {
            console.log(error);
          });
      },
      getRating(rating) {
        return rating ? rating.toFixed(1) : 'N/A';
      }
    }
  }
  </script>
  
  <style scoped>
  .tv-shows {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  .tv-show {
    position: relative;
    margin-right: 1rem;
    width: 300px;
    height: 450px;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.2s;
  }
  
  .tv-show:hover {
    transform: scale(1.05);
    z-index: 1;
  }
  
  .tv-show img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  }
  
  .tv-show:hover .details {
    transform: translateY(0);
  }
  
  .details h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }
  
  .overview {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .rating {
    margin-top: 0;
  }
  
  .rating i {
    color: #ffc107;
    margin-right: 0.5rem;
  }
  </style>