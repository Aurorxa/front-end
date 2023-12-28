import styled from "styled-components";

export const AppWrapper = styled.div`
    padding: 4em;
    background: papayawhip;
`
export const Button = styled.button`
    display: block;
    margin: 5px auto;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #BF4F74;
    color: #fff;
    border: 0;
    cursor: pointer;
    border-radius: 4px;
    text-decoration: none;

    &:hover {
        opacity: 0.8;
    }
`

export const NewButton = styled(Button).attrs(props => ({
  background: props.background || '#000'
}))`
    background: ${props => props.background};
`
