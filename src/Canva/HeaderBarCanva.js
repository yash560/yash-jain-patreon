import React from "react";
import "./HeaderBarCanva.css";
import DateRangeIcon from "@material-ui/icons/DateRange";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function HeaderBarCanva() {
  return (
    <div class="HeaderBarCanva">
      <div class="HeaderBarInsideWidth">
        <span class="HeaderBarCanvaLeft">
          <div class="HeaderBarItem">
            <DateRangeIcon fontSize="small" />
            <span class="HeaderBarItemtext">Events</span>
            <ArrowDropDownIcon />
            <div class="EventDropdown"></div>
          </div>
          <div class="HeaderBarItem">
            <span class="HeaderBarItemtext">Location</span>
          </div>
          <div class="HeaderBarItem">
            <span class="HeaderBarItemtext">Industry</span>
          </div>
          <div class="HeaderBarItem">
            <span class="HeaderBarItemtext">Company</span>
          </div>
        </span>
        <span class="HeaderBarCanvaRight">
          <div class="HeaderBarItem">
            <CalendarTodayIcon fontSize="small" />
            <span class="HeaderBarItemtext">Upcoming</span>
            <ArrowDropDownIcon />
          </div>
        </span>
      </div>
    </div>
  );
}

export default HeaderBarCanva;
