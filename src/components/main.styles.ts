import styled from "styled-components";

const design = {
  bodyMed: {
    "font-weight": 300,
    "font-size": "13px",
    "font-family": "Roboto",
  },
  headingMed: {
    "font-size": "15px",
    "font-family": "Roboto",
  },
  markdown: {
    "font-family": "Roboto Mono",
    "font-size": "14px",
    color: "#35393F",
    "line-height": "24px",
  },
  headingSmall: {
    "font-size": "14px",
    "font-weight": 500,
    color: "#7C8187",
    "letter-spacing": "2px",
    "font-family": "Roboto",
  },
  previewH1: {
    "font-size": "32px",
    "font-weight": 700,
    color: "#35393F",
    "font-family": "Roboto Slab",
    "line-height": "32px",
  },
  previewH2: {
    "font-size": "28px",
    "font-weight": 300,
    color: "#35393F",
    "font-family": "Roboto Slab",
  },
  previewH3: {
    "font-size": "24px",
    "font-weight": 700,
    color: "#35393F",
    "font-family": "Roboto Slab",
  },
  previewH4: {
    "font-size": "20px",
    "font-weight": 700,
    color: "#35393F",
    "font-family": "Roboto Slab",
  },
  previewH5: {
    "font-size": "16px",
    "font-weight": 700,
    color: "#35393F",
    "font-family": "Roboto Slab",
  },
  previewH6: {
    "font-size": "14px",
    "font-weight": 700,
    color: "#E46643",
    "font-family": "Roboto Slab",
  },
  previewPara: {
    "font-size": "14px",
    color: "#7C8187",
    "font-family": "Roboto Slab",
  },
  previewParaBold: {
    "font-size": "14px",
    "font-weight": 700,
    color: "#35393F",
    "font-family": "Roboto Slab",
  },
};

export const Text = styled.p<{
  color?: string;
  fontStyle?: keyof typeof design;
  mode?: "light" | "dark";
}>`
  color: ${(props) => {
    if (props.color === "primary") {
      return "#7C8187";
    } else {
      return "#fff";
    }
  }};
  line-height: 24px;
  ${(props) => {
    const designObj = props.fontStyle ? design[props.fontStyle] : {};
    return Object.entries(designObj)
      .map(([key, value]) => `${key}: ${value};`)
      .join(" ");
  }};
  color: ${(props) => {
    if (props.mode === "dark") {
      return "#fff";
    }
  }} !important;
  /* flex-grow: 1; */
`;

export const Button = styled.div<{ width?: string }>`
  display: inline-flex;
  width: ${(props) => {
    if (props.width) {
      return props.width;
    }
  }};
  height: 40px;
  flex-shrink: 0;
  cursor: pointer;
  user-select: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  background-color: #e46643;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1rem;
  gap: 8px;
  text-decoration-line: none;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2);
  border-radius: 4px;
  &:hover {
    background-color: #f39765;
  }
`;

export const Indent = styled.span`
  padding-left: 20px;
  font-size: 14px;
  color: #35393f;
  font-family: Roboto Mono;
`;
export const HeadingContainer = styled.div<{ mode?: "light" | "dark" }>`
  height: 42px;
  background: ${(props) => {
    if (props.mode === "dark") {
      return "#1D1F22";
    } else {
      return "#f5f5f5";
    }
  }};
  display: flex;
  align-items: center;
  /* width: 100%; */
`;

export const Container = styled.div<{ width?: string }>`
  padding: 24px;
  overflow-x: hidden;
  width: ${(props) => {
    if (props.width) {
      return props.width;
    }
  }};

  @media (max-width: 425px) {
    padding: 20px;
  }
`;
// export const Accordance = styled.div<{ bordered?: string, mode?: 'light' | 'dark' }>`
//   width: 100%;
//   background: #f5f5f5;
//   border-radius: 3px;
//   overflow: hidden;
//   ${(props) => props.bordered === 'true' && `border-left: ${props.mode === 'dark' ? '#5A6069':'#E4E4E4'} solid 4px;`}
// `;

export const Divider = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MainContainer = styled.div<{
  $bordered?: string;
  mode?: "light" | "dark";
  $hidePreview?: boolean;
}>`
  width: ${(props) => (props.$hidePreview ? "100vw" : "50vw")};
  ${(props) =>
    props.$bordered === "true" &&
    `border-left: ${props.mode === "dark" ? "#5A6069" : "#E4E4E4"} solid 1px;`}

  @media (max-width: 486px) {
    width: 100vw;
  }
`;

export const PreviewContainer = styled.div<{ $hidePreview?: boolean }>`
  @media (max-width: 486px) {
    display: ${(props) => !props.$hidePreview && "none"};
  }
`;
export const MarkdownContainer = styled.div<{ $hidePreview?: boolean }>`
  @media (max-width: 486px) {
    display: ${(props) => !props.$hidePreview && "none"};
  }
`;

export const Shadow = styled.span`
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const UnList = styled.li`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
export const OrList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 9px;
`;

export const Bullet = styled.div`
  background: #e46643;
  width: 3px;
  min-width: 3px;
  height: 3px;
  border-radius: 50%;
  margin-top: 10px;
  display: inline-block;
`;
export const Highlight = styled.span`
  color: #35393f;
  font-family: "Roboto Mono";
`;

export const Flex = styled.div<{ mode?: "light" | "dark" }>`
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  ${(props) =>
    props.mode === "dark" &&
    `
    background: #151619;
  `}
`;



export const JustifyBetween = styled.div<{
  direction?: string;
  height?: string;
  width?: string;
}>`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  height: ${(props) => {
    if (props.height) {
      return props.height;
    }
  }};
  width: ${(props) => {
    if (props.width) {
      return props.width;
    }
  }};
  ${(props) => props.direction && `flex-direction: ${props.direction};`}
`;

export const Pointer = styled.div`
  cursor: pointer;
`;
export const HidePreviewContainer = styled.div`
  width: 672px;
  padding: 24px;

  @media (max-width: 425px) {
    padding: 20px;
    width: 100%;
  }
`;
export const HidePreview = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const ToggleBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-direction: row;
`;

export const SVG = styled.svg`
  &:hover {
    fill: #e46643;
  }
`;
