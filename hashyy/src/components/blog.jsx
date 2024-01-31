import React, { useEffect } from "react";
// import Popup from "./popup";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { isWebUri } from "valid-url";

import { CopyIcon } from "@radix-ui/react-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AiSummerise from "./api/aiSummerise";
import { Drawer } from "@mui/material";
import { DrawerDemo } from "./drawer";
import { getPostDataFromURL } from "./api/getPostFromUrl";
import Lottie from "react-lottie";
import animationData from "../assets/Loading-lottie.json";
export default function Blog({ data, UserProfile }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [compareLink, setCompareLink] = React.useState("");
  const [open, setOpen] = React.useState(false);

  //Ai summerized response
  const [aiData, setAiData] = React.useState("");
  const [comparingPostAiData, setComparingPostAiData] = React.useState("");
  //Route Data
  const { title, brief, coverImage, slug, url, content } = data;
  const { name, photo, tagline, username } = UserProfile;
  const [actualPost, setActualPost] = React.useState(data);
  const [comparingPost, setComparingPost] = React.useState({});
  //All Pots's User Data
  const [actualBlogUserData, setActualBlogUserData] = React.useState({});
  const [comparingBlogUserData, setComparingBlogUserData] = React.useState({});

  const [showLottie, setShowLottie] = React.useState(false);
  async function getAiData() {
    const aiText = await AiSummerise(content.markdown);
    setAiData(aiText);
  }

  async function getPostFromURL() {
    // console.log(!isWebUri(compareLink));
    setShowLottie(true);
    setAiData("");
    setComparingPostAiData("");
    console.log;
    const urldata = await getPostDataFromURL(compareLink);

    if (urldata.publication.post != null) {
      setComparingPost(urldata.publication.post);
      //senfing for summerization
      const aiTextForComparingBlog = await AiSummerise(
        urldata.publication.post.content.markdown
      );

      setComparingBlogUserData(urldata.publication.author);
      await getAiData();
      setComparingPostAiData(aiTextForComparingBlog);
      setShowLottie(false);
      setOpen(true);
    } else {
      toast.error("Invalid URL");
      setShowLottie(false);
    }
  }
  return (
    <div
      class=" border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 "
      style={{
        backgroundColor: "#0F172A",
        height: "250px",
      }}
    >
      <div>
        <Dialog open={showLottie}>
          <DialogContent
            style={{
              width: "30%",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <DialogHeader>
              <DialogTitle>
                {" "}
                <p
                  style={{
                    color: "black",
                    fontSize: "1rem",
                    fontWeight: "500",
                    width: "100%",
                    textAlign: "center",
                    fontFamily: "Poppins",
                  }}
                >
                  Making an Effective Comparision
                </p>
              </DialogTitle>
              <DialogDescription>
                <Lottie
                  style={{
                    marginTop: "-20px",
                  }}
                  options={defaultOptions}
                  height={200}
                  width={300}
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      {open ? (
        <DrawerDemo
          actualBlogUserData={UserProfile}
          comparingBlogUserData={comparingBlogUserData}
          open={open}
          comparingBlogData={comparingPostAiData}
          actualBlogData={aiData}
          onOpenChange={setOpen}
          actualBlog={data}
          comparingBlog={comparingPost}
        />
      ) : null}
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
        <Link
          to={{
            pathname: "../blogs",
          }}
          state={{ data: data, user: UserProfile.user }}
        >
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
              Analyze Content
            </span>
          </button>
        </Link>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              style={{
                width: "11rem",
                height: "2.5rem",
                marginTop: "-7px",
              }}
            >
              Compare
            </Button>
          </DialogTrigger>
          <DialogContent
            className="sm:max-w-md"
            style={{
              backgroundColor: "white",
            }}
          >
            <DialogHeader>
              <DialogTitle> </DialogTitle>
              <DialogDescription
                style={{
                  color: "black",
                }}
              >
                Paste the Hashnode Blog's Link to compare.{" "}
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
                <Input
                  type="url"
                  onChange={(e) => {
                    setCompareLink(e.target.value);
                  }}
                  id="link"
                  placeholder="https://sushilbhattarai.hashnode.dev/debuggingfeb-a-story-of-the-scariest-deadline-i-ever-got-into"
                />
              </div>
              {/* <Button type="submit" size="sm" className="px-3">
                <span className="sr-only">Copy</span>
                <CopyIcon className="h-4 w-4" />
              </Button> */}
            </div>

            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button
                  onClick={async () => {
                    setOpen(false);
                    await getPostFromURL();
                  }}
                  type="button"
                  variant="primary"
                  style={{
                    backgroundColor: "#0F172A",
                    color: "#fff",
                  }}
                >
                  Submit
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* <div
          onClick={() => {
            alert(
              "Please wait for 10 seconds for the AI to process your request"
            );
          }}
        >
          <Popup
            style={{
              backgroundColor: "#374151",

              marginBottom: "2rem",
            }}
            trigger={
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
                  AI Summerizer{" "}
                </span>
              </button>
            }
          >
            <div
              style={{
                padding: "2rem",
                borderRadius: "20px",
                width: "600px",
                height: "600px",
                alignSelf: "center",
                alignContent: "center",
                justifyContent: "center",
                backgroundColor: "#374151",
              }}
            >
              <div class="flex items-center justify-between p-1 md:p-2 border-b rounded-t dark:border-gray-600">
                <h3
                  style={{
                    color: "white",
                  }}
                  class="text-xl font-semibold text-white-900 dark:text-white"
                >
                  AI Blog-Summerizer{" "}
                </h3>
              </div>{" "}
              <div
                class="p-4 md:p-5 space-y-4"
                style={{
                  float: "left",
                  textAlign: "left",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",

                  color: "white",
                  fontFamily: "Poppins",
                }}
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
                <img
                  style={{
                    height: "200px",
                    width: "100%",
                  }}
                  class=" w-full rounded-t-lg md:h-auto md:rounded-none md:rounded-s-lg"
                  src={coverImage?.url}
                  alt=""
                />
                <p class="text-base leading-relaxed">{aiData}</p>
              </div>
            </div>
          </Popup>
        </div> */}
        {/* <Popup data={data} /> */}
        {/* <Link to={url}>
          <button
            style={{
              width: "11rem",
              height: "2.5rem",
              marginTop: -8,
            }}
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read On Hashnode
          </button>
        </Link> */}
      </div>
    </div>
  );
}
