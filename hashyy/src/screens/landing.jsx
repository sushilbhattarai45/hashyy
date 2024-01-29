import React from "react";
import Navbar from "../components/navbar";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
export default function Landing() {
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
          marginTop: "-2rem",
          flexDirection: "column",
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
          <p
            style={{
              color: "#fff",
              fontSize: "2.5rem",
              fontWeight: "bold",
              width: "100%",
              textAlign: "center",
              fontFamily: "Poppins",
              margin: "0",
              padding: "0",
            }}
          >
            Instant Summaries, Sentiment Insights
            <br /> &<br />
            Blog Comparisons{" "}
          </p>{" "}
        </div>
        <div
          style={{
            alignSelf: "center",
            marginTop: "2rem",
            alignContent: "center",
            width: "60%",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#646cff",
              fontSize: "2rem",
              fontWeight: "bold",
              width: "100%",
              textAlign: "center",
              fontFamily: "Poppins",
              margin: "0",
              padding: "0",
            }}
          >
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <p style={{ marginLeft: "0px", fontSize: "48px" }}>Hashyy</p>
            </span>{" "}
          </p>{" "}
        </div>
        <div
          style={{
            alignSelf: "center",
            alignContent: "center",
            width: "50%",
            marginTop: "3rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              marginTop: "1rem",
              color: "#A29191",
              fontSize: "1.1rem",
              fontWeight: "bold",
              fontFamily: "Poppins",
              margin: "0",
              padding: "0",
            }}
          >
            Discover Hashyy, the Hashnode-powered tool. Effortlessly read
            AI-summarized blogs, check comment sentiment, and compare two blogs
            for a streamlined blogging experience. Your Ultimate Hashnode
            Companion!{" "}
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
