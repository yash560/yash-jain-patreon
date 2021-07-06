import React from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import "./CanvaCard.css";

function CanvaCard() {
  return (
    <div>
      <div class="canvaBodyCard">
        <div class="canvaBodyCardContent">
          <div class="canvaBodyCardImage">
            <img
              src="https://jumpstart-static.s3.amazonaws.com/backend/__sized__/company_roles/eventdetails/J5fb5Tz1StiC4n-lWTNdpQ-thumbnail-1920x400.png"
              class="canvaBodyCardCoverImage "
              alt=""
              srcset=""
            />
          </div>
          <div class="canvaBodyCardImageAbsolute">
            <div class="canvaBodyCardMain canvaBodyCardMainImage canvaBodyCardMain--border"></div>
          </div>
          <div class="canvaBodyCardHeader">
            2022 Intern Recruiting for the Think Tank Team with Veronica Smith
          </div>{" "}
          <div class="canvaBodyCardBody">
            Samsung Research America{" "}
            <div class="canvaBodyCardBody2"> Webinar</div>{" "}
          </div>{" "}
          <div class="canvaBodyCardBody2">
            {" "}
            <i class="fas canvaBodyCardBodyIcon fa-calendar-week"></i> July 07,
            2021
          </div>
          <div class="canvaBodyCardBody2">
            {" "}
            <i class="far canvaBodyCardBodyIcon fa-clock"></i> 3:00 PM - 4:00 PM PDT
          </div>
          <div class="canvaBodyCardFooterIcon">
            <div class="canvaBodyCardsquarebuttonsecondary">
              <i class="far fa-bookmark"></i>Save
            </div>{" "}
            <div class="canvaBodyCardsquarebuttonsecondary">Learn More</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CanvaCard;
