import styled from "styled-components";

export const Background = styled.div<{ mode?: "light" | "dark" }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => {
    if (props.mode === "dark") {
      return "rgba(48.63%, 50.59%, 52.94%,0.5)";
    } else {
      return "rgba(0,0,0,0.5)";
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeleteBox = styled.div<{ mode?: "light" | "dark" }>`
  width: 343px;
  height: 218px;
  background:${(props) => {
    if (props.mode === "dark") {
      return "#1D1F22";
    } else {
      return "#fff";
    }
  }};
`;
export const VStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
