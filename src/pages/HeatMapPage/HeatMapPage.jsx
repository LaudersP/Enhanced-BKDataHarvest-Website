import React, { useState, useEffect } from "react";
import "./HeatMapPage.css";
import DropdownMenu from "../../components/display/DropdownMenu/DropdownMenu";
import CheckboxItem from "../../components/display/CheckboxItem/CheckboxItem";
import USAHeatMap from "../../components/display/USAHeatMap/USAHeatMap";

function HeatMapPage() {
  const [checkedItems, setCheckedItems] = useState({});
  const [jsonData, setJsonData] = useState({});

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setJsonData(data));
  }, []);

  const handleCheckChange = (text, isChecked) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [text]: isChecked,
    }));
  };

  const getSelectedDataTypes = () => {
    return Object.keys(checkedItems).filter((key) => checkedItems[key]);
  };

  const categories = jsonData.categories || {};

  return (
    <div className="map-page">
      <div className="map-page-content">
        <USAHeatMap dataTypes={getSelectedDataTypes()} />
        {Object.keys(categories).map((category) => (
          <DropdownMenu key={category} title={category}>
            {categories[category]
              .sort((a, b) => {
                const textA = a.replace(/^\d+\s*/, "");
                const textB = b.replace(/^\d+\s*/, "");
                return textA.localeCompare(textB);
              })
              .map((item) => (
                <CheckboxItem
                  key={item}
                  text={item}
                  onChange={handleCheckChange}
                  isChecked={checkedItems[item]}
                />
              ))}
          </DropdownMenu>
        ))}
      </div>
    </div>
  );
}

export default HeatMapPage;
