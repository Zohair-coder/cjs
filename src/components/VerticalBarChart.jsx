import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function VerticalBarChart({ data }) {
  const d3Container = useRef(null);

  useEffect(() => {
    if (data && d3Container.current) {
      // Remove the old svg
      d3.select(d3Container.current).selectAll("*").remove();

      // Define dimensions
      const margin = { top: 30, right: 30, bottom: 100, left: 80 }; // Adjusted for larger labels
      const width = 800 - margin.left - margin.right;
      const height = 500 - margin.top - margin.bottom;

      // Create SVG container
      const svg = d3
        .select(d3Container.current)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // X axis
      const x = d3.scaleBand()
        .range([0, width])
        .domain(data.map(d => d.category))
        .padding(0.4);
      svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end")
        .style("font-size", "15px") // Increased font size
        .style("font-weight", "bold");

      // Add Y axis
      const y = d3.scaleLinear()
        .domain([0, 100])
        .range([height, 0]);
      svg.append("g")
        .call(d3.axisLeft(y))
        .selectAll("text")
        .style("font-size", "15px") // Increased font size
        .style("font-weight", "bold");

      // Bars
      svg.selectAll("mybar")
        .data(data)
        .join("rect")
        .attr("x", d => x(d.category))
        .attr("y", d => y(d.value))
        .attr("width", x.bandwidth())
        .attr("height", d => height - y(d.value))
        .attr("fill", "#69b3a2");
    }
  }, [data, d3Container.current]);

  return (
    <svg ref={d3Container} style={{ width: '100%', height: 'auto' }} />
  );
}
export default VerticalBarChart;