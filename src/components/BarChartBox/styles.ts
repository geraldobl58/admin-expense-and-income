import styled from 'styled-components/macro';

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    margin: 10px 0;

    width: 48%;
    min-height: 260px;

    border-radius: 5px;

    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.tertiary};

    display: flex;
`;

export const SideLeft = styled.aside`
    flex: 1;
    padding: 30px 20px;

    > h2 {
        margin-bottom: 10px;
        padding-left: 26px;
    }
`;

export const SideRight = styled.div`
    flex: 1;
    min-height: 150px;

    display: flex;
    justify-content: center;

    padding-top: 35px;
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
    padding-left: 26px;

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