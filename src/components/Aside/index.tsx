import React from 'react';

import logoImg from '../../assets/logo.svg';

import { 
    Container, 
    Header, 
    Logo, 
    MenuContainer, 
    MenuItemLink,
    Title,
    MenuItemButton 
} from './styles';

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md';

import { useAuth } from '../../hooks/auth';

const Aside: React.FC = () => {
    const { signOut } = useAuth();

    return (
        <Container>
            <Header>
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
        </Container>
    )
}

export default Aside;