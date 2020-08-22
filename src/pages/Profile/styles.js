import styled from 'styled-components';

export const Container = styled.div`
    padding: 16px 24px;
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;

    margin: 0 auto;
    max-width: 1280px;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

export const LeftSide = styled.div`
    padding: 0 24px;

    @media (min-width: 768px) {
        width: 25%;
        padding: 0;
        margin-top: 50px;

        img {
            padding: 7px;
        }
    }
`

export const RightSide = styled.div`
    padding: 0 24px;

    @media (min-width: 768px) {
        width: 75%;
    }
`

export const Repos = styled.div`
    margin-top: 16px;

    h2 {
        font-size: 16px;
        font-weight: normal;
    }
    div {
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;

        margin-top: 5px;
    }
    @media (min-width: 768px) {
        > div {
            grid-template-columns: 1fr 1fr;
        }
    }
`