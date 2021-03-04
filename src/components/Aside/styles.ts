import styled from 'styled-components/macro';

export const Container = styled.div`
    grid-area: ASIDE;

    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.secondary};
`;