var dataArray = [4, 15, 34];
const canvas = d3.select(".canvas");
const svg = canvas.select("svg");
const rect = svg
  .selectAll("rect")
  .attr("width", 24)
  .data(dataArray)
  .attr("fill", "orange")
  .attr("height", function(d) {
    return d;
  })
  .attr("x", function (d, i) {
    console.log(d);
    return i * 25;
  });
