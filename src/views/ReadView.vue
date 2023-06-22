<template>
  <h1>日記一覧</h1>
  <div class="views">
    <div class="posts" v-for="(post, index) in posts" :key="index">
      ーーーーーーーーーーーーーーーーーーーーーーーーーーー<br />
      <h3>
        日付：{{ post.year }}年{{ post.month }}月{{ post.date }}日（{{
          post.youbi
        }}） 点数：{{ post.point }}
      </h3>
      <h4>テーマ：{{ post.theme }}</h4>
      <h4>天気：{{ post.weather }}</h4>
      <h3>詳細・感想</h3>
      <br />
      {{ post.content }}
      <h4>作成日時：{{ post.createdAt }}</h4>
      <button v-on:click="deletePost(index)">削除</button><br />
      ーーーーーーーーーーーーーーーーーーーーーーーーーーー
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: localStorage.posts,
    }
  },
  mounted() {
    this.posts = JSON.parse(localStorage.getItem("posts"))
  },
  methods: {
    deletePost(index) {
      this.posts.splice(index, 1)
      localStorage.setItem(
        "posts", //これがキー
        JSON.stringify(this.posts)
      )
    },
  },
}
</script>

<style>
.views {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  border: 1px solid #999;
  padding: 5px;
  background-color: palegoldenrod;
}
.posts {
  border-color: 2px palegoldenrod;
  border: 5px;
  text-align: center;
  width: 33%;
  background-color: lavenderblush;
  margin: 0 auto;
  padding-bottom: 1px;
}
</style>
