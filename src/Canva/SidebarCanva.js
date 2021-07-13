import React, { useState } from "react";
import "./SidebarCanva.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import { Link, useHistory } from "react-router-dom";
function SidebarCanva() {
  const [settingsOpen, setsettingsOpen] = useState(false);
  const history = useHistory();
  return (
    <div>
      <div class="sidebar">
        {settingsOpen == true ? (
          <div class="settings">
            <div class="settingsheader">
              <span>Your Account</span>
              <i
                onClick={() => {
                  setsettingsOpen(false);
                }}
                class="fas settingsheaderClose fa-times"
              ></i>
            </div>
            <div class="settingsbody">Settings</div>
            <div class="settingsbody">Refferal</div>
            <div class="settingsbody">Logout</div>
          </div>
        ) : (
          " "
        )}
        <div class="sidebar__header">
          <i class="fas fa-bars"></i>
          <div class="sidebarLogo">
            <img
              src="https://images.jumpstart.me/frontend/brand/canvas-logo-combined.svg"
              alt=""
              width="100%"
            />
          </div>
          <div class="sidebarIconsDiv">
            {settingsOpen == true ? (
              <div
                onClick={() => {
                  setsettingsOpen(false);
                }}
                class="sidebarIcons"
              >
                <img
                  class="sidebarIcon"
                  src="https://images.jumpstart.me/frontend/icons/settings.svg"
                  alt=""
                />
              </div>
            ) : (
              <div
                onClick={() => {
                  setsettingsOpen(true);
                }}
                class="sidebarIcons"
              >
                <img
                  class="sidebarIcon"
                  src="https://images.jumpstart.me/frontend/icons/settings.svg"
                  alt=""
                />
              </div>
            )}
            <div class="sidebarIcons">
              <img
                class="sidebarIcon"
                src="https://images.jumpstart.me/frontend/icons/notifications.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            setsettingsOpen(false);
          }}
          class="sidebarContainer"
        >
          <div
            class={
              window.location.pathname == ""
                ? "sidebarItemContainerSelected"
                : "sidebarItemContainer"
            }
          >
            <div class="sidebarItemIcon">
              <HomeOutlinedIcon />
            </div>
            <div class="sidebarItemText">Home</div>
          </div>
          <Link
            to="/Jobs"
            class={
              window.location.pathname == "/Jobs"
                ? "sidebarItemContainerSelected"
                : "sidebarItemContainer"
            }
          >
            <div class="sidebarItemIcon">
              <ExploreOutlinedIcon />
            </div>
            <div class="sidebarItemText">Jobs & Events</div>
          </Link>
          <Link
            to="/Profile"
            class={
              window.location.pathname == "/Profile"
                ? "sidebarItemContainerSelected"
                : "sidebarItemContainer"
            }
          >
            <div class="sidebarItemIcon">
              <PermIdentityOutlinedIcon />
            </div>
            <div class="sidebarItemText">My Profile</div>
          </Link>{" "}
          <Link
            to="/Modal"
            class={
              window.location.pathname == "/Modal"
                ? "sidebarItemContainerSelected"
                : "sidebarItemContainer"
            }
          >
            <div class="sidebarItemIcon">
              <PermIdentityOutlinedIcon />
            </div>
            <div class="sidebarItemText">Hiring</div>
          </Link>
          <div class="sidebarSectionHeader">
            <div class="sidebarSectionHeaderText">Communities (3)</div>
            <div class="sidebarJoinButton">
              <AddOutlinedIcon />
              Join
            </div>
          </div>
          <div class="sidebarItemContainer">
            <div class="sidebarItemIcon">
              <img
                src="https://s3-us-west-1.amazonaws.com/images.jumpstart.me/frontend/communities/logos/general-advice.png"
                alt=""
                height="100%"
              />
            </div>
            <div class="sidebarItemText">General Advice</div>
          </div>
          <div class="sidebarItemContainer">
            <div class="sidebarItemIcon">
              <img
                src="https://jumpstart-static.s3.amazonaws.com/backend/mediauploads/media/rBhfs_uAR3CNdYZ1Bh8tpg.png"
                alt=""
                height="100%"
              />
            </div>
            <div class="sidebarItemText">Recruiter Announcements</div>
          </div>
          <div class="sidebarItemContainer">
            <div class="sidebarItemIcon">
              <img
                src="https://s3-us-west-1.amazonaws.com/images.jumpstart.me/frontend/communities/logos/remote-work.png"
                alt=""
                height="100%"
              />
            </div>
            <div class="sidebarItemText">Remote Work</div>
          </div>
          <div class="sidebarSectionHeader">
            <div class="sidebarSectionHeaderText">Direct messages</div>
          </div>
          <div class="sidebarItemContainer">
            <input class="sidebarSearchbar" type="text" placeholder="Search" />
          </div>
          <div class="sidebarItemContainer">
            <div class="sidebarItemIcon">
              <img
                src="https://jumpstart-static.s3.amazonaws.com/backend/organizations/organization/C8wb0Bk6STe_UhZ8KyhF_g.png"
                alt=""
                height="100%"
              />
            </div>
            <div class="sidebarItemText">Team Canvas</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarCanva;
