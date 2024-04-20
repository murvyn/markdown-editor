import menu from "../../assets/icon-menu.svg";
import documentIcon from "../../assets/icon-document.svg";
import deleteIcon from "../../assets/icon-delete.svg";
import saveIcon from "../../assets/icon-save.svg";
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
} from "./nav.styles";
import { useContext,  useState } from "react";
import { ContentContext } from "../../contexts/contentContext";
import DeleteDocument from "../delete/DeleteDocument";

const NavBar = () => {
  const { fileName, showSideBar, setShowSideBar } = useContext(ContentContext);
  const [showDeleteCard, setShowDeleteCard] = useState(false)
  const toggle = () => {
    setShowSideBar(!showSideBar);
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
          <Heading>MARKDOWN</Heading>
          <Line />
          <Document>
            <DocumentIcon>
              <img src={documentIcon} alt="document" />
            </DocumentIcon>
            <div className="">
              <Text fontStyle="bodyMed" color="primary">
                Document Name
              </Text>
              <Text fontStyle="headingMed">{fileName}</Text>
            </div>
          </Document>
        </IconContainer>
        <NavButtonContainer>
          <BinIcon onClick={() => setShowDeleteCard(!showDeleteCard)} type="button">
            <img src={deleteIcon} alt="delete" />
          </BinIcon>
          <Button>
            <img src={saveIcon} alt="save" />
            <Text fontStyle="headingMed">Save Changes</Text>
          </Button>
        </NavButtonContainer>
      </Nav>
      {showDeleteCard && <DeleteDocument setShowDeleteCard={setShowDeleteCard} />}
    </>
  );
};

export default NavBar;
