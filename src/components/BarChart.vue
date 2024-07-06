<template>
  <div class="chart-container">
    <h2>Expense Data (Bar Chart)</h2>
    <Bar :data="expenseChartData" :options="chartOptions" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { expenseChartData, chartOptions } from "../data/chartConfig";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export default defineComponent({
  name: "BarChart",
  components: {
    Bar,
  },
  data() {
    return {
      expenseChartData,
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
