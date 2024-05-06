import styled from "styled-components";



export const Nav = styled.div`
  width: 100vw;
  height: 72px;
  background: #2b2d31;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
  justify-self: center;
  overflow-x: hidden;
  /* padding-right: 24px; */

  @media (max-width: 425px) {
    height: 56px;
  /* width: 56px; */
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 27px;

  @media (max-width: 425px) {
    gap: 24px;
  }
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

  @media (max-width: 425px) {
    height: 56px;
  width: 56px;
  }

  &:hover {
    background-color: #e46643;
  }
`;
export const Heading = styled.p`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Line = styled.div`
  height: 40px;
  width: 1px;
  background-color: #e46643;
  display: flex;
  align-self: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DisplayMobile = styled.div`
  @media (max-width: 593px) {
    display: none;
  }
`;
export const DisplayMobileInverse = styled.div`
  @media (min-width: 593px) {
    display: none;
  }
`;

export const DocumentIcon = styled.div`
  height: 16px;
  overflow: hidden;
  width: 13.71px;
  flex-shrink: 0;
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
