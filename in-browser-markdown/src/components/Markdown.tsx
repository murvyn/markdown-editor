import { Text } from "./nav/nav.styles";
import { Container, HeadingContainer, Indent } from "./main.styles";

const Markdown = () => {
  return (
    <>
      <HeadingContainer>
        <Container>
          <Text font="headingSmall">MARKDOWN</Text>
        </Container>
      </HeadingContainer>
      <Container>
        <Text font="markdown">
          # Welcome to Markdown
          <br />
          <br />
          Markdown is a lightweight markup language that you can use to add
          formatting elements to plaintext text documents.
          <br />
          <br />
          ## How to use this?
          <br />
          <br />
          1. Write markdown in the markdown editor window <br />
          2. See the rendered markdown in the preview window
          <br />
          <br />
          ### Features
          <br />
          <br />
          - Create headings, paragraphs, links, blockquotes, inline-code, code
          blocks, and lists <br />
          - Name and save the document to access again later <br />
          - Choose between Light or Dark mode depending on your preference
          <br />
          <br />
          &gt; This is an example of a blockquote. If you would like to learn
          more about markdown syntax, you can visit this [markdown
          cheatsheet](https://www.markdownguide.org/cheat-sheet/).
          <br />
          <br />
          #### Headings
          <br />
          <br />
          To create a heading, add the hash sign (#) before the heading. The
          number of number signs you use should correspond to the heading level.
          You'll see in this guide that we've used all six heading levels (not
          necessarily in the correct way you should use headings!) to illustrate
          how they should look.
          <br />
          <br />
          ##### Lists
          <br />
          <br />
          You can see examples of ordered and unordered lists above.
          <br />
          <br />
          ###### Code Blocks
          <br />
          <br />
          This markdown editor allows for inline-code snippets, like this:{" "}
          {`\`<p>I'm inline</p>\``}. It also allows for larger code blocks like
          this:
          <br />
          <br />
          ```
          <br />
          {`<main> `}
          <br />
          <Indent>{`<h1>This is a larger code block</h1>`}</Indent>
          <br />
          {`</main>`}
          <br />
          ```
        </Text>
      </Container>
    </>
  );
};

export default Markdown;
