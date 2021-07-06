import React from "react";
import HeaderBarCanva from "./HeaderBarCanva";
import SidebarCanva from "./SidebarCanva";
import "./mainCanva.css";
import CanvaCard from "./CanvaCard";
function Canva() {
  return (
    <div>
      <SidebarCanva />
      <HeaderBarCanva />
      <div class="mainCanva">
        <input
          class="input"
          type="text"
          placeholder="Search Events"
          name=""
          id=""
        />
        <div class="card">
          <div class="MainBodyHeader">UPCOMING EVENTS</div>
          <div class="CardsContainer">
            <CanvaCard /> <CanvaCard />
            <CanvaCard />
            <CanvaCard />
            <CanvaCard /> <CanvaCard />
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
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Canva;
