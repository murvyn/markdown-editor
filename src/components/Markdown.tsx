import { DisplayMobileInverse } from "./nav/nav.styles";
import {
  Container,
  HeadingContainer,
  JustifyBetween,
  MainContainer,
  MarkdownContainer,
  Pointer,
} from "./main.styles";
import { useContext } from "react";
import { ContentContext } from "../contexts/contentContext";
import ShowPreviewIcon from "../assets/ShowPreviewIcon";
import HidePreviewIcon from "../assets/HidePreviewIcon";
import { Text } from "./main.styles";

const Markdown = () => {
  const { content, setContent, mode, hidePreview, setHidePreview } =
    useContext(ContentContext);

  return (
    <MainContainer>
      <MarkdownContainer $hidePreview={!hidePreview}>
        <HeadingContainer mode={mode}>
          <Container width="100%">
            <JustifyBetween>
              <Text fontStyle="headingSmall">MARKDOWN</Text>
              <DisplayMobileInverse>
                <Pointer
                  onClick={() => setHidePreview(!hidePreview)}
                  className=""
                >
                  {!hidePreview ? <ShowPreviewIcon /> : <HidePreviewIcon />}
                </Pointer>
              </DisplayMobileInverse>
            </JustifyBetween>
          </Container>
        </HeadingContainer>
        <Container className="over">
          <div className="padding">
            <textarea
              className={`editor-${mode}`}
              title="markdown"
              rows={60}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </Container>
      </MarkdownContainer>
    </MainContainer>
  );
};

export default Markdown;
