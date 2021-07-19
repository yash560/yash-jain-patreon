import React, { useState } from "react";
import "./SidebarCanva.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import { Link, useHistory } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";
function SidebarCanva() {
  const [Canva_settingsOpen, setCanva_settingsOpen] = useState(false);
  const history = useHistory();
  return (
    <div>
      <div class="Canva_sidebar">
        {Canva_settingsOpen == true ? (
          <div class="Canva_settings">
            <div class="Canva_settingsheader">
              <span>Your Account</span>
              <div class=" Canva_settingsheaderClose ">
                <GrFormClose
                  onClick={() => {
                    setCanva_settingsOpen(false);
                  }}
                />
              </div>{" "}
            </div>
            <div
              onClick={(e) => {
                history.push("/Settings");
              }}
              class="Canva_settingsbody"
            >
              Settings
            </div>
            <div class="Canva_settingsbody">Refferal</div>
            <div class="Canva_settingsbody">Logout</div>
          </div>
        ) : (
          " "
        )}
        <div class="Canva_sidebar__header">
          <i class="fas fa-bars"></i>
          <div class="Canva_sidebarLogo">
            <img
              src="https://images.jumpstart.me/frontend/brand/canvas-logo-combined.svg"
              alt=""
              width="100%"
            />
          </div>
          <div class="Canva_sidebarIconsDiv">
            <div
              onClick={() => {
                if (Canva_settingsOpen === true) {
                  setCanva_settingsOpen(false);
                } else {
                  setCanva_settingsOpen(true);
                }
              }}
              class="Canva_sidebarIcons"
            >
              <img
                class="Canva_sidebarIcon"
                src="https://images.jumpstart.me/frontend/icons/settings.svg"
                alt=""
              />
            </div>

            <div class="Canva_sidebarIcons">
              <img
                class="Canva_sidebarIcon"
                src="https://images.jumpstart.me/frontend/icons/notifications.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            setCanva_settingsOpen(false);
          }}
          class="Canva_sidebarContainer"
        >
          <Link
            to="/homes"
            class={
              window.location.pathname == "/homes"
                ? "Canva_sidebarItemContainerSelected"
                : "Canva_sidebarItemContainer"
            }
          >
            <div class="Canva_sidebarItemIcon">
              <HomeOutlinedIcon />
            </div>
            <div class="Canva_sidebarItemText">Home</div>
          </Link>
          <Link
            to="/for_you"
            class={
              window.location.pathname == "/for_you"
                ? "Canva_sidebarItemContainerSelected"
                : "Canva_sidebarItemContainer"
            }
          >
            <div class="Canva_sidebarItemIcon">
              <HomeOutlinedIcon />
            </div>
            <div class="Canva_sidebarItemText">For you</div>
          </Link>
          <Link
            to="/Jobs"
            class={
              window.location.pathname == "/Jobs"
                ? "Canva_sidebarItemContainerSelected"
                : "Canva_sidebarItemContainer"
            }
          >
            <div class="Canva_sidebarItemIcon">
              <ExploreOutlinedIcon />
            </div>
            <div class="Canva_sidebarItemText">Jobs & Events</div>
          </Link>
          <Link
            to="/Hiring"
            class={
              window.location.pathname == "/Hiring"
                ? "Canva_sidebarItemContainerSelected"
                : "Canva_sidebarItemContainer"
            }
          >
            <div class="Canva_sidebarItemIcon">
              <PermIdentityOutlinedIcon />
            </div>
            <div class="Canva_sidebarItemText">Hiring</div>
          </Link>{" "}
          <Link
            to="/Profile"
            class={
              window.location.pathname == "/Profile"
                ? "Canva_sidebarItemContainerSelected"
                : "Canva_sidebarItemContainer"
            }
          >
            <div class="Canva_sidebarItemIcon">
              <PermIdentityOutlinedIcon />
            </div>
            <div class="Canva_sidebarItemText">Profile</div>
          </Link>
          <div class="Canva_sidebarSectionHeader">
            <div class="Canva_sidebarSectionHeaderText">Communities (3)</div>
            <div class="Canva_sidebarJoinButton">
              <AddOutlinedIcon />
              Join
            </div>
          </div>
          <div class="Canva_sidebarItemContainer">
            <div class="Canva_sidebarItemIcon">
              <img
                src="https://s3-us-west-1.amazonaws.com/images.jumpstart.me/frontend/communities/logos/general-advice.png"
                alt=""
                height="100%"
              />
            </div>
            <div class="Canva_sidebarItemText">General Advice</div>
          </div>
          <div class="Canva_sidebarItemContainer">
            <div class="Canva_sidebarItemIcon">
              <img
                src="https://jumpstart-static.s3.amazonaws.com/backend/mediauploads/media/rBhfs_uAR3CNdYZ1Bh8tpg.png"
                alt=""
                height="100%"
              />
            </div>
            <div class="Canva_sidebarItemText">Recruiter Announcements</div>
          </div>
          <div class="Canva_sidebarItemContainer">
            <div class="Canva_sidebarItemIcon">
              <img
                src="https://s3-us-west-1.amazonaws.com/images.jumpstart.me/frontend/communities/logos/remote-work.png"
                alt=""
                height="100%"
              />
            </div>
            <div class="Canva_sidebarItemText">Remote Work</div>
          </div>
          <div class="Canva_sidebarSectionHeader">
            <div class="Canva_sidebarSectionHeaderText">Direct messages</div>
          </div>
          <div class="Canva_sidebarItemContainer">
            <input
              class="Canva_sidebarSearchbar"
              type="text"
              placeholder="Search"
            />
          </div>
          <div class="Canva_sidebarItemContainer">
            <div class="Canva_sidebarItemIcon">
              <img
                src="https://jumpstart-static.s3.amazonaws.com/backend/organizations/organization/C8wb0Bk6STe_UhZ8KyhF_g.png"
                alt=""
                height="100%"
              />
            </div>
            <div class="Canva_sidebarItemText">Team Canvas</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarCanva;
