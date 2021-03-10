import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 48%;
    height: 260px;

    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.tertiary};

    border-radius: 5px;

    margin: 10px 0;
    padding: 30px 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > header img {
        width: 35px;
        margin-left: 5px;
    }

    > header p {
        font-size: 18px;
    }

`;