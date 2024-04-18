import styled from "styled-components";

export const MB = styled.div<{mb: string}>`
    margin-bottom: ${props => props.mb};
`