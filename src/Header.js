import React from "react";
import "./Header.css";
import "./headerMediaQuerry.css";

import MicIcon from "@material-ui/icons/Mic";
import VideocamIcon from "@material-ui/icons/Videocam";
function Header() {
  return (
    <div>
      <div class="header">
        <div class="headerLeft">
          <div class="headerLogo">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX////yaVYELUq3vsQAFzwAEDnS19vL0dUAEjryZVHyZlLxX0rxXEbxYUzxXUfxWUL+9/b+8fD84d75vbb0f3D2mI33pZvr7e/y9PUAACoAACb0iHvzeWj4s6v1lIjzdGL2npT72tb6zMf5w731jH/84t/3rqXyblv96ef4t6/71ND3qZ/iK0FDAAAD90lEQVR4nO3ceXOiMBjHcdjuFUgIqLiH1rteff/vb0Ft7SV5QlKeMPv7zOyf2/E7QAIxGEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYO3Xj3d+2/2FvCiK/HM+nBd3f36+8fc79f8OhotRIrWsqWl5OAYZevf1yxvfSIXFcJJlSiTxk0SoVE+3g8/+wNbaFa5GUl3jrhIld/eBHckWhfm9Sj/Ke4rU5b6Tj05kX3hI1c28M6HLoptPT2FbeIxTQ9+pUd53FWBkWTjTt8/PV9J5KKeqVeEgFrS+SqKHHWY0sClcUw/gWTbrMuQmi8JHadNXUdMQJg56YZlZBlYDzi6ARHJhSRlDQ0ykFo7bBFaJ866D3iEWHmyvwefESedJb9AKl7plYDUxjruPeoVUmJvu05roFUPWC6TCCX2i/4DiHW0oheu2F+GZ2HCEPSMU5u2G0St5ZEm7IBSOXa7CWrJjSbswFxZu52gt5bwJNxeWTsPMBU/cibHQwyGsDuKaKS8iFG5dr8JaMmXKiwiFPs7RajjlW2U0FS7tn5k+Ivju3UyFCz/HMFZcgcZCq3WLBhnbaWoofPAxktYU2/KioXDoYyStJaNAC71M9ydsF6KhcO7rOowl1wqxodDPXFFLuR4wmgv3vgaa6izluvtuLly6PhpeiccgC1ceC8sgC9e+JotquuBay2gu9DYdVoVcC6fdFXJN+d2dpWEew7XHkYbr28TmwqPHwkWQhQN/9zRqG2Shl2WoSyHXYpThvtTfSJMtwywc+Xu24Pp+xlA49vZ8yLYobCj0dmPKdltqKvQ21PCtepvW2qaeLkTNtpfPVHjwM5oyLuubCov2exReYnvCJ3xv4We+YJsrCIVeRlO22+6I8g2ph8BYPvDU1cyFQ/eDyPZsWCPsVHA/hJrxEFIKV66PUJxXIW3HkOtwmrHu3KcUOs6JGe+Gb9K+tqHLeSrYvlc7o+2+dNm6x7xxj7qDNm59KWquZ/snxMJ920lRMu4VOqPu8x60G20k1wrbFXmvfquN0Bn3FujI5n2LpbS+FgM4glbvzOyF5YgaxptPNu895VOb8UawrZC+Zvd23pj+blc64n9d5sTy/cPljrZuI+ShswQD67dkt9p8NSZ6E85rsvbvAecL2XwchRyFcQWetXlbvXi8/TJ3ovQmpL7WvziwmuhUvKsUSs8P4ZyfZ21/UyHKV+N5lqVKCJFU/5TKZDxbh5YXORTW8sHqMC43m81ssV0vA6yrORX2Agr7D4X9h8L+Q2H/obD/UNh/KOw/FPYfCvsPhf2Hwv77Dwodfim5H9x/7RoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA69A8B1kXlZ3OYWgAAAABJRU5ErkJggg=="
              alt=""
              class="logoImage"
            />
          </div>
          {/* <div class="headerLeftComponent productComponent">
            Product<i class="fas fa-chevron-down"></i>
            <div class="productDropdown">
              <div class="productDropdownComponent">
                <div class="productDropdownComponentHead">Lite</div>
                <div class="productDropdownComponentBody">
                  Simple tools to set up recurring support from your fans
                </div>
              </div>
              <div class="productDropdownComponent">
                <div class="productDropdownComponentHead">Pro</div>
                <div class="productDropdownComponentBody">
                  All the tools to build and grow a thriving membership business
                </div>
              </div>
              <div class="productDropdownComponent">
                <div class="productDropdownComponentHead">Premium</div>
                <div class="productDropdownComponentBody">
                  For established creators and creative business
                </div>
              </div>
            </div>
          </div> */}
          {/* <div class="headerLeftComponent creatorComponent">
            For creators<i class="fas fa-chevron-down"></i>
            <div class="creatorDropdown">
              <div class="creatorDropdownComponent">
                <div class="creatorDropdownComponentHead">
                  <MicIcon />
                </div>
                <div class="creatorDropdownComponentBody">Podcasters </div>
              </div>
              <div class="creatorDropdownComponent">
                <div class="creatorDropdownComponentHead">
                  <VideocamIcon />
                </div>
                <div class="creatorDropdownComponentBody">Video Creator </div>
              </div>
              <div class="creatorDropdownComponent">
                <div class="creatorDropdownComponentHead">
                  <MicIcon />
                </div>
                <div class="creatorDropdownComponentBody">Musician </div>
              </div>
              <div class="creatorDropdownComponent">
                <div class="creatorDropdownComponentHead">
                  <MicIcon />
                </div>
                <div class="creatorDropdownComponentBody">Visual Creators </div>
              </div>
              <div class="creatorDropdownComponent">
                <div class="creatorDropdownComponentHead">
                  <MicIcon />
                </div>
                <div class="creatorDropdownComponentBody">Communities </div>
              </div>
              <div class="creatorDropdownComponent">
                <div class="creatorDropdownComponentHead">
                  <MicIcon />
                </div>
                <div class="creatorDropdownComponentBody">
                  Writers and Journalists
                </div>
              </div>
              <div class="creatorDropdownComponent">
                <div class="creatorDropdownComponentHead">
                  <MicIcon />
                </div>
                <div class="creatorDropdownComponentBody">Gaming Creators </div>
              </div>
              <div class="creatorDropdownComponent">
                <div class="creatorDropdownComponentHead">
                  <MicIcon />
                </div>
                <div class="creatorDropdownComponentBody">Nonprofits </div>
              </div>
              <div class="creatorDropdownComponent">
                <div class="creatorDropdownComponentHead">
                  <MicIcon />
                </div>
                <div class="creatorDropdownComponentBody">
                  Tutorials and Education
                </div>
              </div>
              <div class="creatorDropdownComponent">
                <div class="creatorDropdownComponentHead">
                  <MicIcon />
                </div>
                <div class="creatorDropdownComponentBody">Local Businesses</div>
              </div>
              <div class="creatorDropdownComponent">
                <div class="productDropdownComponentBody">
                  Creators of all Kinds
                </div>
              </div>
            </div>
          </div> */}
          <div class="headerLeftComponent">Home</div>
          {/* <div class="headerLeftComponent resourcesComponent">
            <i class="fas fa-chevron-down"></i>
            <div class="resourcesDropdown">
              <div class="creatorDropdownComponent">
                <div class="creatorDropdownComponentBody">Blog </div>
              </div>
              <div class="creatorDropdownComponent">
                <div class="creatorDropdownComponentBody">
                  Creator Community{" "}
                </div>
              </div>
              <div class="creatorDropdownComponent">
                <div class="creatorDropdownComponentBody">Events </div>
              </div>
              <div class="creatorDropdownComponent">
                <div class="creatorDropdownComponentBody">Patreon U </div>
              </div>
              <div class="creatorDropdownComponent">
                <div class="creatorDropdownComponentBody">App Directory </div>
              </div>
              <div class="creatorDropdownComponent">
                <div class="creatorDropdownComponentBody">
                  Help Center and FAQ{" "}
                </div>
              </div>
            </div>
          </div> */}
          <div class="headerLeftComponent">Community</div>
        </div>
        <div class="headerRight">
          {/* <input
            class="headerSearchbar"
            type="text"
            name="search"
            placeholder="Find a Creator "
          /> */}
          <div class="headerRightComponent">Log In</div>
          <div class="createAccountButton">Join us</div>
        </div>
      </div>{" "}
      <div class="headerSm">
        <input
          class="headerSearchbarSM"
          type="text"
          name="search"
          placeholder="Find a Creator "
        />
      </div>
    </div>
  );
}

export default Header;
