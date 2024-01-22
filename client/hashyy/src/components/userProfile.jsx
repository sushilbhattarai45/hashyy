import React from "react";

export default function UserProfile(user) {
  const {
    name,
    username,
    bio,
    profilePicture,
    socialMediaLinks,
    publications,
    badges,
    followersCount,
    followingsCount,
    tagline,
    dateJoined,
    location,
    availableFor,
    tagsFollowing,
  } = user.data.user;
  return (
    <div>
      <div class="flex flex-row  pb-10">
        <img
          style={{
            color: "white",
            height: "150px",
            width: "150px",
            borderRadius: "50%",
          }}
          src={profilePicture}
          alt="Bonnie image"
        />
        <div
          style={{
            textAlign: "left",
            display: "flex",
            flex: 1,
            marginLeft: "20px",

            flexDirection: "column",
          }}
        >
          <h5
            style={{
              color: "white",
              marginTop: "20px",
            }}
            class=" text-xl font-medium text-gray-900 dark:text-white"
          >
            {name}{" "}
          </h5>
          <span
            style={{
              textDecoration: "Itallic",
              display: "flex",
              opacity: 0.7,
              color: "white",
            }}
            class="text-sm text-gray-500 dark:text-gray-400"
          >
            {username}{" "}
          </span>
          <span
            style={{
              color: "white",
              opacity: 0.7,
            }}
            class="text-sm text-gray-600 dark:text-gray-400"
          >
            {tagline}{" "}
          </span>
          <span
            style={{
              color: "white",
              opacity: 0.7,
              textDecoration: "underline",
            }}
            class="text-sm text-gray-500 dark:text-gray-400"
          >
            www.sushilbhattarai.hashnode.dev{" "}
          </span>
          <span
            style={{
              color: "white",
              opacity: 0.7,
              //   textDecoration: "underline",
            }}
            class="text-sm text-gray-500 dark:text-gray-400"
          >
            Member Since Sep 2022{" "}
          </span>
        </div>
        <div
          style={{
            width: "200px",
            marginLeft: "3rem",
            marginTop: "0.4rem",
            // backgroundColor: "red",
          }}
        >
          <button
            style={{
              width: "8rem",
              height: "2.8rem",
            }}
            type="button"
            class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
          >
            <svg
              class="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fill-rule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clip-rule="evenodd"
              />
            </svg>
            Facebook
          </button>
          <button
            style={{ width: "8rem", height: "2.8rem" }}
            type="button"
            class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
          >
            <svg
              class="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 17"
            >
              <path
                fill-rule="evenodd"
                d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                clip-rule="evenodd"
              />
            </svg>
            Twitter
          </button>
          <button
            style={{ width: "8rem", height: "2.8rem" }}
            type="button"
            class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
          >
            <svg
              class="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clip-rule="evenodd"
              />
            </svg>
            Github
          </button>
        </div>{" "}
        <div
          style={{
            width: "200px",
            marginLeft: "3rem",
            marginTop: "0.4rem",
            // backgroundColor: "red",
          }}
        >
          <button
            class="relative inline-flex items-center justify-center p-0.5
            mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900
            rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500
            group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white
            dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300
            dark:focus:ring-blue-800"
          >
            <span
              style={{
                backgroundColor: "#0f172a",
                width: "8rem",
                color: "white",
              }}
              class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
            >
              20 Followers{" "}
            </span>
          </button>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span
              style={{
                backgroundColor: "#0f172a",
                width: "8rem",
                color: "white",
              }}
              class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
            >
              8 Followings{" "}
            </span>
          </button>
          <button
            style={{
              alignSelf: "center",
              alignContent: "center",

              textAlign: "center",
            }}
            class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          >
            <span
              style={{
                backgroundColor: "#0f172a",
                width: "8rem",
                color: "white",
              }}
              class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
            >
              10 Posts{" "}
            </span>
          </button>
        </div>{" "}
      </div>
    </div>
  );
}
