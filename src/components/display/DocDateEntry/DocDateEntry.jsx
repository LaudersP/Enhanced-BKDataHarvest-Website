import React from "react";
import "./DocDateEntry.css";

function DocDateEntry({ label, date, activities }) {
  const [dayLabel, remainingLabel] = label.split(": ");

  return (
    <div className="doc-date-entry">
      <div className="doc-date-entry-label">
        <h3>
          <span className="day-label">{dayLabel}:</span>
          {remainingLabel}
        </h3>
      </div>
      <div className="doc-date-entry-date">
        <span className="label">Date:</span>
        <span className="date">{date}</span>
      </div>
      <div className="doc-date-entry-activities">
        <span className="label">Activities</span>
        <ul>
          {activities.map((activity, index) => (
            <li key={index}>
              <span className="activity-label">{activity.label}</span>
              <span className="activity-description">
                {activity.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DocDateEntry;
