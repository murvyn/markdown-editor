import { useContext } from "react";
import { ContentContext } from "../../contexts/contentContext";
import { Container, JustifyBetween, SideBarBox } from "../main.styles";
import { Button, Document, DocumentIcon, Text } from "../nav/nav.styles";
import documentIcon from "../../assets/icon-document.svg";
import { MB } from "./sidebar.styles";
import Toggle from "../Toggle";

const SideBar = () => {
  const { fileName } = useContext(ContentContext);
  return (
    <SideBarBox>
      <Container width="100%" >
        <JustifyBetween width="100%" direction="column">
          <div className="">
            <MB mb="29px">
              <Text fontStyle="headingSmall">MY DOCUMENT</Text>
            </MB>
            <MB mb="24px">
              <Button width="100%">
                <Text fontStyle="headingMed">+New Document</Text>
              </Button>
            </MB>
            <Document mb="26px">
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
          </div>
          <Toggle />
        </JustifyBetween>
      </Container>
    </SideBarBox>
  );
};

export default SideBar;
