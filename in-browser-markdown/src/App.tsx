import React, { Suspense, useContext } from "react";
import { Divider, Flex } from "./components/main.styles";
import { ContentContext } from "./contexts/contentContext";
import Loading from "./components/Loading";

import SideBar from"./components/sidebar/SideBar"
import NavBar from "./components/nav/NavBar"
const Preview = React.lazy(() => import("./components/preview/Preview"));
const Markdown = React.lazy(() => import("./components/Markdown"));

function App() {
  const { showSideBar, hidePreview, mode } = useContext(ContentContext);
  return (
    <Flex mode={mode} className="">
      {showSideBar && <SideBar />}
      <div className="">
        <NavBar />
        <Suspense fallback={<Loading />}>
          <Divider>
            {!hidePreview && <Markdown />}
            <Preview />
          </Divider>
        </Suspense>
      </div>
    </Flex>
  );
}

export default App;
