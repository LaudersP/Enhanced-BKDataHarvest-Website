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
          imageSrc="https://blog.wouterkoolen.info/DrosteOperator/test.jpg"
          imageAlt="Test Image"
        />
        <div className="home-page-news-content">
          <NewsElement
            image="https://blog.wouterkoolen.info/DrosteOperator/test.jpg"
            imageAltText="Test Image"
            title="Test 1"
            summary="This is a a very very very very very long short very very short you know summary of the news item."
            buttonLabel="Read More"
            route="/news-item-detail-1"
          />
          <NewsElement
            image="https://blog.wouterkoolen.info/DrosteOperator/test.jpg"
            imageAltText="Test Image 2"
            title="Test 2"
            summary="This is a summary of the news item."
            buttonLabel="Read More"
            route="/news-item-detail-2"
          />
          <NewsElement
            image="https://blog.wouterkoolen.info/DrosteOperator/test.jpg"
            imageAltText="Test Image 3"
            title="Test 3"
            summary="This is a a very very very very very long short very very short you know summary of the news item."
            buttonLabel="Read More"
            route="/news-item-detail-3"
          />
          <NewsElement
            image="https://blog.wouterkoolen.info/DrosteOperator/test.jpg"
            imageAltText="Test Image 4"
            title="Test 4"
            summary="This is a a very very very very very long short very very short you know summary of the news item."
            buttonLabel="Read More"
            route="https://github.com/LaudersP"
            externalLink={true}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
