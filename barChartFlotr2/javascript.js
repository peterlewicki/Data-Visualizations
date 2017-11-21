//in a flotr pie chart, each data series is stored in an OBJECT,

var data = [

  {data: [[0, 10.7]], label: "Extreme Poverty"},
    {data: [[1, 89.3]]}

]; //according to world bank, % of people living on less than $1.90 a day.. first series is % in poverty, send series everyone else
//for pie charts in Flotr2, x values are irrelevant, so we simply include placeholder values of 0 and 1
window.onload = function() {
Flotr.draw(document.getElementById('chart'), data, {
  title: "How Much of the World Lives on $1.90 a day?",
  pie: {show: true
  },
  yaxis: {
    showLabels: false
  },
  xaxis: {
    showLabels: false
  },
  grid: {
    horizontalLines: false,
    verticalLines: false,
  }

});

}
