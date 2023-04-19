import { reactive } from 'vue';

export const store = reactive ({
    
    urlCards:'https://api.themoviedb.org/3/search/movie',
    api_key:'ae758d764b49bd80a077b2774e344530',
    language:'en-US',
    query:'searchTerm',

    searchMovies() {
        axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: 'ae758d764b49bd80a077b2774e344530',
            language: 'en-US',
            query: this.searchTerm
          }
        }).then(response => {
          this.movies = response.data.results
          this.$emit('movies-updated', this.movies)
        })
      }
    
})