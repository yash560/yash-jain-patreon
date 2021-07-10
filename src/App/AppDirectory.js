import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import "./AppDirectory.css";
function AppDirectory() {
  return (
    <div>
      <Header />
      <div class=" flex items-center justify-center w-screen h-96">
        <div class="mt-64 ml-24 h-full w-1/2   ">
          <div class=" mb-2 tracking-widest text-sm font-bold">
            APP DIRECTORY
          </div>

          <div class=" mb-2  text-4xl font-bold">Works with Patreon</div>
          <div class="text-xl pr-20 text-gray-500 w-5/6 ">
            As a creator on Patreon, we want to make your creative business run
            smoothly and support you adding value to your patrons. Check out all
            the tools, benefits, and perks creators on Patreon can use.
          </div>
        </div>
        <div class="mt-32 pr-20 h-full w-1/2   ">
          <img
            src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/pro-connect-apps-vimeo-updates.lg_2x.png"
            alt=""
            srcset=""
          />
        </div>
      </div>{" "}
      // Second screen
      <div class=" flex items-center flex-row justify-center w-screen ">
        <div class="mt-32  h-full w-1/2  p-12 ">
          <div class=" mb-2  w-full text-4xl text-center font-bold">
            Featured{" "}
          </div>
          <div class="text-x text-center text-gray-400 w-full">
            Connect Patreon with these top apps and tools that benefit you and
            your patrons
          </div>
        </div>
      </div>{" "}
      <div class=" flex flex-row items-center justify-center h-80 w-full">
        <div class=" justify-center items-center bg-white  ">
          <div class="flex flex-col justify-center items-center">
            {" "}
            <img
              class="w-80 h-40 bg-cover"
              src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2021/02/vimeo_icon_white_on_blue.jpg"
            />
            <h2 class="text-gray-800 text-1xl text-center font-semibold">
              Vimeo{" "}
            </h2>
            <p class="mt-2 text-center text-gray-600">
              Securely share exclusive videos just to your patrons{" "}
            </p>
          </div>
        </div>
        <div class=" py-4 px-8 justify-center items-center bg-white  ">
          <div class="flex flex-col justify-center items-center">
            {" "}
            <img
              class="w-80 h-40 bg-cover"
              src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2021/02/vimeo_icon_white_on_blue.jpg"
            />
            <h2 class="text-gray-800 text-1xl text-center font-semibold">
              Vimeo{" "}
            </h2>
            <p class="mt-2 text-center text-gray-600">
              Securely share exclusive videos just to your patrons{" "}
            </p>
          </div>
        </div>
        <div class=" justify-center items-center bg-white  ">
          <div class="flex flex-col justify-center items-center">
            {" "}
            <img
              class="w-80 h-40 bg-cover"
              src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2021/02/vimeo_icon_white_on_blue.jpg"
            />
            <h2 class="text-gray-800 text-1xl text-center font-semibold">
              Vimeo{" "}
            </h2>
            <p class="mt-2 text-center text-gray-600">
              Securely share exclusive videos just to your patrons{" "}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AppDirectory;
