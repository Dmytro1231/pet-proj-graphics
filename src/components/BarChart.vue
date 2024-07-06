<template>
  <div>
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
div {
  max-width: 40vw;
  max-height: 70vh;
  margin: auto;
}
</style>
