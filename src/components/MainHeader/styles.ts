import styled from 'styled-components/macro';

import ToggleComponent from '../Toggle';

export const Container = styled.div`
    grid-area: MAINHEADER;

    background: ${props => props.theme.colors.secondary};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 10px;
    border-bottom: 1px solid ${props => props.theme.colors.gray};

    span {
        font-size: 12px;
        font-weight: 100;

        text-transform: uppercase;
    }
`;

export const Profile = styled.div`
    color: ${props => props.theme.colors.white};
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;

export const Toggle = styled(ToggleComponent)`
`;