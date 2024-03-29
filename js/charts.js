let teamChart1;

function generateChart(stat, teamName) {
  let data = stat;

  let $myChart = $("#myChart")[0].getContext("2d");

  teamChart1 = new Chart($myChart, {
    type: "bar",
    data: {
      datasets: [
        {
          label: teamName,
          data: data,
          backgroundColor: teamColor,
        },
        {
          label: undefined,
          data: undefined,
          backgroundColor: undefined,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          text: "Stats",
          display: true,
        },
      },
    },
  });
}

function updateChartTeam1(chart, data, teamName, teamColor) {
  chart.data.datasets[0].data = data;
  chart.data.datasets[0].label = teamName;
  chart.data.datasets[0].backgroundColor = teamColor;
  chart.update();
}

function updateChartTeam2(chart, data, teamName, teamColor) {
  chart.data.datasets[1].data = data;
  chart.data.datasets[1].label = teamName;
  chart.data.datasets[1].backgroundColor = teamColor;
  chart.update();
}
