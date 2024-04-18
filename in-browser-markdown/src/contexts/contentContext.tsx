import { createContext, ReactNode, useEffect, useState } from "react";
import MARKDOWN from "/welcome.md";

interface ContentContextProps {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  html: string;
  setHtml: React.Dispatch<React.SetStateAction<string>>;
  fileName: string;
  setFileName: React.Dispatch<React.SetStateAction<string>>;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  showSideBar: boolean
  hidePreview: boolean
  setHidePreview: React.Dispatch<React.SetStateAction<boolean>>
}

export const ContentContext = createContext<ContentContextProps>({
  content: "",
  setContent: () => null,
  html: "",
  setHtml: () => null,
  setFileName: () => null,
  fileName: "",
  setShowSideBar: () => null,
  showSideBar: false,
  hidePreview: false,
  setHidePreview: () => null
});

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<string>("");
  const [html, setHtml] = useState("");
  const [fileName, setFileName] = useState('')
  const [showSideBar, setShowSideBar] = useState(false);
  const [hidePreview, setHidePreview] = useState(false);

  const getFileName = (filePath: string) => {
    return filePath.split("/").pop();
  };

  useEffect(() => {
    fetch(MARKDOWN)
      .then((res) => res.text())
      .then((md) => {
        setFileName(getFileName(MARKDOWN)!)
        setContent(md)})
      .catch((error) => console.error("Error fetching Markdown:", error));
  }, []);

  const value: ContentContextProps = {
    content,
    setContent,
    html,
    setHtml,
    fileName,
    setFileName,
    setShowSideBar,
    showSideBar,
    hidePreview,
    setHidePreview
  };

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};
