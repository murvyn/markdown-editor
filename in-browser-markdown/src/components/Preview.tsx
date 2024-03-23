import {
  HeadingContainer,
  Container,
  Accordance,
  Indent,
  MainContainer,
  UnList,
  OrList,
  Bullet,
  Highlight,
} from "./main.styles";
import { Pad, PadSides, Text } from "./nav/nav.styles";

const Preview = () => {
  return (
    <MainContainer>
      <HeadingContainer>
        <Container>
          <Text font="headingSmall">PREVIEW</Text>
        </Container>
      </HeadingContainer>
      <Container>
        <br />
        <Text font="previewH1">Welcome To Markdown</Text>
        <br />
        <Text font="previewPara">
          Markdown is a lightweight markup language that you can use to add
          formatting elements to plaintext text documents.
        </Text>
        <br />
        <Text font="previewH2">How to use this?</Text>
        <br />
        <PadSides>
          <OrList>
            <Text font="previewPara">1.</Text>
            <Text font="previewPara">
              Write markdown in the markdown editor window
            </Text>
          </OrList>
          <OrList>
            <Text font="previewPara">2.</Text>
            <Text font="previewPara">
              See the rendered markdown in the preview window
            </Text>
          </OrList>
        </PadSides>

        <br />
        <Text font="previewH3">Features</Text>
        <br />
        <PadSides>
          <UnList>
            <Bullet />
            <Text font="previewPara">
              Create headings, paragraphs, links, blockquotes, inline-code, code
              blocks, and lists
            </Text>
          </UnList>
          <UnList>
            <Bullet />
            <Text font="previewPara">
              Name and save the document to access again
            </Text>
          </UnList>
          <UnList>
            <Bullet />
            <Text font="previewPara">
              Choose between Light or Dark mode depending on your preference
            </Text>
          </UnList>
        </PadSides>
        <br />
        <Accordance bordered>
          <Pad>
            <Text font="previewParaBold">
              This is an example of a blockquote. If you would like to learn
              more about markdown syntax, you can visit this markdown cheatsheet
            </Text>
          </Pad>
        </Accordance>
        <br />
        <Text font="previewH4">Headings</Text>
        <br />
        <Text font="previewPara">
          To create a heading, add the hash sign (#) before the heading. The
          number of number signs you use should correspond to the heading level.
          You'll see in this guide that we've used all six heading levels (not
          necessarily in the correct way you should use headings!) to illustrate
          how they should look.
        </Text>
        <br />
        <Text font="previewH5">Lists</Text>
        <br />
        <Text font="previewPara">
          You can see examples of ordered and unordered lists above.
        </Text>
        <br />
        <Text font="previewH6">Code Blocks</Text>
        <br />
        <Text font="previewPara">
          This markdown editor allows for inline-code snippets, like this:{" "}
          <Highlight>{`<p>I'm inline</p>`}</Highlight>. It also allows for larger code blocks like
          this:
        </Text>
        <br />
        <Accordance>
          <Pad>
            <Text font="markdown">
              {`<main> `}
              <br />
              <Indent>{`<h1>This is a larger code block</h1>`}</Indent>
              <br />
              {`</main>`}
            </Text>
          </Pad>
        </Accordance>
      </Container>
    </MainContainer>
  );
};

export default Preview;
