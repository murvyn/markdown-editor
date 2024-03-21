import styled from "styled-components";

const design = {
  bodyMed: {
    "font-weight": 300,
    "font-size": "13px",
  },
  headingMed: {
    "font-size": "15px",
  },
  markdown: {
    "font-family": "Roboto Mono",
    "font-size": "14px",
    "color": "#35393F",
    "line-height": " 24px",
  },
  headingSmall: {
    "font-size": "14px",
    "font-weight": 500,
    "color": "#7C8187",
    "letter-spacing": "2px",
  },
};

export const Nav = styled.div`
  width: 100%;
  height: 72px;
  background: #1d1f22;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 27px;
`;

export const Document = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
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

export const Text = styled.p<{ color?: string; font?: keyof typeof design }>`
  color: ${(props) => {
    if (props.color === "primary") return "#7C8187";
    else return "#fff";
  }};
  line-height: 24px;
  ${(props) => {
    const designObj = props.font ? design[props.font] : {};
    const styles = Object.entries(designObj)
      .map(([key, value]) => `${key}: ${value};`)
      .join(" ");
    return styles;
  }};
`;

export const Button = styled.div<{ backgroundColor?: string }>`
  display: inline-flex;
  height: 3rem;
  min-height: 3rem;
  flex-shrink: 0;
  cursor: pointer;
  user-select: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  background-color: ${(props) => {
    if (props.backgroundColor === "primary") return "#E46643";
    return "#35393f";
  }};
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1rem;
  gap: 0.5rem;
  font-weight: 600;
  text-decoration-line: none;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2);
  border-radius: 8px;
  &:hover {
    background-color: ${(props) => {
      if (props.backgroundColor === "primary") return "#F39765";
      return "#35393f";
    }};
  }
`;

export const NavButtonContainer = styled.div`
  display: flex;
  gap: 24px;
`;
export const BinIcon = styled.button`
  background: none;
  border: none;
`;
