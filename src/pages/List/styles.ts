import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Content = styled.div``;

export const Filters = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    margin-bottom: 20px;

    .tag-filter {
        font-size: 18px;
        font-weight: 100;
        font-family: 'Montserrat', sans-serif; 
        background: none;
        border: none;
        cursor: pointer;
        text-transform: uppercase;
        color: ${props => props.theme.colors.white};

        margin: 0 10px;

        transition: opacity .3s;

        &:hover {
            opacity: .7;
        }
    }

    .tag-filter-recurrent::after {
        content: '';
        display: block;
        width: 55px;
        margin: 0 auto;
        border-bottom: 5px solid ${props => props.theme.colors.warning};
    }

    .tag-filter-eventual::after {
        content: '';
        display: block;
        width: 55px;
        margin: 0 auto;
        border-bottom: 5px solid ${props => props.theme.colors.success};
    }
`;