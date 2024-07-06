<template>
  <div>
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
div {
  max-width: 40vw;
  max-height: 70vh;
  margin: auto;
}
</style>
