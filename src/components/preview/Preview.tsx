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
  PreviewContainer,
  PreviewBox,
} from "../main.styles";
import { Text } from "../main.styles";
import { ContentContext } from "../../contexts/contentContext";
import ReactMarkdown from "react-markdown";
import ShowPreviewIcon from "../../assets/ShowPreviewIcon";
import HidePreviewIcon from "../../assets/HidePreviewIcon";

const Preview = () => {
  const { content, hidePreview, setHidePreview, mode } =
    useContext(ContentContext);

  return (
    <MainContainer
      $hidePreview={hidePreview}
      $bordered={hidePreview ? "" : "true"}
      mode={mode}
    >
      <PreviewContainer $hidePreview={hidePreview}>
        <div className=""></div>
        <HeadingContainer mode={mode}>
          <Container width="100%">
            <JustifyBetween>
              <Text fontStyle="headingSmall">PREVIEW</Text>
              <Pointer
                onClick={() => setHidePreview(!hidePreview)}
                className=""
              >
                {!hidePreview ? <ShowPreviewIcon /> : <HidePreviewIcon />}
              </Pointer>
            </JustifyBetween>
          </Container>
        </HeadingContainer>
        {hidePreview ? (
          <HidePreview className="over">
            <HidePreviewContainer>
              <PreviewBox $mode={mode} className="padding">
                <ReactMarkdown children={content} />
              </PreviewBox>
            </HidePreviewContainer>
          </HidePreview>
        ) : (
          <Container className="over">
            <PreviewBox $mode={mode} className="padding">
              <ReactMarkdown children={content} />
            </PreviewBox>
          </Container>
        )}
      </PreviewContainer>
    </MainContainer>
  );
};

export default Preview;
