import { createContext, ReactNode, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MARKDOWN from "/welcome.md";

interface Upload {
  name: string;
  content: string;
}

interface FIleManagerContextProps {
  uploadFiles: Upload | null;
  setUploadFiles: React.Dispatch<React.SetStateAction<Upload | null>>;
  files: UploadArray[];
  deleteFile: (id: string) => void;
  addOrReplaceFile: (newFile: UploadArray) => void
}

export interface UploadArray {
  date: Date;
  id: string;
  upload: Upload;
}

export const FileManagerContext = createContext<FIleManagerContextProps>({
  uploadFiles: { name: "", content: "" },
  setUploadFiles: () => null,
  files: [],
  deleteFile: () => null,
  addOrReplaceFile: () => null
});

export const FileManagerProvider = ({ children }: { children: ReactNode }) => {
  const [uploadFiles, setUploadFiles] = useState<Upload | null>(null);
  const [files, setFiles] = useState<UploadArray[]>([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const storedFiles = localStorage.getItem("files");
        if (!storedFiles) {
          const res = await fetch(MARKDOWN);
          const md = await res.text();
          const welcome = {
            date: new Date(),
            id: uuidv4(),
            upload: {
              name: "welcome.md",
              content: md,
            },
          };
          localStorage.setItem("files", JSON.stringify([welcome]));
          if (isMounted) {
            setFiles([welcome]);
          }
        } else if (isMounted) {
            setFiles(JSON.parse(storedFiles));
          
        }
      } catch (error) {
        console.error("Error fetching Markdown:", error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);


  const deleteFile = (id: string) => {
    setFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter((file) => file.id !== id);
      localStorage.setItem("files", JSON.stringify(updatedFiles));
      return updatedFiles;
    });
  };

  const addOrReplaceFile = (newFile: UploadArray) => {
    // Check if the file with the same ID already exists
    const existingIndex = files.findIndex(file => file.id === newFile.id);
    if (existingIndex !== -1) {
      // If the file exists, replace it
      const updatedFiles = [...files];
      updatedFiles[existingIndex] = newFile;
      setFiles(updatedFiles);
      // Update local storage
      localStorage.setItem("files", JSON.stringify(updatedFiles));
    } else {
      // If the file doesn't exist, add it
      setFiles(prevFiles => [...prevFiles, newFile]);
      // Update local storage
      localStorage.setItem("files", JSON.stringify([...files, newFile]));
    }
  };


  useEffect(() => {
    if (uploadFiles) {
      const upload: UploadArray = {
        date: new Date(),
        id: uuidv4(),
        upload: { name: uploadFiles?.name, content: uploadFiles?.content },
      };
      setFiles((prevFiles) => {
        const updatedFiles = [...prevFiles, upload];
        localStorage.setItem("files", JSON.stringify(updatedFiles));
        return updatedFiles;
      });
    }
  }, [uploadFiles]);

  const value: FIleManagerContextProps = {
    uploadFiles,
    setUploadFiles,
    files,
    deleteFile,
    addOrReplaceFile,
  };
  return (
    <FileManagerContext.Provider value={value}>
      {children}
    </FileManagerContext.Provider>
  );
};
