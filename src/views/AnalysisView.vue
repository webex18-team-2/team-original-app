<template>
  <div class="analysis">
    <h2>直近7日</h2>
    <div class="7data" v-for="posts of weekChart" :key="posts"></div>
    <h2>直近30日</h2>
    <div class="30data" v-for="posts of monthChart" :key="posts"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: localStorage.getItem("posts"),
    }
  },
  mounted() {
    this.posts = JSON.parse(localStorage.getItem("posts"))
    this.posts.sort(function (c, d) {
      return c.point > d.point ? -1 : 1
    })
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    weekChart() {
      //return this.posts.slice(0, 7)
    },
    // eslint-disable-next-line vue/return-in-computed-property
    monthChart() {
      //return this.post.slice(0, 30)
    },
  },
}
</script>
