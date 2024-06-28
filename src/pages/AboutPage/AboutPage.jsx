import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-page-content">
        <div className="about-page-title">
          <h1>About</h1>
        </div>
        <div className="about-page-text">
          <p>
            This project is built on
            <a href="https://github.com/llmexplorer" target="_blank">
              {""}
              LLMExplorer's
            </a>
            original
            <a
              href="https://github.com/llmexplorer/BKDataHarvest"
              target="_blank"
            >
              {" "}
              BKDataHarvest
            </a>
            repository and enhanced for the requirements of this website. This
            project utilizes the previously created BKClient.py script to handle
            interactions between the Burger King online database and my custom
            scraping script. The enhancements made in my custom scraping file
            include:
            <ul>
              <li>
                Constructed the scraping file as a class for the following
                reasons:
                <ul>
                  <li>Greater organized code</li>
                  <li>Enhanced readability</li>
                  <li>Easier maintainability</li>
                  <li>Simplified configuration and initialization</li>
                  <li>Daily selection of scraping functions</li>
                  <li>Weekly selection of scraping functions</li>
                </ul>
              </li>
              <li>
                Optional progress bar visualization for terminal-based users
              </li>
              <li>Database integration using SQLite3</li>
              <li>
                Enhanced data processing utilizing a more structured approach
              </li>
              <li>Use of modern libraries for data visualization</li>
              <li>Ability to generate a website-friendly JSON file</li>
            </ul>
            These enhancements have resulted in a more optimized scraping file
            that better meets the needs of this project.
          </p>
          <p>
            This project utilizes the enhanced scraping script to perform weekly
            scrapes to ensure that newly opened locations are identified and
            scraped. This ensures that a valid representation is also shown to
            this site's users. Daily scraping is also in place to ensure that
            the menus are adequately updated based on availability and prices.
            The data gathered from these scrapes are stored in a SQL database to
            ensure the use of selective data gathering. This database is daily
            validated to ensure that skewed data and menu items not available
            nationwide are not represented on this website. After these scrapes
            are performed, an updated JSON file is generated, which this website
            uses as a data source for the displayed information.
          </p>
          <p>
            Using this gathered data, this website acts as a visualization tool
            for any user with internet access. The main feature of this website
            is the heat map, which updates when the user adds/removes menu items
            from the selected list. This data is also offered in the form of a
            bar graph, providing another way to visualize the data. Users can
            add/remove the desired menu items, allowing them to select items
            they typically order (assuming those items are consistently
            available nationwide), resulting in true one-to-one data
            visualization.
          </p>
          <p>
            In the end, this project was hand modified and created by
            <a href="https://github.com/LaudersP" target="_blank">
              {""}
              Parker Lauders
            </a>
            and then later optimized alongside the help of large language models
            (LLMs) such as
            <a href="https://chat.openai.com/" target="_blank">
              {""}
              ChatGPT
            </a>
            to ensure the best performance for the end user.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
