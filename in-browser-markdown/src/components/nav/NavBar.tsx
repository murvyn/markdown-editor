import menu from "../../assets/icon-menu.svg";
import documentIcon from "../../assets/icon-document.svg";
import saveIcon from "../../assets/icon-save.svg";
import logo from "../../assets/logo.svg";
import closeIcon from "../../assets/icon-close.svg";
import {
  Document,
  DocumentIcon,
  Text,
  Heading,
  IconContainer,
  Line,
  Menu,
  Nav,
  Button,
  NavButtonContainer,
  BinIcon,
  DisplayMobile,
} from "./nav.styles";
import { useContext, useState } from "react";
import { ContentContext } from "../../contexts/contentContext";
import DeleteDocument from "../delete/DeleteDocument";
import DeleteIcon from "../../assets/DeleteIcon";

const NavBar = () => {
  const { fileName, showSideBar, setShowSideBar, setFileName } =
    useContext(ContentContext);
  const [showDeleteCard, setShowDeleteCard] = useState(false);
  const toggle = () => {
    setShowSideBar(!showSideBar);
  };
  const handleFileNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.value);
  };

  const handleFileNameKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      (event.target as HTMLInputElement).blur();
    }
  };

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
                className="filename"
                title="markdown"
                value={fileName}
                onChange={handleFileNameChange}
                onKeyDown={handleFileNameKeyPress}
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
          <Button>
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
