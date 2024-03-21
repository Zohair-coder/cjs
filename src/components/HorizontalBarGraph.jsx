import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function HorizontalBarGraph({ data }) {
    const d3Container = useRef(null);
  
    useEffect(() => {
      if (data && d3Container.current) {
        const sortedData = [...data].sort((a, b) => a.rate - b.rate);

        const margin = { top: 20, right: 30, bottom: 40, left: 175 };
        const width = 800 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;
  
        // Remove the old svg
        d3.select(d3Container.current).selectAll("*").remove();
  
        // Create SVG
        const svg = d3
          .select(d3Container.current)
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", `translate(${margin.left},${margin.top})`);
  
        // Create X-axis
        const x = d3.scaleLinear()
          .domain([0, 100])
          .range([0, width]);
  
        svg.append("g")
          .attr("transform", `translate(0, ${height})`)
          .call(d3.axisBottom(x).ticks(5))
          .append("text")
          .attr("text-anchor", "end");
        
        //   Style the X-axis labels
        svg.selectAll(".x-axis text") // Select the labels in the X-axis
          .style("font-size", "14px"); // Increase the font size
  
        // Create Y-axis
        const y = d3.scaleBand()
          .domain(sortedData.map((d) => d.crime))
          .range([0, height])
          .padding(0.1);
  
        const yAxis = svg.append("g")
          .call(d3.axisLeft(y));
        
        // Style the Y-axis labels
        yAxis.selectAll("text") // Select the labels in the Y-axis
            .style("font-size", "14px") // Increase the font size
            .style("font-weight", "bold"); // Increase the font size
  
        // Create Bars
        svg.selectAll(".bar")
          .data(sortedData)
          .join("rect")
          .attr("class", "bar")
          .attr("x", x(0))
          .attr("y", (d) => y(d.crime))
          .attr("width", (d) => x(d.rate))
          .attr("height", y.bandwidth())
          .attr("fill", "#69b3a2");
      }
    }, [data, d3Container.current]);
  
    return (
      <svg ref={d3Container} />
    );
}

export default HorizontalBarGraph;
