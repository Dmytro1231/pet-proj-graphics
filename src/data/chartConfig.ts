export const salesChartData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Sales",
      backgroundColor: "#f87979",
      data: [120, 150, 170, 210, 160, 180, 190, 220, 230, 240, 200, 250],
    },
  ],
};

export const expenseChartData = {
  labels: [
    "Rent",
    "Utilities",
    "Salaries",
    "Marketing",
    "R&D",
    "Miscellaneous",
  ],
  datasets: [
    {
      label: "Expenses",
      backgroundColor: "#36a2eb",
      data: [1000, 200, 3000, 1500, 800, 400],
    },
  ],
};

export const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
