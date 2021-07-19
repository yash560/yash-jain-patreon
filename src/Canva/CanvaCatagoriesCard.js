import React, { useState } from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import "./CanvaCard.css";
import Skeleton from "react-loading-skeleton";
import MyLoader from "../Loader";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function CanvaCatagoriesCard({
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
      <div>
        {time == true ? (
          <div class="loadingCardCanva">
            <MyLoader />{" "}
          </div>
        ) : (
          ""
        )}
        {time == false ? (
          <div class="canvaBodyCardCatagory">
            <div class="canvaBodyCardContent">
              <img
                src={CompanyBackground}
                class="canvaBodyCardCoverImagecatagory "
                alt=""
                srcset=""
              />
              <div class="canvaBodyCardHeader canvaBodyCardHeaderCatagory">
                {EventName}{" "}
              </div>
              <div class="canvaBodyCardBody">{EventSubText} </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CanvaCatagoriesCard;
