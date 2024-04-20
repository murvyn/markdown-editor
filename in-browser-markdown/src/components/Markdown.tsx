import { Text } from "./nav/nav.styles";
import { Container, HeadingContainer, MainContainer } from "./main.styles";
import { useContext } from "react";
import { ContentContext } from "../contexts/contentContext";

const Markdown = () => {
  const { content, setContent, mode } = useContext(ContentContext);

  return (
    <MainContainer>
      <HeadingContainer mode={mode}>
        <Container>
          <Text fontStyle="headingSmall">MARKDOWN</Text>
        </Container>
      </HeadingContainer>
      <Container>
        <textarea
          className={`editor-${mode}`}
          title="markdown"
          rows={60}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Container>
    </MainContainer>
  );
};

export default Markdown;
