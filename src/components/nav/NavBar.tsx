import menu from "../../assets/icon-menu.svg";
import documentIcon from "../../assets/icon-document.svg";
import saveIcon from "../../assets/icon-save.svg";
import logo from "../../assets/logo.svg";
import closeIcon from "../../assets/icon-close.svg";
import { v4 as uuidv4 } from "uuid";
import {
  Document,
  DocumentIcon,
  Heading,
  IconContainer,
  Line,
  Menu,
  Nav,
  NavButtonContainer,
  BinIcon,
  DisplayMobile,
} from "./nav.styles";
import { useContext, useEffect, useRef, useState } from "react";
import { ContentContext } from "../../contexts/contentContext";
import DeleteDocument from "../delete/DeleteDocument";
import DeleteIcon from "../../assets/DeleteIcon";
import { FileManagerContext } from "../../contexts/fIleManagerContext";
import { Button, Text } from "../main.styles";

const NavBar = () => {
  const {
    fileName,
    showSideBar,
    setShowSideBar,
    newDoc,
    setNewDoc,
    setFileName,
    content,
    id,
    setId,
  } = useContext(ContentContext);
  const { addOrReplaceFile } = useContext(FileManagerContext);
  const [showDeleteCard, setShowDeleteCard] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const toggle = () => {
    setShowSideBar(!showSideBar);
  };
  const handleFileNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.value);
  };

  const handleFileNameBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.value);
  };

  const handleFileNameKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      (event.target as HTMLInputElement).blur();
      setFileName((event.target as HTMLInputElement).value);
    }
  };

  const addMdExtension = (text: string): string => {
    const dotIndex = text.indexOf(".");
    if (dotIndex !== -1) {
      return text.substring(0, dotIndex) + ".md";
    } else {
      return text + ".md";
    }
  };

  const handleSave = () => {
    const update = {
      date: new Date(),
      id: newDoc ? uuidv4() : id,
      upload: {
        name: addMdExtension(fileName || "Untitled"),
        content,
      },
    };
    addOrReplaceFile(update);
    setNewDoc(false);
    setId(update.id);
  };

  useEffect(() => {
    if (newDoc && inputRef.current) {
      inputRef.current.focus();
    }
  }, [newDoc]);

  return (
    <>
      <Nav>
        <IconContainer>
          {showSideBar ? (
            <Menu onClick={toggle}>
              <img src={closeIcon} alt="menu" />
            </Menu>
          ) : (
            <Menu onClick={toggle}>
              <img src={menu} alt="menu" />
            </Menu>
          )}
          <Heading>
            <img src={logo} alt="logo" />
          </Heading>
          <Line />
          <Document>
            <DocumentIcon>
              <img src={documentIcon} alt="document" />
            </DocumentIcon>
            <div className="">
              <DisplayMobile>
                <Text fontStyle="bodyMed" color="primary">
                  Document Name
                </Text>
              </DisplayMobile>
              <input
                ref={inputRef}
                className="filename"
                placeholder='No document'
                title="markdown"
                value={fileName}
                onChange={handleFileNameChange}
                onKeyDown={handleFileNameKeyPress}
                onBlur={handleFileNameBlur}
              />
            </div>
          </Document>
        </IconContainer>
        <NavButtonContainer>
          <BinIcon
            onClick={() => setShowDeleteCard(!showDeleteCard)}
            type="button"
          >
            <DeleteIcon />
          </BinIcon>
          <Button onClick={handleSave}>
            <img src={saveIcon} alt="save" />
            <DisplayMobile>
              <Text fontStyle="headingMed">Save Changes</Text>
            </DisplayMobile>
          </Button>
        </NavButtonContainer>
      </Nav>
      {showDeleteCard && (
        <DeleteDocument setShowDeleteCard={setShowDeleteCard} />
      )}
    </>
  );
};

export default NavBar;
