import styled from 'styled-components/macro';

export const Container = styled.div`
    grid-area: ASIDE;

    background: ${props => props.theme.colors.secondary};

    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};
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
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
    font-size: 14px;
    text-transform: uppercase;
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
