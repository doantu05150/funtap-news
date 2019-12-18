<template>
  <div class="container">
    <b-col>
      <div>
        our home page
      </div>
      <div>
        <router-link to="/sercet">go to sercet page</router-link>
      </div>
      <div>
        <router-link to="/ho-tro">go to news - funtap</router-link>
      </div>
    </b-col>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
