import React from "react";
import HeaderBarCanva from "./HeaderBarCanva";
import SidebarCanva from "./SidebarCanva";
import "./mainCanva.css";
import CanvaCard from "./CanvaCard";
import CanvaCatagoriesCard from "./CanvaCatagoriesCard";
import Skeleton from "react-loading-skeleton";
import "./CanvaQuerry.css";
import "./HeaderBarCanva.css";

function Jobs() {
  return (
    <div>
      <SidebarCanva />
      <div class="mainCanva dash-container">
        {" "}
        <HeaderBarCanva />
        <input
          class="input"
          type="text"
          placeholder="Search Events"
          name=""
          id=""
        />
        <div class="cardjobs">
          <div class="cardJobsInside">
            <div class="MainBodyHeader">UPCOMING EVENTS</div>
            <div class="CardsContainer">
              <CanvaCard
                CompanyLogo="https://jumpstart-static.s3.amazonaws.com/backend/organizations/organization/JT0bJEiTTdGazLqQlfZ4Rw.png"
                CompanyBackground="https://jumpstart-static.s3.amazonaws.com/backend/__sized__/company_roles/eventdetails/J5fb5Tz1StiC4n-lWTNdpQ-thumbnail-1920x400.png"
                EventName="2022 Intern Recruiting for the Think Tank Team with Veronica Smith"
                EventSubText="Are you interested in an event with Smsung Research ? Let them know!"
              />
              {/* <CanvaCatagoriesCard
                EventName="Magical Machine Learning"
                CompanyBackground="https://image.freepik.com/free-vector/memphis-pattern-background_53876-89956.jpg"
              /> */}
              <CanvaCard />
              <CanvaCard />
              <CanvaCard />
              <CanvaCard />
              <CanvaCard />
              <CanvaCard />
              <CanvaCard />
              <CanvaCard />
              <CanvaCard />
              <CanvaCard />
              <CanvaCard />
              <CanvaCard />
              <CanvaCard />
              <CanvaCard />
              <CanvaCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
