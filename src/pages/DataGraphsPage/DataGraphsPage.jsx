import React, { useState, useEffect } from "react";
import "./DataGraphsPage.css";
import SectionHeader from "../../components/display/SectionHeader/SectionHeader";
import BarGraph from "../../components/display/BarGraph/BarGraph";
import DropdownMenu from "../../components/display/DropdownMenu/DropdownMenu";
import CheckboxItem from "../../components/display/CheckboxItem/CheckboxItem";

function DataGraphsPage() {
  const [checkedItems, setCheckedItems] = useState({});
  const [jsonData, setJsonData] = useState({});
  const [averagePrices, setAveragePrices] = useState({});

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

  const stateData = jsonData.states_stats || {};
  const categories = jsonData.categories || {};
  const priceData = jsonData.average_prices || [];

  useEffect(() => {
    const calculateAveragePrices = () => {
      const selectedDataTypes = getSelectedDataTypes();
      const averagePrices = {};

      priceData.forEach((stateData) => {
        const state = stateData.state;
        let sum = 0;

        selectedDataTypes.forEach((dataType) => {
          sum += stateData[dataType];
        });

        averagePrices[state] = sum / selectedDataTypes.length;
      });

      setAveragePrices(averagePrices);
    };

    calculateAveragePrices();
  }, [priceData, checkedItems]);

  const areItemsSelected = () => {
    return Object.values(checkedItems).some((isChecked) => isChecked);
  };

  return (
    <div className="data-graphs-page">
      <div className="data-graphs-page-content">
        <SectionHeader removeTop={true} label="State Graph" />
        {stateData && <BarGraph data={stateData} yLabel="Number of Stores" />}
        <SectionHeader label="Menu Items" />
        {areItemsSelected() ? (
          <BarGraph data={averagePrices} yLabel="Average Price" />
        ) : (
          <div className="empty-message">
            Please select items from below to view data
          </div>
        )}
        <div className="menu-graph">
          {areItemsSelected() && <p className="data-shown">*Prices in cents</p>}
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
    </div>
  );
}

export default DataGraphsPage;
