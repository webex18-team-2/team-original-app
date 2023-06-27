<template>
  <div class="analysis">
    <h1>分析</h1>
    <Line v-if="loaded" :data="data" :options="options" />
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "vue-chartjs"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
export default {
  name: "App",
  components: {
    Line,
  },
  data() {
    return {
      loaded: false,
      data: {
        labels: [],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [],
          },
        ],
      },
      options: {
        responsive: true,
      },
    }
  },
  mounted() {
    const diarylist = JSON.parse(localStorage.getItem("diarylist")) || []
    if (Array.isArray(diarylist)) {
      diarylist.forEach((diary) => {
        this.data.labels.unshift(diary.date)
        this.data.datasets[0].data.unshift(diary.point)
      }),
        (this.loaded = true)
    } else {
      console.error("Invalid diarylist data.")
    }
  },
  created() {
    const diarylist = [
      { date: "2023-06-25", point: 60 },
      { date: "2023-06-26", point: 80 },
      { date: "2023-06-27", point: 35 },
    ]
    localStorage.setItem("diarylist", JSON.stringify(diarylist))
  },
}
</script>

<style>
.analysis {
  height: 800px;
  width: 1000px;
  margin: 0 auto;
}
</style>
