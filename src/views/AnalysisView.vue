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
            data: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
          },
        ],
      },
      options: {
        responsive: true,
      },
    }
  },
  mounted() {
    const posts = JSON.parse(localStorage.getItem("posts")) || []
    if (Array.isArray(posts)) {
      posts.forEach((post) => {
        this.data.labels.unshift(post.date)
        this.data.datasets[0].data.unshift(post.point)
      })
      this.loaded = true
    } else {
      console.error("Invalid posts data.")
    }
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
