import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export function DrawerDemo(props) {
  const { actualBlogUserData, comparingBlogUserData } = props;

  const [open, setOpen] = React.useState(props.open);

  const SubColumn = ({ imageSrc, url, color, title, user, description }) => {
    return (
      <div
        style={{
          width: "100%",
          position: "relative",
        }}
      >
        <figure
          class="max-w-screen-md"
          style={{
            marginLeft: "30px",
          }}
        >
          <figcaption class="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
            <img
              class="w-6 h-6 rounded-full"
              src={user.profilePicture}
              alt="profile picture"
            />
            <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
              <cite
                style={{ color: "black" }}
                class="pe-3 font-medium text-gray-900 dark:text-white"
              >
                {user.name}
              </cite>
              <cite class="ps-3 text-sm text-gray-500 dark:text-gray-400">
                @{user.username}{" "}
              </cite>
            </div>
          </figcaption>
        </figure>

        <div
          style={{
            backgroundColor: color,
            display: "flex",
            flex: 1,
            height: "400px",

            flexDirection: "row",
            padding: "20px",
          }}
        >
          <div
            style={{
              flex: 1,
              width: "50%",
              marginRight: "20px",
            }}
          >
            {" "}
            <img
              src={imageSrc}
              alt="Banner"
              style={{
                width: "100%",
                height: 200,
                marginRight: "20px",
                borderRadius: "8px",
              }}
            />
            <div
              style={{
                marginTop: "2rem",
                width: "100%",
                display: "flex",
              }}
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
              <Link to={url}>
                <button
                  style={{
                    width: "11rem",
                    height: "2.5rem",
                  }}
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Hashnode
                </button>
              </Link>
            </div>
          </div>

          <div style={{ width: "50%", flex: 1 }}>
            <p
              style={{
                color: "black",
                fontSize: "1rem",
                fontWeight: "bold",

                marginTop: "0.7rem",
                fontFamily: "Poppins",
                margin: "0",
                padding: "0",
              }}
            >
              {title}{" "}
            </p>{" "}
            <p
              style={{
                marginTop: "1.3rem",
                textAlign: "left",
                width: "100%",
                color: "black",
                fontSize: "0.8rem",
                fontWeight: "500",
                fontFamily: "Poppins",
                padding: "0",
              }}
            >
              <em> {description}</em>
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
          </div>
        </div>
      </div>
    );
  };

  const MainColumn = ({ column1, column2 }) => {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",

          backgroundColor: "#f0f0f0",
        }}
      >
        <SubColumn
          url={props.actualBlog.url}
          user={actualBlogUserData.user}
          imageSrc={props.actualBlog.coverImage?.url}
          title={props.actualBlog.title}
          color={"#f0f0f0"}
          description={props.actualBlogData}
        />
        <SubColumn
          url={props.comparingBlog.url}
          user={comparingBlogUserData}
          color={"#f0f0f0"}
          imageSrc={props.comparingBlog.coverImage?.url}
          title={props.comparingBlog.title}
          description={props.comparingBlogData}
        />
      </div>
    );
  };

  const mainColumn1 = {
    imageSrc:
      "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/ahi73ZN5P0Y/upload/63e664e91ff1f9b3e34abf59fe9e673e.jpeg",
    title: "Column 1 Title",
    description:
      "A short description for column 1. This is a placeholder text.",
  };

  const mainColumn2 = {
    imageSrc:
      "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/ahi73ZN5P0Y/upload/63e664e91ff1f9b3e34abf59fe9e673e.jpeg",
    title: "Column 2 Title",
    description:
      "A short description for column 2. This is another placeholder text.",
  };

  return (
    <Drawer open={open}>
      <DrawerTrigger as asChild>
        Open
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle
            style={{
              marginLeft: "10px",
            }}
          >
            Blogs Comparision{" "}
          </DrawerTitle>
          <DrawerDescription>
            <MainColumn column1={mainColumn1} column2={mainColumn2} />
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Analyze Comments Sentiments</Button>
          <DrawerClose>
            <Button
              onClick={() => {
                setOpen(!open);
              }}
              variant="outline"
            >
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
