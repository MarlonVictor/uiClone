import styled from 'styled-components';
import { RiBookMarkLine } from 'react-icons/ri'

export const Container = styled.div`
    padding: 16px 24px;
    overflow: hidden;
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
    padding: 0 24px 0 16px;

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

export const CalendarHeading = styled.span`
    font-size: 16px;
    margin: 36px 0 9px;
    display: inline-flex;
`

export const RepoIcon = styled(RiBookMarkLine)`
    width: 16px;
    height: 16px;
    margin-right: 4px;
`

export const Tab = styled.div`
    background: var(--primary);
    
    .content {
        display: flex;
        align-items: center;

        width: min-content;
        padding: 14px 16px;

        cursor: pointer;
        border-bottom: 2px solid var(--orange);

        .label {
            font-size: 14px;
            padding: 0 7px;
            font-weight: 600;
        }
        .number {
            font-size: 12px;
            background: var(--ticker);
            padding: 2px 6px;
            border-radius: 24px;
        }
    }
    .line {
        display: flex;
        width: 200vw;
        border-bottom: 1px solid var(--border);
        margin-left: -50vw;
    }
    &.mobile {
        margin-top: 16px;

        .content {
            margin: 0 auto;
        }
        @media(min-width: 768px) {
            display: none;
        }
    }
    &.desktop {
        display: none;

        @media(min-width: 768px) {
            display: unset;

            .wrapper {
                display: flex;
                margin: 5px auto 0;
                max-width: 1280px;
            }
            .offset {
                width: 25%;
                margin-right: 16px
            }
        }
    }

`
