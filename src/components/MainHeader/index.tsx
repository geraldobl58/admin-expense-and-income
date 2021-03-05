import React, { useMemo } from 'react';

import Toggle from '../Toggle';

import { Container, Profile, Welcome, UserName } from './styles';

import emojis from '../../utils/emojis';

const MainHeader: React.FC = () => {
    
    const emoji = useMemo(() => {
        const index = Math.floor(Math.random() * emojis.length);
        return emojis[index];
    }, []);

    return (
        <Container>
            <Toggle />
            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>John Doe</UserName>
            </Profile>
        </Container>
    )
}

export default MainHeader;