import React from "react";
import "./Banner.css";
import BannerItem from "../BannerItem/BannerItem";

function Banner({ data }) {
  const date = data && data.last_updated;
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      })
    : "Unable to retrieve data...";

  const totalStores =
    data && data.total_stores !== undefined
      ? data.total_stores.toLocaleString()
      : "N/A";

  const totalItems =
    data && data.total_items !== undefined
      ? data.total_items.toLocaleString()
      : "N/A";

  return (
    <div className="banner">
      <div className="banner-content">
        <BannerItem
          id="updated"
          icon="sync"
          label="Updated"
          text={formattedDate}
        />
        <BannerItem
          id="store-total"
          icon="storefront"
          label="Stores"
          text={totalStores}
        />
        <BannerItem
          id="items"
          icon="restaurant"
          label="Items"
          text={totalItems}
        />
      </div>
    </div>
  );
}

export default Banner;
