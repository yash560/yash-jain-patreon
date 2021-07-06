import React from "react";
import "./SidebarCanva.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
function SidebarCanva() {
  return (
    <div>
      <div class="sidebar">
        <div class="sidebar__header">
          <div class="sidebarLogo">
            <img
              src="https://images.jumpstart.me/frontend/brand/canvas-logo-combined.svg"
              alt=""
              width="100%"
            />
          </div>
          <div class="sidebarIconsDiv">
            <div class="sidebarIcons">
              <img
                class="sidebarIcon"
                src="https://images.jumpstart.me/frontend/icons/settings.svg"
                alt=""
              />
            </div>
            <div class="sidebarIcons">
              <img
                class="sidebarIcon"
                src="https://images.jumpstart.me/frontend/icons/notifications.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="sidebarContainer">
          <div class="sidebarItemContainer">
            <div class="sidebarItemIcon">
              <HomeOutlinedIcon />
            </div>
            <div class="sidebarItemText">Home</div>
          </div>
          <div class="sidebarItemContainer">
            <div class="sidebarItemIcon">
              <ExploreOutlinedIcon />
            </div>
            <div class="sidebarItemText">Hobs & Events</div>
          </div>
          <div class="sidebarItemContainer">
            <div class="sidebarItemIcon">
              <PermIdentityOutlinedIcon />
            </div>
            <div class="sidebarItemText">User name</div>
          </div>
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
