import { useContext } from "react";
import { Container, JustifyBetween } from "../main.styles";
import { Document, DocumentIcon } from "../nav/nav.styles";
import documentIcon from "../../assets/icon-document.svg";
import { Logo, MB } from "./sidebar.styles";
import Toggle from "../Toggle";
import logo from "../../assets/logo.svg";
import { FileManagerContext } from "../../contexts/fIleManagerContext";
import { ContentContext } from "../../contexts/contentContext";
import {Button, Text} from '../main.styles'
import { SideBarBox } from "./sidebar.styles";

const SideBar = () => {
  const { files } = useContext(FileManagerContext);
  const {setId, setShowSideBar, setNewDoc, setContent, setFileName} = useContext(ContentContext)
  // const reversedFiles = [...files].reverse();

  const handleAddDocument = () => {
    setNewDoc(true)
    setShowSideBar(false)
    setFileName('')
    setContent('')

  }

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "long",
      year: "numeric",
    };
    return date.toLocaleDateString("en-GB", options);
  };

  return (
    <SideBarBox>
      <Container width="100%">
        <JustifyBetween height="100%" direction="column">
          <div className="">
            <MB mb="17px">
              <Logo>
                <img src={logo} alt="logo" />
              </Logo>
            </MB>

            <MB mb="29px">
              <Text fontStyle="headingSmall">MY DOCUMENT</Text>
            </MB>
            <MB mb="24px">
              <Button onClick={handleAddDocument} width="100%">
                <Text fontStyle="headingMed">+New Document</Text>
              </Button>
            </MB>
            {files?.map((file, index) => {
              const inputDate = new Date(file.date);
              const formattedDate = formatDate(inputDate);
              return (
                <Document key={index} mb="26px">
                  <DocumentIcon>
                    <img src={documentIcon} alt="document" />
                  </DocumentIcon>
                  <div className="">
                    <Text fontStyle="bodyMed" color="primary">
                      {formattedDate}
                    </Text>
                    <Text onClick={() => {
                      setId(file?.id)
                      setShowSideBar(false)
                      }} className="hover" fontStyle="headingMed">
                      {file?.upload?.name}
                    </Text>

                  </div>
                </Document>
              );
            })}
           
          </div>
          <Toggle />
        </JustifyBetween>
      </Container>
    </SideBarBox>
  );
};

export default SideBar;
