import styled, { css } from 'styled-components';
import { FaGithub, FaRegBell } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: var(--header);
    padding: 10px 16px;

    &.mobile {
        justify-content: space-between;
    }
`

export const GithubLogo = styled(FaGithub)`
    fill: var(--logo);
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`

export const SearchForm = styled.form`
    padding-left: 16px;

    input {
        background: var(--search);
        outline: 0;
        border-radius: 6px;
        padding: 5px 12px;
        width: 270px;

        &::placeholder {
            color: var(--search-placeholder);
        }
        &:focus {
            background: var(--border);

            &::placeholder {
                color: var(--black);
            }
            @media(min-width: 920px) {
                width: 500px;
            }
        }

        transition: width 0.2s ease-out, color 0.2s ease-out;
    }
    &.mobile {
        padding: 0;

        input {
            width: 100%;
        }
    }
`

export const Links = styled.span`
    display: flex;
    padding-left: 10px;

    p {
        color: var(--logo);
        font-size: 14px;
        font-weight: 500;

        padding: 0 8px;

        &:hover {
            cursor: pointer;
            color: #ccc;
        }
    }
    &.mobile {
        flex-direction: column;
        padding-top: 20px;
        padding-left: 0;
        
        p {
            padding: 8px 0;
            border-top: 1px solid var(--search);
        }
    }
`

const cssIcon = css`
    fill: var(--border);
    width: 25px;
    height: 25px;
    flex-shrink: 0;
    cursor: pointer;
`

export const MenuIcon = styled(AiOutlineMenu)`
    ${cssIcon}
`

export const MenuBell = styled(FaRegBell)`
    ${cssIcon}
`

export const Menu = styled.div`
    width: 100%;
    
    background: var(--header);
    padding: 5px 20px 15px;
`