import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const DonutChart = ({ data }) => {
    const d3Container = useRef(null);
  
    useEffect(() => {
      if (data && d3Container.current) {
        // Define dimensions and radius
        const width = 800;
        const height = 450;
        const chartWidth = 450;
        const margin = 40;
        const radius = Math.min(chartWidth, height) / 2 - margin;
  
        // Remove any existing SVG
        d3.select(d3Container.current).selectAll("*").remove();
  
        // Create SVG container
        const svg = d3.select(d3Container.current)
          .attr("width", width)
          .attr("height", height)
          .append("g")
          .attr("transform", `translate(${width / 4}, ${height / 2})`);
  
        // Create color scale
        const color = d3.scaleOrdinal()
          .domain(data.map(d => d.ageGroup))
          .range(d3.schemeCategory10);
  
        // Compute the position of each group on the pie
        const pie = d3.pie()
          .sort(null)
          .value(d => d.number);
  
        const data_ready = pie(data);
  
        // Shape helper to build arcs
        const arcGenerator = d3.arc()
          .innerRadius(radius * 0.5)
          .outerRadius(radius * 0.8);
  
        const arcLabels = d3.arc()
          .innerRadius(radius * 0.9)
          .outerRadius(radius * 0.9);
  
        // Build the pie chart
        svg
          .selectAll('slices')
          .data(data_ready)
          .join('path')
          .attr('d', arcGenerator)
          .attr('fill', d => color(d.data.ageGroup))
          .attr('stroke', 'white')
          .style('stroke-width', '2px')
          .style('opacity', 0.7);
        
      // Adjust vertical position of the legend by modifying this translate value
      const legend = svg.append("g")
        // Adjust the vertical positioning here by increasing the second value
        .attr("transform", `translate(${radius + margin * 2}, ${margin-100})`);

    // Legend Rows
    data.forEach((d, i) => {
      const legendRow = legend.append("g")
        .attr("transform", `translate(0, ${i * 20})`);

      legendRow.append("rect")
        .attr("width", 18)
        .attr("height", 18)
        .attr("fill", color(d.ageGroup));

      legendRow.append("text")
        .attr("x", 24)
        .attr("y", 9)
        .attr("dy", "0.35em")
        .style("text-anchor", "start")
        .style("font-size", "12px")
        .style("fill", 'currentColor')
        .text(`${d.ageGroup}: ${d.number}%`);
    });
      }
    }, [data, d3Container.current]);
  
    return (
      <svg ref={d3Container} />
    );
  };

export default DonutChart;