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

        height: "100vh",
        width: "100vw",
        backgroundColor: "#0F172A",
      }}
    >
      <div
        style={{
          alignSelf: "center",
          width: "70%",
          marginTop: 30,
        }}
      >
        {" "}
        <Navbar />
      </div>
      <div
        style={{
          flex: 1,
          marginLeft: "-15px",
          display: "flex",
          flexDirection: "column",
          marginTop: "-100px",

          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            alignSelf: "center",
            alignContent: "center",
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
            width: "50%",
            marginTop: "2rem",
            textAlign: "center",
          }}
        >
          <img
            height={100}
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1684760280335/18820209-b284-4c4c-b811-5ba7e85e3676.jpeg"
            alt="profile picture"
          />
          <p
            style={{
              marginTop: "1rem",
              color: "#A29191",
              fontSize: "1.3rem",
              fontWeight: "bold",
              fontFamily: "Poppins",
              margin: "0",
              padding: "0",
            }}
          >
            Unlock the power of MindsDB to turn data into content gold. Create,
            analyze, and protect your brand seamlessly.{" "}
          </p>{" "}
        </div>
        <div
          style={{
            alignSelf: "center",
            alignContent: "center",
            width: "60%",
            marginTop: "3rem",
            textAlign: "center",
          }}
        >
          <Link to="https://www.github.com">
            <button
              style={{
                width: "11rem",
                marginRight: "1rem",
                height: "2.5rem",
              }}
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              GitHub{" "}
            </button>
          </Link>
          <Link to="/dashboard">
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
                Start the Journey{" "}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
