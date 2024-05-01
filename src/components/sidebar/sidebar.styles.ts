import styled from "styled-components";

export const MB = styled.div<{mb: string}>`
    margin-bottom: ${props => props.mb};
`
export const Logo = styled.div`
@media (min-width: 769px) {
    display: none;
  }
`

export const LabelButton = styled.label`
  display: inline-flex;
  width: 100%;
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