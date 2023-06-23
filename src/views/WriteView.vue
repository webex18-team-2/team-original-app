<template>
  <div class="a">
    <h2>新規入力画面</h2>
  </div>
  <div class="syousai">
    <div class="honbun_igai">
      <div class="month_and_theme_and_weather">
        <h4>
          日付：
          <input type="number" v-model="year" placeholder="西暦で" />
          年
          <select name="month" v-model="month">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option></select
          >月
          <select name="day" v-model="date">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
          日
          <select name="youbi" v-model="youbi">
            <option value="日">日</option>
            <option value="月">月</option>
            <option value="火">火</option>
            <option value="水">水</option>
            <option value="木">木</option>
            <option value="金">金</option>
            <option value="土">土</option>
          </select>
          曜日
        </h4>
        <h4>
          テーマ：<input
            type="text"
            v-model="theme"
            placeholder="テーマ（？）"
          />
        </h4>
        <h4>
          天気：<select name="weather" v-model="weather" placeholder="天気">
            <option value="晴れ">晴れ</option>
            <option value="くもり">くもり</option>
            <option value="雨">雨</option>
            <option value="雷雨">雷雨</option>
            <option value="不明">不明</option>
          </select>
        </h4>
      </div>
      <div class="score">
        <h3>
          点数：<input
            class="point"
            v-model="point"
            type="number"
            min="0"
            max="100"
            style="font-size: 50px"
          />
        </h3>
      </div>
    </div>
    <h4>詳細・感想</h4>
    <textarea
      class="honbun"
      v-model="post"
      placeholder="今日一日どうでしたか？"
    />
    <div class="form_button">
      <button
        type="submit"
        v-bind:disabled="Active"
        id="button"
        v-on:click="Post"
        class="form_submit-button"
      >
        作成
      </button>
    </div>
  </div>
  <div class="guide">
    <h2>最近書いた日記（更新すると消える）</h2>
  </div>
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
      year: "",
      month: "",
      date: "",
      youbi: "",
      theme: "",
      weather: "",
      point: "",
      content: "",
      createdAt: "",
      post: "",
      posts: [],
    }
  },
  mounted() {
    this.posts = JSON.parse(localStorage.getItem("posts"))
  },
  methods: {
    Post() {
      this.posts.push({
        year: this.year,
        month: this.month,
        date: this.date,
        youbi: this.youbi,
        dateForSort: new Date(this.year + "-" + this.month + "-" + this.date),
        theme: this.theme,
        weather: this.weather,
        point: this.point,
        content: this.post,
        createdAt: new Date(),
      })
      this.posts.sort(function (a, b) {
        return a.dateForSort > b.dateForSort ? -1 : 1
      })
      localStorage.setItem("posts", JSON.stringify(this.posts))
    },
    deletePost(index) {
      this.posts.splice(index, 1)
      localStorage.setItem(
        "posts", //これがキー
        JSON.stringify(this.posts)
      )
    },
  },
  computed: {
    Active() {
      if (
        this.year === "" ||
        this.month === "" ||
        this.date === "" ||
        this.theme === "" ||
        this.weather === "" ||
        this.point === "" ||
        this.post === ""
      ) {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<style>
.guide {
  text-align: center;
}
.a {
  text-align: center;
}
.point {
  width: 120px;
  height: 120px;
}
.honbun_igai {
  display: flex;
  justify-content: center;
}
.month_and_theme_and_weather {
  text-align: left;
}
.honbun {
  width: 40%;
  height: 300%;
  padding: 0.5rem;
  line-height: 1.3rem;
  border-radius: 5px;
  resize: none;
}
.syousai {
  padding: 5px;
  background-color: khaki;
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 5px;
  border-color: brown;
}
.views {
  text-align: center;
  justify-content: center;
}
.posts {
  justify-content: center;
  text-align: center;
  width: 50%;
  background-color: lavenderblush;
  border: 5px;
  margin: 0 auto;
}
</style>
