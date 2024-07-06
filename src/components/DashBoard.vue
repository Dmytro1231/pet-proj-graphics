<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="charts">
      <LineChart />
      <BarChart />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LineChart from "./LineChart.vue";
import BarChart from "./BarChart.vue";

export default defineComponent({
  name: "DashBoard",
  components: {
    LineChart,
    BarChart,
  },
});
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.charts {
  display: flex;
  width: 100%;
}
</style>
