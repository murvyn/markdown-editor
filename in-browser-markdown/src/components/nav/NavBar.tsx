import menu from "../../assets/icon-menu.svg";
import documentIcon from "../../assets/icon-document.svg";
import deleteIcon from "../../assets/icon-delete.svg";
import saveIcon from "../../assets/icon-save.svg";
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
import { useContext } from "react";
import { ContentContext } from "../../contexts/contentContext";

const NavBar = () => {
  const {fileName} = useContext(ContentContext)
  return (
    <Nav>
      <IconContainer>
        <Menu>
          <img src={menu} alt="menu" />
        </Menu>
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
        <BinIcon type="button">
          <img src={deleteIcon} alt="delete" />
        </BinIcon>
        <Button backCol="primary">
          <img src={saveIcon} alt="save" />
          <Text fontStyle="headingMed">Save Changes</Text>
        </Button>
      </NavButtonContainer>
    </Nav>
  );
};

export default NavBar;
