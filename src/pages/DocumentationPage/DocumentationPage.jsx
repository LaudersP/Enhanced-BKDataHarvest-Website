import React, { useEffect, useState } from "react";
import "./DocumentationPage.css";
import DropdownMenu from "../../components/display/DropdownMenu/DropdownMenu";
import DocDateEntry from "../../components/display/DocDateEntry/DocDateEntry";

function DocumentationPage() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("/activities.json")
      .then((response) => response.json())
      .then((data) => setActivities(data));
  }, []);

  const scraperActivities = activities.filter(
    (activity) => activity.type === "scraper"
  );
  const websiteActivities = activities.filter(
    (activity) => activity.type === "website"
  );

  return (
    <div className="documentation-page">
      <div className="documentation-page-content">
        <DropdownMenu title="Website Documentation">
          {websiteActivities.map((activity) => (
            <DocDateEntry
              key={activity.label}
              label={activity.label}
              date={activity.date}
              activities={activity.activities}
            />
          ))}
        </DropdownMenu>
        <DropdownMenu title="Scraper Documentation">
          {scraperActivities.map((activity) => (
            <DocDateEntry
              key={activity.label}
              label={activity.label}
              date={activity.date}
              activities={activity.activities}
            />
          ))}
        </DropdownMenu>
      </div>
    </div>
  );
}

export default DocumentationPage;
