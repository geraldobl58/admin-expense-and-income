import React, { useState } from 'react';

import Toggle from '../../components/Toggle';

import logoImg from '../../assets/logo.svg';

import { 
    Container, 
    Header, 
    Logo, 
    MenuContainer, 
    MenuItemLink,
    Title,
    MenuItemButton,
    ToggleMenu,
    ThemeToggleFooter, 
} from './styles';

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdClose,
    MdMenu
} from 'react-icons/md';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

const Aside: React.FC = () => {
    const { signOut } = useAuth();
    const { toggleTheme, theme } = useTheme();

    const [toggleMenuIsOpen, setToggleMenuIsOpen] = useState(false);
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);
    
    const handleToggleMenu = () => {
        setToggleMenuIsOpen(!toggleMenuIsOpen);
    }

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    return (
        <Container menuIsOpen={toggleMenuIsOpen}>
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                    {toggleMenuIsOpen ? <MdClose /> : <MdMenu />}
                </ToggleMenu>
                <Logo src={logoImg} alt='Logo'></Logo>
                <Title>Receita e Despesas</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink href="/">
                    <MdDashboard /> Dashboard
                </MenuItemLink>
                <MenuItemLink href="/list/entry-balance">
                    <MdArrowUpward /> Entrada Renda
                </MenuItemLink>
                <MenuItemLink href="/list/exit-balance">
                    <MdArrowDownward /> Saída Despesa
                </MenuItemLink>
                <MenuItemButton onClick={signOut}>
                    <MdExitToApp /> Sair
                </MenuItemButton>
            </MenuContainer>
            <ThemeToggleFooter menuIsOpen={toggleMenuIsOpen}>
                <Toggle 
                    labelLeft="Light"
                    labelRight="Dark"
                    checked={darkTheme}
                    onChange={handleChangeTheme}
                />
            </ThemeToggleFooter>
        </Container>
    )
}

export default Aside;