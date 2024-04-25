import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { FileManagerContext } from "./fIleManagerContext";

interface ContentContextProps {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  html: string;
  id: string;
  setHtml: React.Dispatch<React.SetStateAction<string>>;
  fileName: string;
  setFileName: React.Dispatch<React.SetStateAction<string>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  setNewDoc: React.Dispatch<React.SetStateAction<boolean>>;
  showSideBar: boolean;
  hidePreview: boolean;
  newDoc: boolean;
  setHidePreview: React.Dispatch<React.SetStateAction<boolean>>;
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  mode: "light" | "dark";
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
  setHidePreview: () => null,
  mode: "light",
  setMode: () => null,
  id: "",
  setId: () => null,
  newDoc: false,
  setNewDoc: () => null,
});

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<string>("");
  const [html, setHtml] = useState("");
  const [fileName, setFileName] = useState("");
  const [showSideBar, setShowSideBar] = useState(false);
  const [hidePreview, setHidePreview] = useState(false);
  const [newDoc, setNewDoc] = useState(false);
  const [id, setId] = useState("");
  const { files } = useContext(FileManagerContext);

  const [mode, setMode] = useState<"light" | "dark">(() => {
    const storedMode = localStorage.getItem("theme");
    return (storedMode as "light" | "dark") || "light";
  });
  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleThemeChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setMode(e.matches ? "dark" : "light");
      }
    };

    // setMode(darkModeMediaQuery.matches ? "dark" : "light");
    darkModeMediaQuery.addEventListener("change", handleThemeChange);
    return () => {
      darkModeMediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  useEffect(() => {
    if (files) {
      setContent(files[0]?.upload?.content as string);
      setFileName(files[0]?.upload?.name);
      setId(files[0]?.id);
    }
  }, []);

  useEffect(() => {
    const file = files?.find((file) => file.id === id);
    setContent(file?.upload?.content as string);
    setFileName(file?.upload?.name as string);
  }, [id]);

  useEffect(() => {
    if (files?.length > 0) {
      const nextFile = files[files?.length-1];
      setContent(nextFile?.upload?.content as string);
      setFileName(nextFile?.upload?.name as string);
      setId(nextFile.id);
    } else {
      setContent("");
      setFileName("");
      setId("");
    }
  }, [files]);

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
    setHidePreview,
    mode,
    setMode,
    id,
    setId,
    setNewDoc,
    newDoc,
  };

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};
