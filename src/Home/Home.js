import React from "react";
import "./home.css";
import "./homeQuerry.css";

import Footer from "../Footer";
function Home() {
  return (
    <div>
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
          </div>
          <div class="headerRight">
            <input
              class="headerSearchbar"
              type="text"
              name="search"
              placeholder="Find a Creator "
            />
            <div class="headerRightComponent">Log In</div>
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
      <div class="homeMain">
        <div class="homeLeft">
          <div class="homeleft1">
            <div class="homeleft1InnerUser"></div>
            <div class="homeleft1Inner">Yash Jain</div>
          </div>
          <div class="homeLeft2">
            <div class="homeLeft2Text">SUPPORTING</div>
          </div>{" "}
          <div class="homeLeft3">
            <div class="homeLeft3Text">
              You aren’t supporting any creators yet.
            </div>
          </div>
        </div>{" "}
        <div class="homeCenter">
          <div class="homeCenterStart">
            <div class="homeCenterStartComp">
              <div class="homeCenterStartLeft">All Posts</div>{" "}
              <div class="homeCenterStartLeft homeCenterStartLeftNotSelected">
                Patron-only posts
              </div>
            </div>{" "}
            <div class="homeCenterStartComp">
              <div class="homeCenterStartRight">
                <div class="homeCenterStartRightText">
                  Showing: All Creators
                </div>
              </div>
            </div>
          </div>
          <div class="homeCenterEnd">
            <div class="homeCenterEndText">
              Support or follow creators to see posts in your feed.
            </div>
            <div class="homeCenterEndButton">Find creators you love</div>
            <img
              class="homeCenterEndImg"
              src="https://c5.patreon.com/external/home/empty-stream-illustration.png"
              alt=""
            />
          </div>
        </div>
        <div class="homeLeft homeRight">
          <div class="homeLeft2">
            <div class="homeLeft2Text">BECOME A CREATOR</div>
          </div>{" "}
          <div class="homeLeft3">
            <div class="homeLeft3Text">
              Build a membership for your fans and get paid to create on your
              own terms.
            </div>{" "}
            <div class="homeLeft3Button">Get started</div>
          </div>{" "}
          <div class="homeLeft2">
            <div class="homeLeft2Text">FIND CREATORS YOU LOVE</div>
          </div>{" "}
          <div class="homeLeft3">
            <div class="homeLeft3Text">
              The creators you already love may be on Patreon – connect your
              social media to find them.
            </div>
            <div class="homeLeft3Button">Get started</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
