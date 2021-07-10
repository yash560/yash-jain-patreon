import React from "react";
import SidebarCanva from "../Canva/SidebarCanva";
import "../Canva/CanvaQuerry.css";

import "./Settings.css";
function Settings() {
  return (
    <div>
      <SidebarCanva />{" "}
      <div class="mainCanvaSettings">
        <div class="settingsHeader">Your Settings</div>
        <div class="SettingsDivision">
          <div class="SettingsDivisionComponent">
            <div class="SettingsDivisionComponentQ">Preffered Name</div>
            <div class="SettingsDivisionComponentA">Yash Jain</div>
            <div class="SettingsDivisionComponentEdit">
              <i class="fas fa-pencil-alt"></i>
            </div>
          </div>
          <div class="SettingsDivisionComponent">
            <div class="SettingsDivisionComponentQ">Email Address</div>
            <div class="SettingsDivisionComponentA">Yaashjainn@gmail.com</div>
            <div class="SettingsDivisionComponentEdit">
              <i class="fas fa-pencil-alt"></i>
            </div>
          </div>
          <div class="SettingsDivisionComponent">
            <div class="SettingsDivisionComponentQ">Preffered Name</div>
            <div class="SettingsDivisionComponentA">Yash Jain</div>
            <div class="SettingsDivisionComponentEdit">
              <i class="fas fa-pencil-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
