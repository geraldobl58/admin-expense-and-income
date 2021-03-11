import styled from 'styled-components/macro';

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    width: 100%;

    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.tertiary};

    margin: 10px 0;
    padding: 30px 20px;

    border-radius: 5px;
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
`;
