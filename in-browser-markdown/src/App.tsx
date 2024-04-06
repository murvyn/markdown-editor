import { Divider } from "./components/main.styles";
import Markdown from "./components/Markdown";
import NavBar from "./components/nav/NavBar";
import Preview from "./components/preview/Preview";

function App() {
  return (
    <>
      <NavBar />
      <Divider>
        <Markdown />
        <Preview />
      </Divider>
    </>
  );
}

export default App;
