import styled from 'styled-components/macro';

export const Container = styled.div`
    grid-area: CONTENT;

    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.primary};
`;