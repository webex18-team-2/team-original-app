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
                v-model="inputContent"
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
          <div class="feedbackcontainer">
            <div>{{ feedback }}</div>
          </div>
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
      //inputContent: "",
      results: [
        {
          feedback: `「空亡」：運勢が悪く、自分では考えが決まらず、うまくいかないので、他人の意見をたくさん聞いて、勝手に判断しないようにしましょう。
金運がうまくいかないのは、金を守ることが大切だ。
感情では争いが多い、あるいは他人の介入で争いが生じる。
脾胃や神経系に問題が生じる可能性が高い。
今は困難な境遇にあり、目標を達成することは難しい。`,
        },
        {
          feedback: `
          「大安」：

          今のところ運勢が良く、安定して成長ができる。
          感情面は女性にとって感情が順調で、男性にとって感情は安定しているが、新鮮さがないために小さな問題が発生してしまう可能性が高い。
          仕事が安定していて、働きすぎて病気にならないように気をつけてね。`,
        },
        {
          feedback: `「留連」：現在運勢が低迷しており、気分が悪く、仕事をするときに邪魔されてしまう。
金運が影響を受けるのは、他人の影響を受ける可能性が高い。
感情面では二人ともコミュニケーションが悪く、あるいは一方が強すぎて感情がバランスが取れない。
事業がうまくいかず、職場でトラブルを起こしやすい。
体が少し病気になったり、ストレスが大きすぎて病気になりやすい。`,
        },
        {
          feedback: `「速喜」：運勢がだんだん良くなってきて、積極的に行動すれば成功できる。
金運はだんだんよくなってきたが、盲目的に追求してはいけず、のめり込んでしまいがちだ。
恋が始めたばかりならラブラブの間に入るが、恋の中期にはトラブルが生じてしまう。
仕事は効率的だが、書類の管理に注意しなければならない。
心臓、血液循環あるいは頭部には若干の問題があるが、問題は大きくない。`,
        },
        {
          feedback: `「赤口」：運勢は不明だが、大きな計画があれば早く実施して、遅延せずに成功できるが、細かいことでは成功しにくい。
金運がふらふらして定まらない。お金を求めるのは容易いことではない。
感情紛争が多く、女性なら病気がある。
事業は文職がうまくいかない。
胸、気管などいくつかの問題があり、流行疾患にも感染しやすい。

君、今は困っているかな。`,
        },
        {
          feedback: `「小吉」：運勢がいいので、今のままではますます良くなる！
金運もいいし、他人の影響を受けて金運が良くなるかもしれない。
現在恋人がいないけど、他人の紹介で知り合いになれるが、恋があれば感情はうまくいく。
肝胆と消化器系にはいくつかの問題があるが、大したことではない。
あなたが待っている人がもうすぐ着くよ。`,
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

      急ぎがなければ占わず，用事がなければ占わず，動かずも占わず。

     （結果はただの参考になること）`)
    },
    getResult() {
      const len = this.inputContent.length
      let sum = 0
      for (let i = 0; i < len; i++) {
        sum += Number(this.inputContent[i])
      }
      if (sum < 3) {
        alert(
          `
  もう一度入力してください。

計算の関係なので、占いができない数字もありますので、ご了承ください。`
        )
      } else {
        const lenCount = len - 1
        const option = (sum - lenCount) % 6
        this.feedback = this.results[option].feedback
      }
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
  margin-left: 65px;
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
  margin-left: 40px;
  margin-top: 0px;
}
.quiz {
  margin-left: 270px;
  font-size: 20px;
  font-family: "Courier New", Courier, monospace;
}
.feedback {
  display: flex;
  margin-left: 250px;
  width: 500px;
  height: 200px;
  background-color: burlywood;
  border-radius: 20px;
  font-weight: bold;
}
.inputContent {
  margin-left: 125px;
  width: 150px;
}
.feedbackcontainer {
  display: flex;

  width: 400px;
  height: 150px;
  margin-top: 40px;
  border-radius: 20px;
  margin-left: 50px;
  font-size: 15px;
}
</style>
