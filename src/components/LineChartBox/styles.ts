import styled, { keyframes } from 'styled-components/macro';

interface ILegendProps {
    color: string;
}

const animate = keyframes`
    0% {
        transform: translateX(-100px);
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
    width: 100%;

    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.tertiary};

    margin: 10px 0;
    padding: 30px 20px;

    border-radius: 5px;

    animation: ${animate} .5s;
`;

export const ChartContainer = styled.div`
    width: 100%;
    height: 450px;
`;

export const Header = styled.header`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > h2 {
        margin-bottom: 20px;
        padding-left: 25px;
    }

    @media (max-width: 1280px) {
        flex-direction: column;
    }

`;

export const LegendContainer = styled.ul`
    list-style-type: none;

    display: flex;

    padding-right: 25px;
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;

    margin-bottom: 10px;
    margin-left: 10px;

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

    @media (max-width: 1280px) {
        > div {
            width: 30px;
            height: 30px;
        }
    }
`;
