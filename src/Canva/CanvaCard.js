import React, { useState } from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import "./CanvaCard.css";
import Skeleton from "react-loading-skeleton";
import MyLoader from "../Loader";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function CanvaCard({
  EventName,
  EventSubText,
  CompanyLogo,
  CompanyBackground,
}) {
  const [time, settime] = useState(true);
  const [vote, setvote] = useState(false);

  setTimeout(() => {
    settime(false);
  }, 1000);
  return (
    <div>
      {time == true ? (
        <div class="loadingCardCanva">
          {" "}
          <MyLoader />
        </div>
      ) : (
        ""
      )}
      {time == false ? (
        <div class="canvaBodyCard">
          <div class="canvaBodyCardContent">
            <div class="canvaBodyCardImage">
              <img
                src={CompanyBackground}
                class="canvaBodyCardCoverImage "
                alt=""
                srcset=""
              />
            </div>
            <div class="canvaBodyCardImageAbsolute">
              <div class="canvaBodyCardMain canvaBodyCardMainImage canvaBodyCardMain--border">
                <img src={CompanyLogo} width="100%" height="100%" />
              </div>
            </div>
            <div class="canvaBodyCardHeader">{EventName} </div>
            <div class="canvaBodyCardBody">{EventSubText} </div>

            <div class="canvaBodyCardFooterIcon">
              <div
                onClick={(e) => {
                  if (vote == true) {
                    setvote(false);
                  } else {
                    setvote(true);
                  }
                }}
                class={
                  vote === true
                    ? "canvaBodyCardsquarebuttonsecondaryUpvoted"
                    : "canvaBodyCardsquarebuttonsecondary"
                }
              >
                {vote == true ? "Upvoted" : "Upvote"}
                <div class={vote === true ? "upvotedArrow" : "ArrowJobsupvote"}>
                  <ArrowDropDownIcon />
                </div>
              </div>
              <div class="canvaBodyCardBody2">
                {vote == true ? 1 : 0} Interested
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CanvaCard;
