import React, { useState } from "react";
import Navbar from "../components/navbar";
import UserProfile from "../components/userProfile";
import Blog from "../components/blog";
import Popup from "../components/popup";

export default function Dashboard() {
  const [searchedUser, setSearchedUser] = useState("");
  const [isRealUser, setIsRealUser] = useState(false);
  const getSearchUser = (e) => {
    e.preventDefault();
    alert(searchedUser);
  };
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        height: "100%",
        flexDirection: "column",
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
          marginTop: "2rem",
          flex: 1,
          marginLeft: "-15px",
          display: "flex",
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
            Easy Analysis, Creative Generation & Smart Recommendation
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
              <p style={{ marginLeft: "46px", fontSize: "48px" }}>Hashyy</p>
            </span>{" "}
          </p>{" "}
        </div>

        <div
          style={{
            marginTop: "2rem",
            width: "50%",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "Poppins",
              fontSize: "1rem",
              color: "#A29191",
              marginBottom: "0.5rem",
            }}
          >
            <label>Hashnode Username</label>
          </div>

          <form class="flex items-center">
            <label for="voice-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                onInput={(e) => setSearchedUser(e.target.value)}
                style={{
                  height: "3rem",
                }}
                type="text"
                id="voice-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Hashnode UserName @Sushil_bhattarai45"
                required
              />
            </div>
            <button
              onClick={(e) => getSearchUser(e)}
              style={{
                height: "3rem",
              }}
              type="submit"
              class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              Search
            </button>
          </form>
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
            Unlock the power of MindsDB to turn data into content gold. Create,
            analyze, and protect your brand seamlessly.{" "}
          </p>{" "}
        </div>
        <div
          style={{
            alignSelf: "center",
            justifyContent: "center",
            alignContent: "center",
            width: "40%",
            marginBottom: "3rem",
            marginLeft: -150,
            marginTop: "3rem",
            textAlign: "center",
          }}
        >
          <div>
            <UserProfile />
          </div>
        </div>

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
          @Sushil_bhattarai45's Recent Blogs
        </p>
        <div
          style={{
            alignSelf: "center",
            justifyContent: "center",
            alignContent: "center",
            width: "80%",
            flex: 1,
            display: "flex",
            flexDirection: "row",
            marginBottom: "3rem",
            marginTop: "3rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              marginRight: 20,
            }}
          >
            {" "}
            <Blog />
          </div>
          <div
            style={{
              marginLeft: 20,
            }}
          >
            {" "}
            <Blog />
          </div>
        </div>
        <div
          style={{
            alignSelf: "center",
            justifyContent: "center",
            alignContent: "center",
            width: "80%",
            flex: 1,
            display: "flex",
            flexDirection: "row",
            marginBottom: "3rem",
            marginTop: "3rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              marginRight: 20,
            }}
          >
            {" "}
            <Blog />
          </div>
          <div
            style={{
              marginLeft: 20,
            }}
          >
            {" "}
            <Blog />
          </div>
        </div>
      </div>
    </div>
  );
}
