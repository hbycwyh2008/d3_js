var dataArray = [4, 15, 34];
const canvas = d3.select(".canvas");
const svg = canvas.select("svg");
const rect = svg
  .selectAll("rect")
  .attr("width", 24)
  .data(dataArray)
  .attr("fill", "orange")
  .attr("height", function (d) {
    return d * 3;
  })
  .attr("x", function (d, i) {
    console.log(d);
    return i * 25;
  })
  .attr("y", function (d, i) {
    return 100 - d * 3;
  });
