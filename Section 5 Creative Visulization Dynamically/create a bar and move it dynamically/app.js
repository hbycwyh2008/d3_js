var dataArray = [4, 15, 34];
const canvas = d3.select(".canvas");
const svg = canvas.append("svg").attr("width", 600).attr("height", 600);

const rect = svg
  .append("rect")
  .attr("width", 24)
  .data(dataArray)
  .attr("height", 100)
  .attr("fill", "orange")
  .attr("y", (d, i) => {
    return d * 12;
  })
  .attr("x", (d, i) => {
    return d * 20;
  });
