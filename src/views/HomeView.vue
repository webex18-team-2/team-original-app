<template>
  <div class="home">
    <div class="maincontainer">
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
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue"

export default {}
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
  margin-top: 100px;
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
</style>
