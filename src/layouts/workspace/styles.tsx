import { styled } from "styled-components";

export const WorkspaceWrap = styled.section`
    width: 100%;
    position: relative;
`

export const HeaderWrap = styled.header`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: #e4e4e4;

    ul {
        height: inherit;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    li {
        border: 1px solid #000;
        font-size: 14px;
    }
`

export const MainWrap = styled.main`
    width: 100%;
    height: 100vh;
    background: #fff;
`