import React from "react";
import Navbar from "../components/navbar";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
export default function BlogScreen() {
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        width: "100vw",
        backgroundColor: "#0F172A",
      }}
    >
      <div
        style={{
          alignSelf: "center",
          width: "70%",
        }}
      >
        {" "}
        <Navbar />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            alignSelf: "center",
            width: "60%",
            textAlign: "center",
          }}
        >
          <figure class="max-w-screen-md">
            <figcaption class="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
              <img
                class="w-6 h-6 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                alt="profile picture"
              />
              <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
                <cite
                  style={{ color: "white" }}
                  class="pe-3 font-medium text-gray-900 dark:text-white"
                >
                  Bonnie Green
                </cite>
                <cite class="ps-3 text-sm text-gray-500 dark:text-gray-400">
                  CTO at Flowbite
                </cite>
              </div>
            </figcaption>
          </figure>
          <p
            style={{
              color: "#fff",
              fontSize: "2rem",
              fontWeight: "bold",
              width: "100%",
              marginTop: "2rem",
              textAlign: "center",
              fontFamily: "Poppins",
              margin: "0",
              padding: "0",
            }}
          >
            Easy Analysis, Creative Generation & Smart Recommendation
          </p>{" "}
        </div>

        <div
          style={{
            alignSelf: "center",
            alignContent: "center",
            width: "70%",
            flex: 1,
            display: "flex",
            flexDirection: "row",
            marginTop: "2rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              // backgroundColor: "red",
              width: "50%",
            }}
          >
            {" "}
            <img
              style={{
                borderRadius: "10px",
                width: "85%",
                height: "300px",
              }}
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1684760280335/18820209-b284-4c4c-b811-5ba7e85e3676.jpeg"
              alt="profile picture"
            />
            <div
              style={{
                marginTop: "20px",
                alignItems: "center",
                display: "flex",
                flex: 1,
                marginRight: "3rem",
                alignContent: "center",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span
                  style={{
                    backgroundColor: "#0F172A",
                    color: "#fff",
                    width: "11rem",
                    height: "2.3rem",
                  }}
                  class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >
                  Back{" "}
                </span>
              </button>
              <button
                style={{
                  width: "11rem",
                  marginTop: -8,
                  height: "2.5rem",
                }}
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read Full- Hashnode
              </button>
            </div>{" "}
          </div>
          <div
            style={{
              marginLeft: "-2rem",
              flex: 1,
            }}
          >
            {" "}
            <p
              style={{
                marginTop: "1rem",
                textAlign: "left",
                color: "#fff",
                fontSize: "0.95rem",
                fontWeight: "500",
                fontFamily: "Poppins",
                margin: "0",
                padding: "0",
              }}
            >
              <em>
                "As I am referencing the real Star Wars website for the
                inspiration for this Ahsoka React app, I'm closely mimicking the
                site's structure. When you navigate to the Databank Ahsoka
                section, you will see a list of category links, characters,
                creatures, droids, and more. You will also find a variety of
                clickable small cards on the page, each featuring a name, image,
                and lightsaber icon. When you click on a small card, you are
                directed to a new page featuring a similar, larger card that now
                includes a paragraph of information about the selected item. So,
                for my project, I created a "small card content" component that
                closely resembles the small cards as seen on the Star Wars
                website, and when clicked on, a corresponding large card renders
                to the webpage. The SmallCardContent component is designed to
                display a small card for each Star Wars selected category item (
                the default category is characters). It takes in several props
                that determine its content and behavior."
              </em>
              <br />
              <span
                style={{
                  color: "skyblue",
                  fontSize: "1rem",
                  fontWeight: "475",
                  fontFamily: "Poppins",
                  margin: "0",
                  padding: "0",
                }}
              >
                AI Summerized
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
