<template>
  <div>
    <div class="d-flex pagination">
      <nuxt-link to="#" class="paging">&lt; Previous</nuxt-link>
      <div v-for="(item, index) in computedPagination" :key="`page${index}`">
        <div @click="changeCurrentPage" class="paging">
          <nuxt-link to="#">{{ item === null ? '...' : item }}</nuxt-link>
        </div>
        <!-- <div v-else class="paging">{{ index }}</div> -->
      </div>
      <nuxt-link to="#" class="paging">Next ></nuxt-link>
      <p class="mr-4">{{ currentPage }}</p>
      <p>{{ numberOfPage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      newPage: 1,
      numberOfPage: 8,
      paginationArray: [],
    }
  },
  computed: {
    computedPagination() {
      const cp = this.currentPage
      const nop = this.numberOfPage
      let pa = this.paginationArray
      const rangeOfPaginaion = 5
      if (nop > rangeOfPaginaion) {
        if (cp <= 3) {
          pa = this.paginationStart()
        } else if (cp >= nop - 2) {
          if (this.checkDir(this.paginationArray) > 0) {
            pa = this.paginationMiddle(cp)
          } else {
            pa = this.paginationEnd(nop)
          }
        } else {
          pa = this.paginationMiddle(cp)
        }
      }
      return pa
    },
  },
  methods: {
    changeCurrentPage(e) {
      const np = parseInt(e.target.text)
      this.currentPage = np
    },
    paginationStart() {
      const pa = []
      for (let i = 0; i < 4; i++) {
        pa.push(i + 1)
      }
      pa.push(null)
      return pa
    },
    paginationEnd(nop) {
      const pa = []
      pa.push(null)
      for (let i = nop - 3; i <= nop; i++) {
        pa.push(i + 1)
      }
      return pa
    },
    paginationMiddle(cp) {
      const pa = []
      pa.push(null)
      pa.push(cp - 1)
      pa.push(cp)
      pa.push(cp + 1)
      pa.push(null)
      return pa
    },
    checkDir(arr) {
      if (!arr[arr.length - 1]) {
        return 0
      } else {
        return 1
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.pagination
  font-family 'Roboto', sans-serif
  font-size 12px
  float right
  margin-top 10px
  .paging
    margin-left 32px
    color #000
  .page-current
    font-weight bold
</style>
