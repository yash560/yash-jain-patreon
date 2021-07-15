import React from "react";
import SidebarCanva from "../Canva/SidebarCanva";
import "./HomeCanva.css";
function HomeCanva() {
  return (
    <div>
      <SidebarCanva />
      <div class="HomeCanvamaincontainer">
        <div class="">
          <div class="title-32-demi">Welcome, Yash</div>
          <div class="align--center ui-12-regular details__members flex">
            <span class="members--count">343,458 members</span>
            <span>
              <span class="color--cement communities-header-details__divider">
                |
              </span>
              <span class="communities-header-details__online-dot"></span>
              6,121 online
            </span>
          </div>
          <div class="communities-home__intro">
            <a
              href="/Company"
              class="link--no-underline communities-discover-card communities-home__discover-card"
            >
              <img
                src="https://images.jumpstart.me/frontend/communities/Cover+Photo/Web/jobs-card.png"
                class="communities-discover-card__img"
              />
              <p class="communities-discover-card__text ui-14-semibold color--night">
                Find Jobs
              </p>
            </a>
            <a
              href="/Company"
              class="link--no-underline communities-discover-card communities-home__discover-card"
            >
              <img
                src="https://images.jumpstart.me/frontend/communities/Cover+Photo/Web/jobs-card.png"
                class="communities-discover-card__img"
              />
              <p class="communities-discover-card__text ui-14-semibold color--night">
                Find Jobs
              </p>
            </a>
            <a
              href="/Company"
              class="link--no-underline communities-discover-card communities-home__discover-card"
            >
              <img
                src="https://images.jumpstart.me/frontend/communities/Cover+Photo/Web/events-card.png"
                class="communities-discover-card__img"
              />
              <p class="communities-discover-card__text ui-14-semibold color--night">
                Discover Events
              </p>
            </a>
            <a
              href="/Company"
              class="link--no-underline communities-discover-card communities-home__discover-card"
            >
              <img
                src="https://images.jumpstart.me/frontend/communities/Cover+Photo/Web/companies-card.png"
                class="communities-discover-card__img"
              />
              <p class="communities-discover-card__text ui-14-semibold color--night">
                Browse Companies
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCanva;
