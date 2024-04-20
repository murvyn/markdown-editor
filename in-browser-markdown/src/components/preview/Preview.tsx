import { useContext } from "react";
import "./preview.styles.css";
import {
  HeadingContainer,
  Container,
  MainContainer,
  JustifyBetween,
  Pointer,
  HidePreviewContainer,
  HidePreview,
} from "../main.styles";
import { Text } from "../nav/nav.styles";
import { ContentContext } from "../../contexts/contentContext";
import ReactMarkdown from "react-markdown";
import ShowPreviewIcon from "../../assets/ShowPreviewIcon";
import HidePreviewIcon from "../../assets/HidePreviewIcon";

const Preview = () => {
  const { content, hidePreview, setHidePreview } = useContext(ContentContext);

  return (
    <MainContainer>
      <div className=""></div>
      <HeadingContainer>
        <Container width="100%">
          <JustifyBetween>
            <Text fontStyle="headingSmall">PREVIEW</Text>
            <Pointer onClick={() => setHidePreview(!hidePreview)} className="">
              {!hidePreview ? (
                <ShowPreviewIcon />
              ) : (
                <HidePreviewIcon />
              )}
            </Pointer>
          </JustifyBetween>
        </Container>
      </HeadingContainer>
      {hidePreview ? (
        <HidePreview>
          <HidePreviewContainer>
            <ReactMarkdown className="foo" children={content} />
          </HidePreviewContainer>
        </HidePreview>
      ) : (
        <Container>
          <ReactMarkdown className="foo" children={content} />
        </Container>
      )}
    </MainContainer>
  );
};

export default Preview;
