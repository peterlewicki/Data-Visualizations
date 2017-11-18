
var goals = [[[0,0],[1,0],[2,0],[3,3],[4,21],[5,25],[6,29],[7,9]]];

var years = [
  [0,"2010"],
  [1, "2011"],
  [2,"2012"],
  [3, "2013"],
  [4, "2014"],
  [5, "2015"],
  [6, "2016"],
  [7, "2017"],
]

window.onload = function () {
  Flotr.draw(
    document.getElementById("chart"),
    goals, {
            title: "Harry Kane Goals by Year",
      colors: ["#001C58"],
      bars:
{
          show: true,
        barWidth: 0.5,
              shadowSize: 5,
              fillOpacity: .9,
              lineWidth: 0,
      },
     //code below gets rid of decimals on the y axis, min sets minimum value for y axis, tickDecimals how many decimal spaces
      yaxis: {
        min: 0,
        tickDecimals: 0
      },
      xaxis: {
        ticks: years
      },
            grid: {
              horizontalLines: false,
              verticalLines: false,
              //above code gets rid of grid lines on our chart
            }
    }

    );
};
