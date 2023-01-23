$(function() {
  RailsVis.getCommits();
})

var RailsVis = {

  // make an ajax request to our sinatra server
  getCommits: function() {
    $.ajax({
      type: 'GET',
      url: '/commits',
      dataType: "json",
      success: function(commits){
        RailsVis.graphCommits(commits);
      }
    })
  },

  graphCommits: function(commits) {

    var h = 600, w = 1000,
      inputDateDomain = RailsVis.dateDomain(commits),
      commitsByFrequency = RailsVis.commitFrequencies(commits),
      outputCommitDomain = [0, RailsVis.maxCommitsInDay(commitsByFrequency)],
      barWidth = w/RailsVis.daysBetween(inputDateDomain);


      console.log(commitsByFrequency);

    RailsVis.renderGraphCanvas(h, w);

    var barHeight = d3.scale.linear()
      .domain(outputCommitDomain)
      .range([0, h]);


    // this gives us an output from 0 to one less than the number
    // of days from first to last commit, this ensures scale
    // starting at zero, but with correct number of indecies
    var barIndex = d3.time.scale()
      .domain(inputDateDomain)
      .range([0, RailsVis.daysBetween(inputDateDomain) - 1]);

    // map bar indecies to x positions
    var barPosition = d3.scale.linear()
      .domain([0, RailsVis.daysBetween(inputDateDomain)])
      .range([0, w]);

    var canvas = d3.select('#graph-canvas');

    canvas.selectAll('rect')
      .data(commitsByFrequency)
      .enter()
      .append('rect')
      .attr('width',barWidth)
      .attr('height', function(data, index){
        return barHeight(data.length);
      })
      .attr('x', function(data, index){
        var date = RailsVis.commitDate(data[0]),
            index = barIndex(date),
            pos = barPosition(index);
        return pos;
      })
      .attr('y', function(data, index){
        return h - barHeight(data.length);
      })
      .on('mouseenter', function(data){
        $("#bar-info").html(data.length + " Commits on " + RailsVis.commitDate(data[0]));
      })

  },


  // create a canvas for our graph
  renderGraphCanvas: function(h, w) {
    var svg = d3.select('#graph-wrapper')
      .append('svg')
      .attr('id', 'graph-canvas')
      .attr('height', h)
      .attr('width', w)
      .style('border', '2px solid black');
  },



  maxCommitsInDay: function(commitsByFrequency) {
    var i = 0; length = commitsByFrequency.length, max = 0,
    commitsInDay = 0;
      for(; i < length;) {
        commitsInDay = commitsByFrequency[i].length
        if(commitsInDay > max){
          max = commitsInDay;
        }
        i += 1;
      }
    return max;
  },

	// returns earliest and latests dats from array of commits
  dateDomain: function(commits) {
    var i = 0, length = commits.length, 
    min = RailsVis.commitDate(commits[0]), 
    max = min, date;

    for(; i < length ;) {
      date = RailsVis.commitDate(commits[i]);
      if(date > max) {
        max = date;
      } else if (date < min) {
        min = date;
      }
      i += 1;
    }
    return [min,max];
  },

	// returns date of commit if passed github commit
  commitDate: function(commit) {
    var commitString = commit['commit']['committer']['date'],
    dateArray = commitString.split('T')[0].split('-')
    return new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
  },

	// returns commits arranged by day when given commits
  commitFrequencies: function(commits) {
    var byDateObj = {}, i = 0, length = commits.length,
      max = 0, date, byDateArray = [];

    for(;i<length;) {
      date = RailsVis.commitDate(commits[i]);
      byDateObj[date] = byDateObj[date] || [];
      byDateObj[date].push(commits[i]);
      i += 1;
    }

    for(var key in byDateObj) {
      byDateArray.push( byDateObj[key] );
    }
    return byDateArray;
  },

	// difference in number of days between commits
  daysBetween: function(minMaxArray) {
    var milliseconds = minMaxArray[1] - minMaxArray[0];
    return parseInt(milliseconds* 1.15741E-8, 10) + 1;
  }

}