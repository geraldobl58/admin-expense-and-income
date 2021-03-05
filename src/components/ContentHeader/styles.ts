import styled from 'styled-components/macro';

interface ITitleProps {
    lineColor: string;
}

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;

    margin-bottom: 25px;
`;

export const Title = styled.div<ITitleProps>`
    > h3 {
        color: ${props => props.theme.colors.white};

        &::after {
            content: '';
            display: block;
            width: 25px;
            border-bottom: 5px solid ${props => props.lineColor};
        }
    }
`;

export const Controllers = styled.div`
    display: flex;
`;