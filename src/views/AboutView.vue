<template>
  <h1>日記一覧</h1>
  <div class="view">
    <h2>{{ this.posts }}</h2>
    <button v-on:click="test">表示</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    test() {
      for (let i = 0, length = localStorage.length; i < length; ++i) {
        console.log(localStorage.key(i));
        this.posts = localStorage.key(i);
      }
    },
  },
  mounted() {
    this.posts = JSON.parse(localStorage.getItem("key"));
  },
};
</script>

<style>
.posts {
  justify-content: center;
  text-align: center;
  width: 50%;
  background-color: lavenderblush;
  border: 5px;
  margin: 0 auto;
}
</style>
