import React from "react";
import "./HomePage.css";
import WideElement from "../../components/display/WideElement/WideElement";
import NewsElement from "../../components/display/NewsElement/NewsElement";

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-page-content">
        <WideElement
          title="Start your exploration!"
          buttonText="Start Exploring!"
          buttonRoute="/heat-map"
          buttonClass="default-btn"
          imageSrc="/images/USA.png"
          imageAlt="USA Map"
        />
        <div className="home-page-news-content">
          <NewsElement
            image="images/datagraphs.png"
            imageAltText="Data Graphs Page Screenshot"
            title="Bar Graphs Page"
            summary="For those who want a closer look at their meal prices across states!"
            buttonLabel="View Graphs"
            route="/data-graphs"
          />
          <NewsElement
            image="images/about.png"
            imageAltText="About Page Screenshot"
            title="About Page"
            summary="Learn the story behind the Burger King meal tracker!"
            buttonLabel="Read More"
            route="/about"
          />
          <NewsElement
            image="/images/github_repo.png"
            imageAltText="Scraper GitHub Repo Screen Shot"
            title="Scraper GitHub Repository"
            summary="Dive into the code: explore the scrapers GitHub repository!"
            buttonLabel="See Code"
            route="https://github.com/LaudersP/Enhanced-BKDataHarvest/tree/data-scraping"
            externalLink={true}
          />
          <NewsElement
            image="/images/documentation.png"
            imageAltText="Documentation Page Screenshot"
            title="Like Documentation?"
            summary="Read through the documentation for the scraper and the website here!"
            buttonLabel="Read More"
            route="/doc"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
