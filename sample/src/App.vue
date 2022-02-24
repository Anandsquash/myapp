<template>
  <!-- <router-link to="form2">Form2</router-link>
  <router-link to="form3">Form3</router-link> -->
  <div class="sidenav">
      <span>Gate Wears</span>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#clients">Clients</a>
    <a href="#contact">Contact</a>
</div>
  <router-view/>
</template>

<style >
/* @import "/assets/styles/style.scss"; */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
