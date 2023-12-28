import styled from "styled-components";

export const AppWrapper = styled.div.attrs(props => ({
  className: 'appWrapper'
}))`
    padding: 20px;
    width: 500px;
    background: papayawhip;

    .title {
        background: pink;

        &:hover {
            color: red;
        }
    }
`
