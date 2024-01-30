import React, { useEffect } from "react";
// import Popup from "./popup";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import { CopyIcon } from "@radix-ui/react-icons";

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
export default function Blog({ data, UserProfile }) {
  const [compareLink, setCompareLink] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [aiData, setAiData] = React.useState("");
  const { title, brief, coverImage, slug, url, content } = data;
  const { name, photo, tagline, username } = UserProfile;
  async function getAiData() {
    const aiText = await AiSummerise(content.markdown);
    setAiData(aiText);
  }

  return (
    <div
      class=" border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 "
      style={{
        backgroundColor: "#0F172A",
        height: "250px",
      }}
    >
      {open ? <DrawerDemo open={open} onOpenChange={setOpen} /> : null}
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
                  type="text"
                  onChange={(e) => {
                    setCompareLink(e.target.value);
                  }}
                  id="link"
                  defaultValue="https://ui.shadcn.com/docs/installation"
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
                  onClick={() => {
                    setOpen(true);
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
