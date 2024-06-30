import React from "react";
import "./DisclaimerPage.css";
import Button from "../../components/navigation/Button/Button";

function DisclaimerPage() {
  return (
    <div className="disclaimer-page">
      <div className="disclaimer-page-content">
        <div className="disclaimer-page-title">
          <h1>Disclaimer</h1>
        </div>
        <div className="disclaimer-page-text">
          <p>
            This website is built for <b>educational purposes only!</b> This
            website is <b>NOT</b> affiliated with, endorsed by, or sponsored by
            Burger King Corporation. All trademarks, including the
            <a href="https://www.bk.com/trademarks" target="_blank">
              Burger King Corporation trademarks
            </a>
            and others, are used here solely for informational purposes under
            the fair use doctrine.
          </p>
          <p>
            This website does <b>NOT</b> claim to be the official Burger King
            website. It is <b>NOT</b> intended to confuse users into thinking it
            is the official website. All content provided is for{" "}
            <b>educational purposes</b> and any resemblance to the official
            website is purely for <b>illustrative reasons</b>.
          </p>
          <p>
            The data displayed on this website is publicly available and
            gathered through a scraper utilizing the "Find a Restaurant" and the
            "Order Here" features on the official Burger King website. This data
            is presented without modification to ensure it is accurate and
            factual.
          </p>
          <p>
            The design and layout of this website are intended to resemble the
            Burger King website for <b>educational</b> and{" "}
            <b>illustrative purposes only. </b>
            This resemblance is <b>NOT</b> intended to imply any affiliation
            with or endorsement by Burger King Corporation.
          </p>
          <p>
            If you have any concerns or questions about the content or use of
            this website, please contact me directly.
          </p>
          <div className="disclaimer-page-contact-button">
            <Button
              className="disclaimer-contact-button"
              label="Contact Me"
              route="/contact-me"
              externalLink={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisclaimerPage;
