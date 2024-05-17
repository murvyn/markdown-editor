import { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { ContentContext } from "../contexts/contentContext";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div<{$mode?: 'light'|'dark'}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.$mode === 'dark' ? '#151619': '#fff'};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerContainer = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
`;

const Spinner = styled.div`
  width: 100%;
  height: 100%;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #e46643;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Loading = () => {
  const {mode} = useContext(ContentContext)
  return (
    <Container $mode={mode}>
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    </Container>
  );
};

export default Loading;
