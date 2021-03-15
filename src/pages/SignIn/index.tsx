import React, { useState } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Logo, Form, FormTitle } from './styles';

import logoImage from '../../assets/logo.svg';

import { useAuth } from '../../hooks/auth';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { signIn } = useAuth();

    return (
        <Container>
            <Logo>
                <img src={logoImage} alt="Receita e Despesas"/>
                <h3>Receita e Despesas</h3>
            </Logo>
            <Form onSubmit={() => signIn(email, password)}>
                <FormTitle>Logar no sistema</FormTitle>
                <small>Usuário: email@email.com</small>
                <small>Senha: 123456</small>
                <Input 
                    required
                    type="email"
                    placeholder="Seu e-mail"
                    onChange={(event) => setEmail(event.target.value)} 
                />
                <Input 
                    required
                    type="password"
                    placeholder="Sua senha"
                    onChange={(event) => setPassword(event.target.value)}  
                />
                <Button type="submit">Acessar</Button>
            </Form>
        </Container>
    )
}

export default SignIn;