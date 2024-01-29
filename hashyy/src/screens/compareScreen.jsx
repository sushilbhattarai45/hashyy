import React from "react";
import Navbar from "../components/navbar";
import { ToastContainer } from "react-toastify";
import Charts from "../components/charts";
export default function Compare() {
  const columnContainerStyle = {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    alignContent: "center",
    marginTop: "3rem",
    justifyContent: "center",
    flex: 1,
    width: "70%",
  };

  const columnStyle = {
    flex: 1,
    marginTop: "-20px",

    alignSelf: "center",
    margin: "10px",
    padding: "20px",
    border: "1px solid white",
    borderRadius: "8px",
  };

  const bannerStyle = {
    width: "100%",
    borderRadius: "8px",
  };

  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",

        height: "auto",
        width: "100vw",
        backgroundColor: "#0F172A",
        flex: 1,
      }}
    >
      <ToastContainer />
      <div
        style={{
          alignSelf: "center",
          alignContent: "center",
          justifyContent: "center",
          flex: 1,

          width: "70%",
          marginTop: 30,
        }}
      >
        <Navbar />
      </div>
      <div
        style={{
          alignSelf: "center",
          width: "70%",
          marginTop: "3rem",
          justifyContent: "flex-start",
          textAlign: "left",
        }}
      >
        <p
          style={{
            color: "#fff",
            fontSize: "1.5rem",
            marginLeft: "2rem",
            fontWeight: "bold",
            width: "70%",
            textAlign: "left",
            fontFamily: "Poppins",
            margin: "0",
            padding: "0",
          }}
        >
          Compare Blogs :
          <br />
        </p>{" "}
      </div>
      <div style={columnContainerStyle}>
        {/* First Column */}
        <div style={columnStyle}>
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1706268016864/5aba36b5-07e5-4892-81f7-a7319f536526.jpeg"
            alt="First Banner"
            style={bannerStyle}
          />
          <div
            style={{
              width: "100%",
              marginTop: "2rem",
            }}
          >
            <figure class="max-w-screen-md">
              <figcaption class="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
                <img
                  class="w-6 h-6 rounded-full"
                  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1696817918392/L30XcRGpk.jpeg"
                  alt="profile picture"
                />
                <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
                  <cite
                    style={{ color: "white" }}
                    class="pe-3 font-medium text-gray-900 dark:text-white"
                  >
                    Sushil Bhattarai
                  </cite>
                  <cite class="ps-3 text-sm text-gray-500 dark:text-gray-400">
                    @sushil_bhattarai45
                  </cite>
                </div>
              </figcaption>
            </figure>
            <div
              style={{
                height: "10px",
              }}
            ></div>
            <p
              style={{
                color: "#fff",
                fontSize: "1rem",
                fontWeight: "bold",
                width: "100%",
                marginTop: "0.7rem",
                fontFamily: "Poppins",
                margin: "0",
                padding: "0",
              }}
            >
              Authentication and Authorization concepts you must know
            </p>{" "}
          </div>
          <div
            style={{
              height: "20px",
            }}
          ></div>
          <p
            style={{
              marginTop: "1.1rem",
              textAlign: "left",
              color: "#fff",
              fontSize: "1rem",
              fontWeight: "500",
              fontFamily: "Poppins",
              margin: "0",
              padding: "0",
            }}
          >
            <em>
              {" "}
              Summary: This blog post discusses the "Cannot set headers after
              they are sent to the client" error in node.js and express. The
              author shares their experience with encountering this error and
              provides steps to fix it. The root cause of the error is
              identified as improperly written asynchronous code that allows
              multiple branches to send a response. Examples of code snippets
              causing this error are also provided, along with the correct
              approach to fixing them. The post concludes with the author's
              call-to-action, inviting readers to share their own
              troubleshooting experiences.
            </em>
            <br /> <br />-
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
          </p>{" "}
          <div
            style={{
              height: "20px",
            }}
          ></div>
          <div
            style={{
              marginRight: "40px",
              alignItems: "center",
              justifyContent: "space-around",
            }}
            class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
          >
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span
                style={{
                  backgroundColor: "#0F172A",
                  color: "#fff",
                  width: "13rem",
                  height: "2.3rem",
                }}
                class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
              >
                GitHub{" "}
              </span>
            </button>
            <button
              style={{
                width: "13rem",
                height: "2.5rem",
                marginTop: "-0.5rem",
              }}
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Hashnode
            </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          {/* <Charts /> */}
        </div>

        {/* Second Column */}
        <div style={columnStyle}>
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1706268016864/5aba36b5-07e5-4892-81f7-a7319f536526.jpeg"
            alt="First Banner"
            style={bannerStyle}
          />
          <div
            style={{
              width: "100%",
              marginTop: "2rem",
            }}
          >
            <figure class="max-w-screen-md">
              <figcaption class="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
                <img
                  class="w-6 h-6 rounded-full"
                  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1696817918392/L30XcRGpk.jpeg"
                  alt="profile picture"
                />
                <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
                  <cite
                    style={{ color: "white" }}
                    class="pe-3 font-medium text-gray-900 dark:text-white"
                  >
                    Sushil Bhattarai
                  </cite>
                  <cite class="ps-3 text-sm text-gray-500 dark:text-gray-400">
                    @sushil_bhattarai45
                  </cite>
                </div>
              </figcaption>
            </figure>
            <div
              style={{
                height: "10px",
              }}
            ></div>
            <p
              style={{
                color: "#fff",
                fontSize: "1rem",
                fontWeight: "bold",
                width: "100%",
                marginTop: "0.7rem",
                fontFamily: "Poppins",
                margin: "0",
                padding: "0",
              }}
            >
              Authentication and Authorization concepts you must know
            </p>{" "}
          </div>
          <div
            style={{
              height: "20px",
            }}
          ></div>
          <p
            style={{
              marginTop: "1.1rem",
              textAlign: "left",
              color: "#fff",
              fontSize: "1rem",
              fontWeight: "500",
              fontFamily: "Poppins",
              margin: "0",
              padding: "0",
            }}
          >
            <em>
              {" "}
              Summary: This blog post discusses the "Cannot set headers after
              they are sent to the client" error in node.js and express. The
              author shares their experience with encountering this error and
              provides steps to fix it. The root cause of the error is
              identified as improperly written asynchronous code that allows
              multiple branches to send a response. Examples of code snippets
              causing this error are also provided, along with the correct
              approach to fixing them. The post concludes with the author's
              call-to-action, inviting readers to share their own
              troubleshooting experiences.
            </em>
            <br /> <br />-
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
          </p>{" "}
          <div
            style={{
              height: "20px",
            }}
          ></div>
          <div
            style={{
              marginRight: "40px",
              alignItems: "center",
              justifyContent: "space-around",
            }}
            class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
          >
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span
                style={{
                  backgroundColor: "#0F172A",
                  color: "#fff",
                  width: "13rem",
                  height: "2.3rem",
                }}
                class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
              >
                GitHub{" "}
              </span>
            </button>
            <button
              style={{
                width: "13rem",
                height: "2.5rem",
                marginTop: "-0.5rem",
              }}
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Hashnode
            </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          {/* <Charts /> */}
        </div>
      </div>
    </div>
  );
}
