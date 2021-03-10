import styled from 'styled-components/macro';

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    width: 48%;
    height: 260px;

    margin: 10px 0;

    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.tertiary};

    border-radius: 5px;

    display: flex;
`;

export const SideLeft = styled.aside`
    padding: 30px 20px;

    > h2 {
        margin-bottom: 20px;
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
        width: 45px;
        height: 45px;
        border-radius: 5px;

        font-size: 16px;
        line-height: 40px;
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
`;