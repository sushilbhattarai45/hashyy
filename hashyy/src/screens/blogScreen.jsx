import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useLocation } from "react-router-dom";
import AiSummerise from "../components/api/aiSummerise";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  Route,
  Link,
} from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Charts from "../components/charts";
import Sentiments from "../components/api/sentimentAnayzer";
export default function BlogScreen(props) {
  const navigate = useNavigate();

  const [postData, setPostData] = useState({});
  const location = useLocation();
  const [aiData, setAiData] = useState("");
  const data = location.state.data;
  const [sentimentsData, setSentimentsData] = useState([]);
  const UserProfile = location.state.user;
  useEffect(() => {
    getSentimentData();
    getAiData();
    window.scrollTo(0, 0);
  }, [location]);

  async function getSentimentData() {
    toast.info("Loading Comments Sentiments!");
    const fetchSentimentsData = await Sentiments(data.comments.edges);
    console.log("fetching data");
    console.log(fetchSentimentsData);
    setSentimentsData(fetchSentimentsData);
  }

  async function getAiData() {
    toast.info("Loading Summerised Text!");
    const aiText = await AiSummerise(data.content.markdown);
    setAiData(aiText);
    toast.success("Loaded Successfully!");
  }
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        height: "100vh",
        width: "100vw",
        backgroundColor: "#0F172A",
      }}
    >
      <ToastContainer />
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
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            alignSelf: "center",
            width: "60%",
            marginTop: "2rem",
            textAlign: "center",
          }}
        >
          <figure class="max-w-screen-md">
            <figcaption class="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
              <img
                class="w-6 h-6 rounded-full"
                src={UserProfile?.profilePicture}
                alt="profile picture"
              />
              <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
                <cite
                  style={{ color: "white" }}
                  class="pe-3 font-medium text-gray-900 dark:text-white"
                >
                  {UserProfile.name}{" "}
                </cite>
                <cite class="ps-3 text-sm text-gray-500 dark:text-gray-400">
                  @{UserProfile.username}{" "}
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
            {data?.title}{" "}
          </p>{" "}
        </div>

        <div
          style={{
            alignSelf: "center",
            alignContent: "center",
            width: "70%",
            flex: 0.8,
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
                width: "90%",
                height: "250px",
              }}
              src={data.coverImage?.url}
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
              <Dialog>
                <DialogTrigger>
                  {" "}
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span
                      style={{
                        backgroundColor: "#0F172A",
                        color: "#fff",
                        width: "11rem",
                        height: "2.3rem",
                      }}
                      className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                    >
                      Analyze Comments
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent
                  style={{
                    borderColor: "#0F172A",
                    borderWidth: "2px",
                  }}
                >
                  <DialogHeader>
                    <DialogTitle>
                      AI Powered Comment's Sentiment Analyzer{" "}
                    </DialogTitle>
                    <DialogDescription
                      style={{
                        marginTop: 6,
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",

                        display: "flex",
                        flex: 1,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          flex: 1,
                          flexDirection: "row",
                        }}
                      >
                        {" "}
                        <div
                          style={{
                            display: "flex",
                            flex: 0.5,
                            alignSelf: "center",
                            width: "50%",
                          }}
                        >
                          {" "}
                          {data.comments.edges?.length > 0 ? (
                            <Charts style={{}} sData={sentimentsData} />
                          ) : (
                            <div>
                              <p
                                style={{
                                  marginTop: 6,
                                }}
                              >
                                {" "}
                                No Comments To Analyse
                              </p>
                              <br />{" "}
                              <p
                                style={{
                                  color: "black",
                                  fontSize: "0.9rem",
                                  fontWeight: "700",
                                  fontFamily: "Poppins",
                                  marginTop: "-10px",
                                  padding: "0",
                                }}
                              >
                                Total Comments : {data.comments.edges?.length}
                                <br />{" "}
                              </p>
                            </div>
                          )}
                        </div>
                        {data.comments.edges?.length > 0 ? (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              flex: 0.5,
                              marginTop: "1rem",
                              marginLeft: "5px",
                            }}
                          >
                            {" "}
                            <p
                              style={{
                                color: "black",
                                fontSize: "0.9rem",
                                fontWeight: "700",
                                fontFamily: "Poppins",
                                margin: "0",
                                padding: "0",
                              }}
                            >
                              Total Comments : {data.comments.edges?.length}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <Link to={data?.url}>
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
              </Link>
            </div>{" "}
          </div>
          <div
            style={{
              marginLeft: "-2rem",
              flex: 1,
            }}
          >
            {!aiData ? (
              <div
                style={{
                  marginTop: "7rem",
                  backgroundColor: "#0F172A",
                }}
                class="flex items-center justify-center  rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
              >
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              <p
                style={{
                  marginTop: "1rem",
                  textAlign: "left",
                  color: "#fff",
                  fontSize: "1rem",
                  fontWeight: "500",
                  fontFamily: "Poppins",
                  margin: "0",
                  padding: "0",
                }}
              >
                <em>{aiData}</em>
                <br />
                <br />-
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
            )}
          </div>
        </div>
        {/* <div
          style={{
            alignSelf: "center",
            alignContent: "center",
            width: "50%",
            flex: 0.3,
            marginTop: "3rem",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
          }}
        >
          {" "}
          <p
            style={{
              color: "white",
              fontSize: "1.2rem",
              marginTop: "2rem",
              fontWeight: "bold",
              fontFamily: "Poppins",
              margin: "0",
              padding: "0",
            }}
          >
            Comments Analyzer{" "}
          </p>
        </div> */}
        {/* <div
          style={{
            alignSelf: "center",
            alignContent: "center",
            width: "50%",
            flex: 0.1,
            marginTop: "1rem",
            marginBottom: "3rem",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
          }}
        >
          {" "}
          {data.comments.edges?.length > 0 ? (
            <>
              <div
                style={{
                  width: "100%",
                  flex: 0.4,
                  padding: "0.2rem",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  color: "#fff",
                }}
              >
                {" "}
                <Charts sData={sentimentsData} />
              </div>

              <div
                style={{
                  flex: 1,
                  backgroundColor: "#071023",
                  width: "100%",
                  color: "white",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <p
                  style={{
                    color: "white",
                    fontSize: "1.2rem",
                    marginTop: "4rem",
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                    margin: "0",
                    padding: "0",
                  }}
                >
                  Total comments:{" "}
                  {sentimentsData[0]?.positive +
                    sentimentsData[0]?.negative +
                    sentimentsData[0]?.neutral}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "left",
                  }}
                >
                  {" "}
                  <p style={{ color: "#00ff00", fontFamily: "Poppins" }}>
                    {" "}
                    {sentimentsData[0]?.positive} Positive
                  </p>
                  <p style={{ color: "#ff0000", fontFamily: "Poppins" }}>
                    {" "}
                    {sentimentsData[0]?.negative} Negative{" "}
                  </p>
                  <p style={{ color: "#2160ff", fontFamily: "Poppins" }}>
                    {" "}
                    {sentimentsData[0]?.neutral} Neutral
                  </p>{" "}
                </div>
              </div>
            </>
          ) : (
            <p
              style={{
                color: "#fff",
                fontFamily: "Poppins",
                fontSize: "0.8rem",
                fontWeight: "bold",
              }}
            >
              PS: This post has no comments
            </p>
          )}
        </div> */}
      </div>
    </div>
  );
}
