<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Gürmen Teknoloji</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active">
            Home
          </router-link>
        </li>
        <li class="nav-item" >
          <router-link to="/about" class="nav-link" active-class="active">
            About
          </router-link>
        </li>
        <li class="nav-item" >
          <router-link to="/details/123" class="nav-link" active-class="active">
            Details
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
  
  <router-view></router-view>

</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>
