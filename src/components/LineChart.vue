<template>
  <div class="chart-container">
    <h2>Sales Data (Line Chart)</h2>
    <Line :data="salesChartData" :options="chartOptions" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { salesChartData, chartOptions } from "../data/chartConfig";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export default defineComponent({
  name: "LineChart",
  components: {
    Line,
  },
  data() {
    return {
      salesChartData,
      chartOptions,
    };
  },
});
</script>

<style scoped>
.chart-container {
  max-width: 45vw;
  width: 100%;
  max-height: 60vh;
  margin: 20px auto;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5em;
  color: #333;
}
</style>
