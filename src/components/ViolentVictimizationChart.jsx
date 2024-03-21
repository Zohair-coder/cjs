import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const ViolentVictimizationChart = ({ data }) => {
  const [selectedYear, setSelectedYear] = useState(2022);
  const svgRef = useRef();

  useEffect(() => {
    if (data.length === 0) return;
    const margin = { top: 20, right: 30, bottom: 40, left: 90 },
          width = 960 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current)
                  .attr("width", width + margin.left + margin.right)
                  .attr("height", height + margin.top + margin.bottom)
                  .append("g")
                  .attr("transform", `translate(${margin.left},${margin.top})`);

    const filteredData = data.filter(d => d.Year === selectedYear)
                             .sort((a, b) => d3.ascending(a.Number, b.Number));

    const x = d3.scaleLinear()
                .domain([0, d3.max(filteredData, d => d.Number)])
                .range([0, width]);
    svg.append("g")
       .call(d3.axisTop(x))
       .attr("font-size", '20px');

    const y = d3.scaleBand()
                .range([0, height])
                .domain(filteredData.map(d => d["Crime Type"]))
                .padding(.1);
    svg.append("g")
       .call(d3.axisLeft(y))
       .attr("font-size", '20px');

    svg.selectAll("myRect")
       .data(filteredData)
       .enter()
       .append("rect")
       .attr("x", x(0))
       .attr("y", d => y(d["Crime Type"]))
       .attr("width", d => x(d.Number))
       .attr("height", y.bandwidth())
       .attr("fill", "#69b3a2");
  }, [data, selectedYear]);

  return (
    <div>
      <input
        type="range"
        min="1993"
        max="2022"
        value={selectedYear}
        onChange={(e) => setSelectedYear(Number(e.target.value))}
        step="1"
      />
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default ViolentVictimizationChart;
