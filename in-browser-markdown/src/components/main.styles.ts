import styled from "styled-components";

export const Indent = styled.span`
  padding-left: 20px;
  font-size: 14px;
  color: #35393f;
  font-family: Roboto Mono;
`;
export const HeadingContainer = styled.div<{mode?: 'light' | 'dark'}>`
  height: 42px;
  background: ${props => {
    if(props.mode === 'dark'){
      return '#1D1F22'
    } else{
      return '#f5f5f5'
    }
  }};
  display: flex;
  align-items: center;
`;

export const Container = styled.div<{width?: string}>`
  padding: 24px;
    overflow-x: hidden;
    word-break: break-all;
  width: ${(props) => {
    if (props.width) {
      return props.width;
    }
  }};
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

export const MainContainer = styled.div<{bordered?: string, mode?: 'light' | 'dark'}>`
  width: 50vw;
  ${(props) => props.bordered === 'true' && 
  `border-left: ${(props.mode === 'dark') ? '#5A6069':'#E4E4E4'} solid 1px;`}

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

export const Flex = styled.div<{mode?: 'light' | 'dark'}>`
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  ${(props) => props.mode === 'dark' && `
    background: #151619;
  `}
`;

export const SideBarBox = styled.div`
  min-width: 250px;
  max-height: 100vh;
  background: #1d1f22;
  display: flex;
`;

export const JustifyBetween = styled.div<{direction?: string, height?: string}>`
display: flex;
justify-content: space-between;
justify-items: center;
height: ${(props) => {
    if (props.height) {
      return props.height;
    }
  }};
${(props) => props.direction && `flex-direction: ${props.direction};`}
`

export const Pointer = styled.div`
cursor: pointer;
`
export const HidePreviewContainer = styled.div`
  width: 672px;
  padding-top: 24px;
`
export const HidePreview = styled.div`
width: 100%;
display: flex;
justify-content: center;
`
export const ToggleBox= styled.div`
display: flex;
gap: 12px;
align-items: center;
flex-direction: row;
`

export const SVG = styled.svg`
&:hover{
  fill: #e46643;
}
`