import styled, { css } from "styled-components";

export const Switch = styled.label`
position: relative;
display: inline-block;
width: 48px;
height: 24px;

input {
    opacity: 0;
    width: 0;
    height: 0;
}
`
export const Slider = styled.span<{mode: string}>`
position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: #5A6069;
border-radius: 14.5px;

&:before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    left: 6px;
    bottom: 6px;
    background: #fff;
    border-radius: 50%;
    transition: 0.4s;
}

${props => props.mode === 'light' && css`
&:before{
    transform: translateX(24px);
}
`}

`