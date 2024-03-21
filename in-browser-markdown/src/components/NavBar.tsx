import React from "react";
import menu from "../assets/icon-menu.svg";
import documentIcon from "../assets/icon-document.svg";
import deleteIcon from "../assets/icon-delete.svg";
import saveIcon from "../assets/icon-save.svg"
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

const NavBar = () => {
  return (
    <Nav>
      <IconContainer>
        <Menu>
          <img src={menu} alt="menu" />
        </Menu>
        <Heading>MARKDOWN</Heading>
        <Line />
        <Document>
          <DocumentIcon >
            <img src={documentIcon} alt="document" />
          </DocumentIcon>
          <div className="">
            <Text font='bodyMed' color="primary">Document Name</Text>
            <Text font="headingMed">welcome.md</Text>
          </div>
        </Document>
      </IconContainer>
      <NavButtonContainer >
        <BinIcon type="button">
          <img src={deleteIcon} alt="delete" />
        </BinIcon>
        <Button backgroundColor="primary">
          <img src={saveIcon} alt="save" />
          <Text font="headingMed">Save Changes</Text>
        </Button>
      </NavButtonContainer>
    </Nav>
  );
};

export default NavBar;
