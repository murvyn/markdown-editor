import { useContext } from "react";
import "./preview.styles.css";
import { HeadingContainer, Container, MainContainer } from "../main.styles";
import { Text } from "../nav/nav.styles";
import { ContentContext } from "../../contexts/contentContext";
import ReactMarkdown from "react-markdown";

const Preview = () => {
  const { content } = useContext(ContentContext);

  return (
    <MainContainer>
      <div className=""></div>
      <HeadingContainer>
        <Container>
          <Text fontStyle="headingSmall">PREVIEW</Text>
        </Container>
      </HeadingContainer>
      <Container>
        <ReactMarkdown className="foo" children={content} />
      </Container>
    </MainContainer>
  );
};

export default Preview;
