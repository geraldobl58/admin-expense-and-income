import styled, { keyframes } from 'styled-components/macro';

interface ILegendProps {
    color: string;
}

const animate = keyframes`
    0% {
        transform: translateX(100px);
        opacity: 0;
    }
    50% {
        opacity: .3s;
    }
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const Container = styled.div`
    width: 48%;
    height: 260px;

    margin: 10px 0;

    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.tertiary};

    border-radius: 5px;

    display: flex;

    animation: ${animate} .5s;

    @media (max-width: 770px) {
        display: flex;
        width: 100%;
    }
`;

export const SideLeft = styled.aside`
    padding: 30px 20px;

    > h2 {
        margin-bottom: 20px;
    }

    @media (max-width: 1345px) {
        padding: 0 15px 5px;
        margin-bottom: 7px;

        > h2 {
            margin-top: 15px;
            margin-bottom: 7px;
        }
    }

    @media (max-width: 420px) {
        padding: 15px;
        margin-bottom: 7px;
    }
`;

export const LegendContainer = styled.ul`
    list-style-type: none;

    max-height: 175px;
    padding-right: 15px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};
    }
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;

    margin-bottom: 10px;

    > div {
        width: 50px;
        height: 50px;
        border-radius: 5px;

        font-size: 14px;
        font-weight: 500;
        line-height: 50px;
        text-align: center;

        background: ${props => props.color};
    }

    > span {
        margin-left: 10px;
    }
`;

export const SideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;

    @media (max-width: 420px) {
        width: 50%;
        margin-left: -30px;
    }
`;