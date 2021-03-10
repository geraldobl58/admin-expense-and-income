import React, { useState, useMemo } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';

import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';

import listOfMonths from '../../utils/months';

import happyImage from '../../assets/happy.svg';
import sadImage from '../../assets/sad.svg';

import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        [...expenses, ...gains].forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year);
            }
        });

        return uniqueYears.map((year) => {
            return {
                value: year,
                label: year,
            }
        });

    }, []);

    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month,
            }
        });
    }, []);

    const totalExpenses = useMemo(() => {
        let total: number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount);
                } catch(error) {
                    console.log(error);
                }
            }
        });

        return total;

    }, [monthSelected, yearSelected]);

    const totalGains = useMemo(() => {
        let total: number = 0;

        gains.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            
            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount);
                } catch(error) {
                    console.log(error);
                }
            }
        });

        return total;
    }, [monthSelected, yearSelected]);

    const totalBalance = useMemo(() => {
        return totalGains - totalExpenses;
    }, [totalExpenses, totalGains]);

    const message = useMemo(() => {
        if (totalBalance < 0) {
            return {
                title: 'Whoops',
                description: 'Neste mês, você gastou mais do que deveria.',
                footerText: 'Verifique seus gastos e tenha cuidado.',
                icon: sadImage,
            }
        } else if (totalBalance === 0) {
            return {
                title: 'Uffa',
                description: 'Neste mês, você gastou exatamente o que ganhou.',
                footerText: 'Tenha cuidado, no próximo mês tente poupar seu dinheiro.',
                icon: happyImage,
            }
        } else {
            return {
                title: "Muito bem",
                description: "Seu saldo está positivo!",
                footerText: "Continue assim. Considere investir o seu saldo.",
                icon: happyImage
            }
        }
    }, [totalBalance]);

    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        } catch(error) {
            console.log(error);
        }
    }

    const handleYearSelected = (year: string) => {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="orange">
                <SelectInput 
                    options={months} 
                    onChange={(e) => handleMonthSelected(e.target.value)}
                    defaultValue={monthSelected} 
                />
                <SelectInput 
                    options={years} 
                    onChange={(e) => handleYearSelected(e.target.value)}
                    defaultValue={yearSelected} 
                />
            </ContentHeader>
            <Content>
                <WalletBox 
                    title='saldo'
                    amount={totalBalance}
                    footerLabel='atualizado com base nas entradas e saídas'
                    icon="dolar"
                    color="#4e41f0"
                />
                <WalletBox 
                    title='entradas'
                    amount={totalGains}
                    footerLabel='atualizado com base nas entradas e saídas'
                    icon="arrowUp"
                    color="#f79318"
                />
                <WalletBox 
                    title='saídas'
                    amount={totalExpenses}
                    footerLabel='atualizado com base nas entradas e saídas'
                    icon="arrowDown"
                    color="#e44c4e"
                />
                <MessageBox 
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon}
                />
            </Content>
        </Container>
    )
}

export default Dashboard;