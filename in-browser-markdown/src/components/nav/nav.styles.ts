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

export const Nav = styled.div`
  width: 100vw;
  height: 72px;
  background: #2B2D31;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
  justify-self: center;
  overflow-x: hidden;
  /* padding-right: 24px; */
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 27px;
`;

export const Document = styled.div<{ mb?: string }>`
  display: flex;
  align-items: center;
  gap: 16px;
  ${(props) => {
    if (props.mb) {
      return `margin-bottom: ${props.mb};`;
    }
  }}
`;

export const Menu = styled.div`
  display: inline-flex;
  height: 72px;
  width: 72px;
  flex-shrink: 0;
  cursor: pointer;
  user-select: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  background-color: #35393f;

  &:hover {
    background-color: #e46643;
  }
`;
export const Heading = styled.p`
  font-size: 15px;
  color: #ffffff;
  letter-spacing: 6px;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

export const Line = styled.div`
  height: 40px;
  width: 1px;
  background-color: #e46643;
  display: flex;
  align-self: center;
`;
export const DocumentIcon = styled.div`
  height: 16px;
  overflow: hidden;
`;

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

export const NavButtonContainer = styled.div`
  display: flex;
  width: auto;
  gap: 24px;
`;
export const BinIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const Pad = styled.div`
  padding: 24px;
`;
export const PadSides = styled.div`
  padding-left: 24px;
  padding-right: 24px;
`;
