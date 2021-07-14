import React, { useState } from "react";
import SidebarCanva from "../Canva/SidebarCanva";
import "../Canva/CanvaQuerry.css";
import { GoPencil } from "react-icons/go";
import CreateIcon from "@material-ui/icons/Create";
import { MdDone } from "react-icons/md";
import "./Settings.css";
function Settings() {
  const [name, setname] = useState(false);
  const [email, setemail] = useState(false);
  const [savedSettings, setsavedSettings] = useState(false);
  const [nameInput, setnameInput] = useState([]);
  setTimeout(() => {
    setsavedSettings(false);
  }, 10000);
  return (
    <div>
      <SidebarCanva />{" "}
      {savedSettings == true ? (
        <div class="toasted toast-success toasted-primary default">
          <MdDone />
          Saved your privacy settings
        </div>
      ) : (
        ""
      )}
      <div class="mainCanvaSettings">
        <div class="settingsHeader">Your Settings</div>
        <div class="SettingsDivision">
          <div class="SettingsDivisionComponent">
            <div class="SettingsDivisionComponentQ">Preffered Name</div>
            {name == false ? (
              <div class="SettingsDivisionComponentA">Yash Jain</div>
            ) : (
              ""
            )}
            {name == true ? (
              " "
            ) : (
              <div class="SettingsDivisionComponentEdit">
                <GoPencil
                  onClick={(e) => {
                    if (name === true) {
                      setname(false);
                    } else {
                      setname(true);
                    }
                  }}
                />
              </div>
            )}
            {name === true ? (
              <div class="Nameinput">
                <div class="form__field ">
                  <input
                    class="form__input "
                    name="preferred_name"
                    id="preferred_name"
                    placeholder="Preferred Name"
                    type="text"
                    onChange={(e) => {
                      setnameInput(e.target.value);
                    }}
                    value={nameInput}
                  />
                </div>
                <div data-v-500e9fb5="" class="edit-buttons">
                  <button
                    onClick={(e) => {
                      setname(false);
                    }}
                    data-v-4a7785f2=""
                    data-v-500e9fb5=""
                    class="link--no-underline square-button edit-button square-button--secondary cursor__pointer"
                  >
                    <span data-v-4a7785f2="" class="square-button__title">
                      Cancel
                    </span>
                  </button>
                  <button
                    data-v-4a7785f2=""
                    data-v-500e9fb5=""
                    class={
                      name == true
                        ? "link--no-underline square-button edit-button square-button--primary square-button--disabled"
                        : "saveChange link--no-underline square-button edit-button square-button--primary square-button--disabled"
                    }
                    color="azul"
                  >
                    <span data-v-4a7785f2="" class="square-button__title">
                      Save
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              " "
            )}
          </div>
          <div class="SettingsDivisionComponent">
            <div class="SettingsDivisionComponentQ">Email Address</div>
            {email == false ? (
              <div class="SettingsDivisionComponentA">YashJain@sfkkd</div>
            ) : (
              ""
            )}
            {email === true ? (
              ""
            ) : (
              <div class="SettingsDivisionComponentEdit">
                <GoPencil
                  onClick={(e) => {
                    if (email === true) {
                      setemail(false);
                    } else {
                      setemail(true);
                    }
                  }}
                />
              </div>
            )}
            {email === true ? (
              <div class="Nameinput">
                <div class="form__field ">
                  <input
                    class="form__input "
                    name="preferred_name"
                    id="preferred_name"
                    placeholder="Preferred Name"
                    type="text"
                    value={nameInput}
                  />
                </div>
                <div data-v-500e9fb5="" class="edit-buttons">
                  <button
                    data-v-4a7785f2=""
                    onClick={(e) => {
                      setemail(false);
                    }}
                    data-v-500e9fb5=""
                    class="link--no-underline square-button edit-button square-button--secondary cursor__pointer"
                  >
                    <span data-v-4a7785f2="" class="square-button__title">
                      Cancel
                    </span>
                  </button>
                  <button
                    data-v-4a7785f2=""
                    data-v-500e9fb5=""
                    class="link--no-underline square-button edit-button square-button--primary square-button--disabled"
                    color="azul"
                  >
                    <span data-v-4a7785f2="" class="square-button__title">
                      Save
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              " "
            )}
          </div>
          <div class="SettingsDivisionComponent">
            <div class="SettingsDivisionComponentQ">Privacy</div>
            <div class="SettingsDivisionComponentA bold">
              <label class="switch">
                <input
                  onClick={(e) => {
                    setsavedSettings(true);
                  }}
                  type="checkbox"
                />
                <span class="slider round"></span>
              </label>
              Community Direct Messaging
            </div>
          </div>
          <div class="SettingsDivisionComponent">
            <div class="SettingsDivisionComponentQ">Email Preferences</div>
            <div class="SettingsDivisionComponentA SettingsDivisionComponentAColumn bold">
              <div
                onClick={(e) => {
                  setsavedSettings(true);
                }}
                class="SettingsDivisionComponentAColumnInside"
              >
                <label class="checkboxemail">
                  <input type="checkbox" />
                </label>
                Email Preferences
              </div>
              <div
                onClick={(e) => {
                  setsavedSettings(true);
                }}
                class="SettingsDivisionComponentAColumnInside"
              >
                <label class="checkboxemail">
                  <input type="checkbox" />
                </label>
                Email Preferences
              </div>
              <div
                onClick={(e) => {
                  setsavedSettings(true);
                }}
                class="SettingsDivisionComponentAColumnInside"
              >
                <label class="checkboxemail">
                  <input type="checkbox" />
                </label>
                Email Preferences
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
