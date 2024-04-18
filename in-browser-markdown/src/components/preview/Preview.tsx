import { useContext } from "react";
import "./preview.styles.css";
import {
  HeadingContainer,
  Container,
  MainContainer,
  JustifyBetween,
  Pointer,
} from "../main.styles";
import { Text } from "../nav/nav.styles";
import { ContentContext } from "../../contexts/contentContext";
import ReactMarkdown from "react-markdown";
import eyesIcon from "../../assets/icon-show-preview.svg";
import hideIcon from "../../assets/icon-hide-preview.svg";

const Preview = () => {
  const { content, hidePreview, setHidePreview } = useContext(ContentContext);

  return (
    <MainContainer>
      <div className=""></div>
      <HeadingContainer>
        <Container full>
          <JustifyBetween>
            <Text fontStyle="headingSmall">PREVIEW</Text>
            <Pointer onClick={() => setHidePreview(!hidePreview)} className="">
              {!hidePreview ? 
              <img src={eyesIcon} alt="eye icon" />
              :
              <img src={hideIcon} alt="icon" />
              }
            </Pointer>
          </JustifyBetween>
        </Container>
      </HeadingContainer>
      <Container>
        <ReactMarkdown className="foo" children={content} />
      </Container>
    </MainContainer>
  );
};

export default Preview;
