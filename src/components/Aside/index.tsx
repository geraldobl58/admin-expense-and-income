import React from 'react';

import logoImg from '../../assets/logo.svg';

import { 
    Container, 
    Header, 
    Logo, 
    MenuContainer, 
    MenuItemLink,
    Title 
} from './styles';

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md';

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <Logo src={logoImg} alt='Logo'></Logo>
                <Title>Receita e Despesas</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink href="/dashboard/">
                    <MdDashboard /> Dashboard
                </MenuItemLink>
                <MenuItemLink href="/list/entry-balance">
                    <MdArrowUpward /> Entrada Renda
                </MenuItemLink>
                <MenuItemLink href="/list/exit-balance">
                    <MdArrowDownward /> Saída Despesa
                </MenuItemLink>
                <MenuItemLink href="#">
                    <MdExitToApp /> Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    )
}

export default Aside;