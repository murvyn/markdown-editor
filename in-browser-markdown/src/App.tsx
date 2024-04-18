import { useContext } from "react";
import { Divider, Flex } from "./components/main.styles";
import Markdown from "./components/Markdown";
import NavBar from "./components/nav/NavBar";
import Preview from "./components/preview/Preview";
import { ContentContext } from "./contexts/contentContext";
import SideBar from "./components/sidebar/SideBar";

function App() {
  const { showSideBar } = useContext(ContentContext);
  return (
    <>
      <Flex>
        {showSideBar && <SideBar />}
        <div className="">
        <NavBar />
        <Divider>
          <Markdown />
          <Preview />
        </Divider>
        </div>
      </Flex>
    </>
  );
}

export default App;
