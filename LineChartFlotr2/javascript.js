window.onload = function() {


var co2 = [
  [1959, 315.97],
  [1960, 316.91],
  [1961, 317.64],
  [1962, 318.45],
  [1963, 318.99],
  [1964, 319.62],
  [1965, 320.04],
  [1966, 321.38],
  [1967, 322.16],
  [1968, 323.04],
  [1969, 324.62],
  [1970, 325.68],
  [1971, 326.32],
  [1972, 327.45],
  [1973, 329.68],
  [1974, 330.18],
  [1975, 331.11],
  [1976, 332.04],
  [1977, 333.83],
  [1978, 335.40],
  [1979, 336.84],
  [1980, 338.75],
  [1981, 340.11],
  [1982, 341.45],
  [1983, 343.05],
  [1984, 344.65],
  [1985, 346.12],
  [1986, 347.42],
  [1987, 349.19],
  [1988, 351.57],
  [1989, 353.12],
  [1990, 354.39],
  [1991, 355.61],
  [1992, 356.45],
  [1993, 357.10],
  [1994, 358.83],
  [1995, 360.82],
  [1996, 362.61],
  [1997, 363.73],
  [1998, 366.70],
  [1999, 368.38],
  [2000, 369.55],
  [2001, 371.14],
  [2002, 373.28],
  [2003, 375.80],
  [2004, 377.52],
  [2005, 379.80],
  [2006, 381.90],
  [2007, 383.79],
  [2008, 385.60],
  [2009, 387.43],
  [2010, 389.90],
  [2011, 391.65],
  [2012, 393.85],
  [2013, 396.52],
  [2014, 398.65],
  [2015, 400.83],
  [2016, 404.21],
];

/* Global Land and Ocean Temperature Anomalies, January-December
Units: Degrees Celsius
Base Period: 1901-2000
Missing: -999.0000//
Year,Value  */

var temp = [
  [1959, 0.06],
  [1960, 0.02],
  [1961, 0.08],
  [1962, 0.09],
  [1963, 0.11],
  [1964, -0.15],
  [1965, -0.08],
  [1966, -0.02],
  [1967, -0.01],
  [1968, -0.03],
  [1969, 0.09],
  [1970, 0.04],
  [1971, -0.08],
  [1972, 0.03],
  [1973, 0.16],
  [1974, -0.07],
  [1975, 0.00],
  [1976, -0.08],
  [1977, 0.20],
  [1978, 0.11],
  [1979, 0.23],
  [1980, 0.26],
  [1981, 0.30],
  [1982, 0.18],
  [1983, 0.34],
  [1984, 0.15],
  [1985, 0.13],
  [1986, 0.23],
  [1987, 0.37],
  [1988, 0.37],
  [1989, 0.29],
  [1990, 0.43],
  [1991, 0.40],
  [1992, 0.25],
  [1993, 0.28],
  [1994, 0.34],
  [1995, 0.45],
  [1996, 0.32],
  [1997, 0.51],
  [1998, 0.63],
  [1999, 0.44],
  [2000, 0.43],
  [2001, 0.55],
  [2002, 0.60],
  [2003, 0.61],
  [2004, 0.58],
  [2005, 0.66],
  [2006, 0.62],
  [2007, 0.61],
  [2008, 0.54],
  [2009, 0.64],
  [2010, 0.70],
  [2011, 0.58],
  [2012, 0.63],
  [2013, 0.67],
  [2014, 0.75],
  [2015, 0.91],
  [2016, 0.95],
];
var zero = [];
for (var yr=1959; yr < 2016; yr++) {zero.push([yr, 0]);}; //this adds a "dummy" set of data to create a baseline for global temperatures

Flotr.draw(document.getElementById("chart"),
[
  {data: co2, label: "CO<sub>2</sub> Concentration (ppm)", lines: {show: true}}, // this sets the co2 line graph to the chart div in the html file
{data: temp, label: "Yearly Temperature Difference (&#8451)",lines: {show: true}, yaxis: 2},  //sets the temp line graph to chart div, "yaxis" tells flotr to create 2nd y scale for chart
{data: zero, label: "20<sup>th</th>-Century Baseline Temperature", lines: {show: true, lineWidth: 1}, shadowSize: 0, color: "#545454", yaxis: 2}, ],

{
title: "Global Temperature and CO<sub>2</sub> Concentration (NOAA Data)",
grid: {horizontalLines: false, verticalLines: false}, //this removes the grid from our chart for improved readability
  yaxis2: {min: -0.15, max: 0.69, tickFormatter: function(val) {return val+"&#8451";}}, //these specify the min and max values for the vertical axes for improved readability
  yaxis: {min: 300, max: 400}

}


);




};
