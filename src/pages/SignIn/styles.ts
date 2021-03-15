import styled from 'styled-components/macro';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: ${props => props.theme.colors.primary};
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    
    margin-bottom: 30px;

    > h3 {
        margin-left: 10px;
        color: ${props => props.theme.colors.white};
    }

    > img {
        width: 40px;
        height: 40px;
    }
`;

export const Form = styled.form`
    width: 300px;
    height: 300px;

    padding: 30px;

    border-radius: 10px;

    background: ${props => props.theme.colors.tertiary};

    > small {
        display: flex;
        align-items: center;

        font-size: 12px;
        
        margin: 10px 0 10px 0;
        color: ${props => props.theme.colors.white};
    }
`;

export const FormTitle = styled.h1`

    font-size: 18px;
    font-weight: 100;

    text-transform: uppercase;

    margin-bottom: 20px;

    color: ${props => props.theme.colors.white};

    &::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 5px solid ${props => props.theme.colors.success};
    }

`;