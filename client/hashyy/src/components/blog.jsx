import React from "react";
import Popup from "./popup";
export default function Blog({ data }) {
  const { title, brief, coverImage, slug } = data;
  return (
    <div
      class=" border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 "
      style={{
        backgroundColor: "#0F172A",
        height: "250px",
      }}
    >
      <a
        href="#"
        style={{
          height: "200px",

          alignItems: "left",
          textAlign: "left",
        }}
        class="flex flex-col items-center  rounded-lg shadow md:flex-row md:max-w-xl  "
      >
        <img
          style={{
            height: "150px",
            width: "300px",
          }}
          class=" w-full rounded-t-lg md:h-auto md:rounded-none md:rounded-s-lg"
          src={coverImage?.url}
          alt=""
        />
        <div
          style={{
            alignContent: "left",
            height: "200px",
            marginTop: 25,
          }}
          class="flex flex-col  p-4 leading-normal"
        >
          <h5
            style={{
              color: "white",
              fontSize: "0.9rem",
            }}
            class="mb-2 text-1xl font-bold "
          >
            {title}{" "}
          </h5>
          <p
            style={{
              color: "#A29191",
              overflow: "hidden",
              fontSize: "0.7rem",
            }}
            class="mb-3 font-normal text-gray-700 dark:text-gray-400"
          >
            {brief}
          </p>
        </div>
      </a>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Popup data={data} />
        {/* 
        <button
          style={{
            width: "11rem",
            height: "2.5rem",
            marginTop: -8,
          }}
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read It on Hashnode
        </button> */}
      </div>
    </div>
  );
}
