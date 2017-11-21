

window.onLoad = function () {

var teams = [    //we start with an array of objects representing the 'big six' teams
{team: "Arsenal", won: 236, lost: 81, goalsFor: 787, goalsAgainst: 462, yellowCards: 628},
{team: "Chelsea", won: 265, lost: 98, goalsFor: 797, goalsAgainst: 366, yellowCards: 634},
{team: "Liverpool", won: 216, lost: 98, goalsFor: 733, goalsAgainst: 434, yellowCards: 557},
{team: "Manchester City", won: 224, lost: 105, goalsFor: 760, goalsAgainst: 443, yellowCards: 672},
{team: "Manchester United", won: 264, lost: 72, goalsFor: 796, goalsAgainst: 358, yellowCards: 658},
{team: "Tottenham Hotspur", won: 205, lost: 109, goalsFor: 690, goalsAgainst: 499, yellowCards: 639}
];

var overall = {   //these are the total stats from above so we can calculate some averages to work with and to normalize the values to a common scale
  won: 1410,
  lost: 534,
  goalsFor: 4563,
  goalsAgainst: 2562,
  yellowCards: 3788
};

//function below searches through the teams array for a team name
var get_team = function(name) {
for (var i = 0; i < teams.length; i++) {
  if (teams[i].team === name) return teams[i];
}

}

//this function steps through each statistic in the overall object, gets the corresponding statistic for the team and normalizes the values
var team_data = function(name) {
  var obj = {}, i = 0;
  object.label = name;
  obj.data = [];
  for (var key in overall) {
    obj.data.push([i, 100*get_team(name)[key]/overall[key]]); i++;
  };
  return obj;
};

//a simple array of labels for the statistics in our chart
var labels = [
[0, "Won"],
[1, "Lost"],
[2, "Goals For"],
[3, "Goals Against"],
[4, "Yellow Cards"]
];

Flotr.draw(document.getElementById("chart"),
[
  team_data("Arsenal"),
team_data("Chelsea"),
team_data("Liverpool"),
team_data("Manchester City"),
team_data("Manchester United"),
team_data("Tottenham Hotspur"),
], {
  title: "Big Six Premier League Team Comparison, 2007 - 2017",
  radar: {show: true},  //tells flotr the type of chart we want
  grid: {circular: true, }, //with a radar chart, need to explicitly tell FLOTR to use circular grid
  xaxis: {ticks: labels, },
  yaxis: {showLabels: false, min:0, max: 33,}

}

);

};



/* window.onload = function () {
var players = [
  {team: "Arsenal", won: 236, lost: 81, goalsFor: 787, goalsAgainst: 462, yellowCards: 628},
  {team: "Chelsea", won: 265, lost: 98, goalsFor: 797, goalsAgainst: 366, yellowCards: 634},
  {team: "Liverpool", won: 216, lost: 98, goalsFor: 733, goalsAgainst: 434, yellowCards: 557},
  {team: "Manchester City", won: 224, lost: 105, goalsFor: 760, goalsAgainst: 443, yellowCards: 672},
  {team: "Manchester United", won: 264, lost: 72, goalsFor: 796, goalsAgainst: 358, yellowCards: 658},
  {team: "Tottenham Hotspur", won: 205, lost: 109, goalsFor: 690, goalsAgainst: 499, yellowCards: 639}
];
var team = {
  won: 1410,
  lost: 534,
  goalsFor: 4563,
  goalsAgainst: 2562,
  yellowCards: 3788
};
var get_player = function(name) {
    for (var i=0; i<players.length; i++) {
        if (players[i].player === name) return players[i];
    }
}
var player_data = function(name) {
    var obj = {}, i = 0;
    obj.label = name;
    obj.data = [];
    for (var key in team) {
        obj.data.push([i, 100*get_player(name)[key]/team[key]]);
        i++;
    };
    return obj;
};
var labels = [
    [0, "Points"],
    [1, "Rebounds"],
    [2, "Assists"],
    [3, "Steals"],
    [4, "Blocks"],
];
Flotr.draw(document.getElementById("chart"),
    [
        player_data("Arsenal"),
        player_data("Shane Battier"),
        player_data("LeBron James"),
        player_data("Dwayne Wade"),
        player_data("Mario Chalmers"),
    ],{
        title:  "2011/12 Miami Heat Starting Lineup - Contribution to Team Total",
        radar:  { show: true, radiusRatio: 0.9},
        grid:   { circular: true, },
        xaxis:  { ticks: labels, },
        yaxis:  { showLabels: false, min:0, max: 33, },
        legend: { position: "nw" },
    }
);
};
