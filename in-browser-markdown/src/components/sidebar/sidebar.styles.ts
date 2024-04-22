import styled from "styled-components";

export const MB = styled.div<{mb: string}>`
    margin-bottom: ${props => props.mb};
`
export const Logo = styled.div`
@media (min-width: 769px) {
    display: none;
  }
`