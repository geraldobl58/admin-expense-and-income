import styled from 'styled-components/macro';

export const Container = styled.button`
    width: 100%;

    margin: 5px 0;
    padding: 10px;

    border-radius: 5px;

    font-weight: 300;
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.warning};

    transition: opacity .3s;

    border: none;

    cursor: pointer;

    &:hover {
        opacity: .7s;
    }
`;