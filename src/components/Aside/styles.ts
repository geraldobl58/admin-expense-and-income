import styled, { css } from 'styled-components/macro';

interface IContainerProps {
    menuIsOpen: boolean;
}
interface IThemeToggleFooterProps {
    menuIsOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
    grid-area: ASIDE;

    background: ${props => props.theme.colors.secondary};

    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};

    position: relative;

    @media (max-width: 600px) {
        padding-left: 7px;
        position: fixed;
        z-index: 2;

        width: 200px;

        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow: hidden;

        ${props => !props.menuIsOpen && css`
            border: none;
        `}
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;

    margin-top: 15px;
`;

export const Logo = styled.img`
    width: 40px;
    height: 40px;

    @media (max-width: 600px) {
        display: none;
    }
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
    font-size: 14px;
    text-transform: uppercase;

    @media (max-width: 600px) {
        display: none;
    }
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;

    margin-top: 50px;
`;

export const MenuItemLink = styled.a`

    display: flex;
    align-items: center;

    color: ${props => props.theme.colors.white};

    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;

    transition: opacity .3s;

    margin: 10px 0;

    &:hover {
        opacity: .7;
    }

    > svg {
        font-size: 18px;
        margin-right: 10px;
    }
`;

export const MenuItemButton = styled.button`
    display: flex;
    align-items: center;

    color: ${props => props.theme.colors.white};

    background: none;

    border: none;

    cursor: pointer;

    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;

    transition: opacity .3s;

    margin: 10px 0;

    &:hover {
        opacity: .7;
    }

    > svg {
        font-size: 18px;
        margin-right: 10px;
    }
`;

export const ToggleMenu = styled.button`
    width: 40px;
    height: 40px;

    border-radius: 5px;
     
    font-size: 22px;

    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.warning};

    transition: opacity 0.3s;

    &:hover {
        opacity: 0.3s;
    }

    display: none;

    @media (max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const ThemeToggleFooter = styled.footer<IThemeToggleFooterProps>`
    display: none;

    position: absolute;
    bottom: 30px;

    @media (max-width: 470px) {
        display: ${props => props.menuIsOpen ? 'flex' : 'none'};
    }
`;