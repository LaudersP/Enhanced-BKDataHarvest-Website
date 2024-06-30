import React from "react";
import "./ContactMePage.css";

function ContactMePage() {
  return (
    <div className="contact-me-page">
      <div className="contact-me-page-content">
        <div className="contact-me-page-title">
          <h1>Contact Me</h1>
        </div>
        <div className="contact-me-page-text">
          <p>
            If you have any questions, comments, or concerns, please feel free
            to reach out to me at
            <a href="mailto:parkerwlauders@gmail.com">
              parkerwlauders@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactMePage;
