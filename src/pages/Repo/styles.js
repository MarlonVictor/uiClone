import styled, { css } from 'styled-components';
import { RiBookmarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 16px;

    p {
        font-size: 16px;
    }

    @media (min-width: 768px) {
        height: 300px;
        padding: 0;
        position: relative;

        p {
            position: absolute;
            right: 80px;
            top: 180px;

            width: 300px;

            &::before {
                content: 'About';
                cursor: pointer;

                position: absolute;
                bottom: 125%;
                font-weight: 600;
            }
        }
    }
`

export const BgBlock = styled.div`
    @media (min-width: 768px) {
        background: var(--bgBlock);
        padding: 16px 0 40px 20px;
        border-bottom: 1px solid var(--border);
    }
`

export const Breadcrumb = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    white-space: nowrap;

    margin-bottom: 16px;
    font-size: 18px;

    a {
        color: var(--link);
        text-decoration: none;

        &:hover, &:focus {
            text-decoration: underline;
        }
        &.username {
            margin-left: 8px;
        }
        &.reponame {
            font-weight: 600;
        }
    }
    span {
        padding: 0 5px;
    }

    @media (min-width: 768px) {
        font-size: 20px;
        padding: 5px;
    }
`

export const Stats = styled.ul`
    display: flex;
    align-items: center;

    margin-top: 16px;

    li {
        display: flex;
        align-items: center;
        margin-right: 9px;

        font-size: 15px;
        color: var(--gray);
        
        span {
            padding-left: 4px;

            font-size: 16px;
            color: var(--gray);
        }
        * {
            margin-right: 7px;
        }
    }

    @media (min-width: 768px) {
        position: absolute;
        top: 8px;
        right: 80px;

        li, li span {
            font-size: 17px;
        }
    }
`

export const LinkButton = styled.a`
    margin: 50px auto 0;
    padding: 12px 17px;
    width: max-content;

    background: var(--gray-dark);
    border-radius: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;

    span {
        color: var(--primary);
    }
    svg {
        fill: var(--primary);
        margin-right: 10px;
    }
    &:hover {
        cursor: pointer;
        filter: brightness(80%);
    }

    @media (min-width: 768px) {
        margin-top: 75px;
        padding: 17px 25px;
        transform: translateX(-150px);
        
        border-radius: 0;
    }
`

//Icons
const iconCSS = css`
    width: 16px;
    height: 16px;
    fill: var(--icon);
    flex-shrink: 0;
`

export const RepoIcon = styled(RiBookmarkLine)`
    ${iconCSS}
`

export const StarIcon = styled(RiStarLine)`
    ${iconCSS}
`

export const ForkIcon = styled(AiOutlineFork)`
    ${iconCSS}
`

export const GithubIcon = styled(FaGithub)`
    ${iconCSS}
`