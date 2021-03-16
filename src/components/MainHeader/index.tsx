import React, { useMemo, useState } from 'react';

import { useTheme } from '../../hooks/theme';

import { Container, Profile, Welcome, UserName, Toggle } from './styles';

import emojis from '../../utils/emojis';

const MainHeader: React.FC = () => {

    const { toggleTheme, theme } = useTheme();

    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }
    
    const emoji = useMemo(() => {
        const index = Math.floor(Math.random() * emojis.length);
        return emojis[index];
    }, []);

    return (
        <Container>
            <Toggle 
                labelLeft="Light"
                labelRight="Dark"
                checked={darkTheme}
                onChange={handleChangeTheme}
            />
            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>John Doe</UserName>
            </Profile>
        </Container>
    )
}

export default MainHeader;