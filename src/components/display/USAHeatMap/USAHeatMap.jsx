import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import "./USAHeatMap.css";

const USAHeatMap = ({ dataTypes }) => {
  const [data, setData] = useState([]); // data for each state
  const [priceData, setPriceData] = useState({}); // price data for each state
  const [selectedState, setSelectedState] = useState(null); // selected state

  useEffect(() => {
    if (selectedState) {
      const newState = data.find(
        (state) => state.properties.name === selectedState.properties.name
      );
      setSelectedState(newState);
    }

    // Load the TopoJSON file for the USA
    fetch("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json")
      .then((response) => response.json())
      .then((data) => {
        const states = topojson.feature(data, data.objects.states).features;
        setData(states);
      });

    // Load the average prices data
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        const priceData = {};
        if (data.average_prices && Array.isArray(data.average_prices)) {
          data.average_prices.forEach((row) => {
            const stateName = row.state;
            let value;
            if (dataTypes.length > 1) {
              value =
                dataTypes.reduce((sum, dataType) => sum + row[dataType], 0) /
                dataTypes.length;
            } else {
              value = row[dataTypes[0]];
            }
            priceData[stateName] = value;
          });
          setPriceData(priceData);
        } else {
          console.error(
            "Expected data to be an object with an 'average_prices' array, but got:",
            data
          );
        }
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });
  }, [dataTypes]);

  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  const projection = d3.geoAlbersUsa().scale(1000).translate([400, 300]);
  const path = d3.geoPath().projection(projection);

  const colorScale = d3
    .scaleQuantize()
    .domain(d3.extent(Object.values(priceData)))
    .range(d3.quantize(d3.interpolateRgb("#1A8738", "#FFAA00"), 9));

  const legendWidth = 20;
  const legendHeight = 300;
  const legendX = 60;
  const legendY = (600 - legendHeight) / 2;

  return (
    <div className="map-container">
      <svg width={1000} height={600}>
        <g transform="translate(175, 0)" className="map">
          {data.map((state, index) => {
            const stateName = state.properties.name;
            const value = priceData[stateName];
            return (
              <path
                key={index}
                d={path(state)}
                fill={value ? colorScale(value) : "#ccc"}
                stroke={selectedState === state ? "#512314" : "#512314"}
                strokeWidth={selectedState === state ? 2 : 0.25}
                onClick={() => handleStateClick(state)}
              />
            );
          })}
        </g>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            {colorScale
              .range()
              .reverse()
              .map((color, i) => (
                <stop
                  key={i}
                  offset={`${(i / (colorScale.range().length - 1)) * 100}%`}
                  stopColor={color}
                />
              ))}
          </linearGradient>
        </defs>
        <rect
          x={legendX}
          y={legendY}
          width={legendWidth}
          height={legendHeight}
          fill="url(#gradient)"
          className="gradient-rect"
        />
        {Array.from({ length: 10 }, (_, i) => (
          <text
            key={i}
            x={legendX + legendWidth + 10}
            y={legendY + legendHeight - i * (legendHeight / 9)}
            fontSize={12}
            textAnchor="start"
            className="scale-values"
          >
            {(
              d3.extent(Object.values(priceData))[0] +
              (i *
                (d3.extent(Object.values(priceData))[1] -
                  d3.extent(Object.values(priceData))[0])) /
                9
            ).toFixed(2)}
          </text>
        ))}
        {/* Vertical "Average Price (in Cents)" text */}
        <text
          x={legendX - 25} // Adjusted to move the text to the left of the scale bar
          y={legendY + legendHeight / 2}
          fontSize={12}
          textAnchor="middle"
          transform={`rotate(-90, ${legendX - 25}, ${
            legendY + legendHeight / 2
          })`} // Rotate text -90 degrees
          className="scale-label"
        >
          Average Price (in Cents)
        </text>
      </svg>
      {selectedState ? (
        <div className="state-info">
          <h2>{selectedState.properties.name}</h2>
          {priceData[selectedState.properties.name] !== undefined ? (
            <p>
              <span className="item-name">Average:</span>
              <span className="item-value">
                {priceData[selectedState.properties.name].toFixed(2)}
              </span>
              <br />
              <span className="item-note">*Price in cents</span>
            </p>
          ) : (
            <p className="no-data">Please select menu item(s)</p>
          )}
        </div>
      ) : (
        <div className="state-info">
          <p className="no-state">Select a state</p>
          <p className="no-state">to view data</p>
        </div>
      )}
    </div>
  );
};

export default USAHeatMap;
