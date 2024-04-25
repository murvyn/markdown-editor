import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ContentProvider } from "./contexts/contentContext.tsx";
import { FileManagerProvider } from "./contexts/fIleManagerContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FileManagerProvider>
      <ContentProvider>
        <App />
      </ContentProvider>
    </FileManagerProvider>
  </React.StrictMode>
);
