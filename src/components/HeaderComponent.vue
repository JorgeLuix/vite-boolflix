<template>
    <header class="bg-black ">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand text-uppercase text-danger" href="#">boolflix</a>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
         </button>
        <div class="collapse navbar-collapse text-muted" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link text-white" href="#">Serie Tv</a>
            </li>
            <li class="nav-item">
            <a class="nav-link text-white" href="#">Film</a>
            </li>
            <li class="nav-item">
            <a class="nav-link text-white" href="#">Nuovi e popolari</a>
            </li>
            <li class="nav-item">
            <a class="nav-link text-white" href="#">La mia lista</a>
            </li>
            <li class="nav-item">
            <a class="nav-link text-white" href="#">Sfoglia per lingua</a>
            </li>
        </ul>
        <div class="d-flex" role="search">
            <input v-model="query" class="form-control me-2" type="search" 
            placeholder="Titolo,persona,generi" aria-label="Search" @keyup.enter="searchMovies">
        </div>
        <button @click="searchMovies" class="btn btn-success"
         type="submit">Cerca</button>
        </div>
      </div>
     </nav>
    </header>
</template>

<script>
    export default {
        name:'headerComponent',
        data() {
    return {
      query: '',
    }
  },
  methods: {
    searchMovies() {
      this.$emit('search', this.query)
    }
  }
        
    }
</script>

<style lang="scss" scoped>
header{
  width: 100%;
  position: fixed;
  z-index: 1000;

}
</style>