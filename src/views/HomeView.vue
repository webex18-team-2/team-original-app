<template>
  <div class="home">
    <div class="maincontainer">
      <div class="uranai">
        <img :src="uranai" alt="uranai" />

        <div class="Process">
          <div class="explain">
            <button @click="setsumei">説明</button>
          </div>
          <div class="attention">
            <button @click="attention">注意事項</button>
          </div>
          <div id="input">
            <div class="inputContent">
              <input
                v-model.number="inputContent"
                placeholder="数字を入力してください"
                oninput="value=value.replace(/[^0-9.]/g,'')"
              />

              <div class="start" id="start">
                <button @click="getResult">ok!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="quiz">
        <p>占ってみませんか？</p>

        <div class="feedback">
          <div>{{ feedback2 }}</div>
        </div>
      </div>
    </div>
    <div class="top">
      <div class="first">
        <div class="writecontainer">
          <router-link to="/write" class="writefirst">入力画面</router-link>
        </div>
      </div>

      <div class="second">
        <div class="readcontainer">
          <div class="readsecond">
            <router-link to="/read-page">閲覧画面</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="third">
        <div class="calendarcontainer">
          <div class="calendarthird">
            <router-link to="/calendar">カレンダー</router-link>
          </div>
        </div>
      </div>

      <div class="fourth">
        <div class="analysiscontainer">
          <div class="analysisfourth">
            <router-link to="/analysis">分析</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue"
export default {
  name: "uranai-in",
  data() {
    return {
      uranai: require(`@/views/uranai.jpg`),
      feedback: "",
      results: [
        {
          feedback: "1",
        },
        {
          feedback: "1",
        },
        {
          feedback: "1",
        },
        {
          feedback: "1",
        },
        {
          feedback: "1",
        },
        {
          feedback: "1",
        },
      ],
    }
  },
  methods: {
    setsumei() {
      alert(
        `説明：(数字の説明は下にありますよ！)

        小六壬は、古代中国の占い法の一つで、江戸時代から日本に流行しました。日本では「六曜」で呼ばれています。
      日本における六曜は「先勝、友引、先負、仏滅、大安、赤口」であるが、ここには中国の「大安、留連、速喜、赤口、小吉、空亡」を中心にして予測します。
      小六壬と六曜の意味は少し違います。六曜はほとんど日の吉凶を予測することで、小六壬は事件や生活の何でも使えます。



  使い方：

        4桁の数字を選び、頭の中で最初に思いついた数字やどこで見たの数字、 好きな数字でもいいので、思いつかない場合は現在の時間を使いましょ。
      `
      )
    },
    attention() {
      alert(`
      注意事項：

      急ぎがなければ占めず，用事がなければ占わず，動かずも占わず。

     （結果はただの参考になること）`)
    },
    getResult(result) {
      const sum = this.inputContent.reduce((sumValue, cur) => (sumValue += cur))
      const lenCount =
        this.inputContent.length === 1 ? 0 : this.inputContent.length - 1
      let option = (sum - lenCount) % 6 === 0 ? 6 : ((sum - lenCount) % 6) - 1
      this.feedback = result.feedback[option]
    },
  },
}
</script>

<style>
.top {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 20px;
  width: 1000px;
  margin: auto;
  height: 280px;
  background-color: peachpuff;
  margin-top: 10px;
}
.first {
  display: flex;

  margin-top: 50px;
  border-radius: 20px;
  width: 300px;
  height: 200px;

  background-color: lightblue;
}
.second {
  display: flex;

  margin-top: 50px;
  border-radius: 20px;
  width: 300px;
  height: 200px;
  background-color: lightblue;
}
.bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 20px;
  width: 1000px;
  margin: auto;
  height: 280px;
  background-color: peachpuff;

  margin-bottom: 150px;
}
.third {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  border-radius: 20px;
  width: 300px;
  height: 200px;
  background-color: lightblue;
}
.fourth {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  border-radius: 20px;
  width: 300px;
  height: 200px;
  background-color: lightblue;
}
.writecontainer {
  font-size: 20px;
  color: transparent;
  -webkit-text-stroke: 1px black;
  letter-spacing: 0.04em;
}
.readcontainer {
  font-size: 20px;
  color: transparent;
  -webkit-text-stroke: 1px black;
  letter-spacing: 0.04em;
}
.calendarcontainer {
  font-size: 20px;
  color: transparent;
  -webkit-text-stroke: 1px black;
  letter-spacing: 0.04em;
}
.analysiscontainer {
  font-size: 20px;
  color: transparent;
  -webkit-text-stroke: 1px black;
  letter-spacing: 0.04em;
}
.writefirst {
  display: flex;
  flex-direction: row;
  width: 100px;
  height: 30px;
  background-color: lightblue;
  margin-top: 70px;
  margin-left: 100px;
}
.readsecond {
  display: flex;
  flex-direction: row;
  width: 100px;
  height: 30px;
  background-color: lightblue;
  margin-top: 70px;
  margin-left: 100px;
}
.calendarthird {
  display: flex;
  flex-direction: row;
  width: 120px;
  height: 30px;
  background-color: lightblue;
  margin-top: 70px;
  margin-left: 100px;
}
.analysisfourth {
  display: flex;
  flex-direction: row;
  width: 120px;
  height: 30px;
  background-color: lightblue;
  margin-top: 70px;
  margin-left: 120px;
}
.uranai {
  margin-top: 10px;
  width: 10px;
  height: 20px;
}
.uranai-button {
  margin-top: 20px;
  margin-left: 300px;
}
.explain {
  margin-top: 0px;
  margin-left: 55px;
}
.start {
  margin-top: 10px;
  margin-left: 60px;
}
.Process {
  display: flex;
  flex-direction: row;
}
.attention {
  margin-left: 20px;
  margin-top: 0px;
}
.quiz {
  margin-left: 250px;
  font-size: 20px;
  font-family: "Courier New", Courier, monospace;
}
.feedback {
  margin-left: 250px;
  width: 500px;
  height: 200px;
  background-color: burlywood;
  border-radius: 20px;
}
.inputContent {
  margin-left: 125px;
  width: 150px;
}
</style>
