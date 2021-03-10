import React, { useMemo } from 'react';

import CountUp from 'react-countup';

import { Container } from './styles';

import dollarImage from '../../assets/dollar.svg';
import arrowUpImage from '../../assets/arrow-up.svg';
import arrowDownImage from '../../assets/arrow-down.svg';

interface IWalletBox {
    title: string;
    amount: number;
    footerLabel: string;
    icon: 'dolar' | 'arrowUp' | 'arrowDown';
    color: string;
}

const WalletBox: React.FC<IWalletBox> = ({ 
    title, 
    amount, 
    footerLabel, 
    icon, 
    color 
}) => {

    const iconSelected = useMemo(() => {
        switch(icon) {
            case 'dolar':
                return dollarImage;
            case 'arrowUp':
                return arrowUpImage;
            case 'arrowDown':
                return arrowDownImage;
            default:
                return;
        }
    }, [icon]);

    return (
        <Container color={color}>
            <span>{title}</span>
            <h1>
                <CountUp 
                    end={amount}
                    prefix={'R$ '}
                    separator='.'
                    decimal=','
                    decimals={2}
                />
            </h1>
            <small>{footerLabel}</small>
            <img src={iconSelected} alt={title} />
        </Container>
    );
}

export default WalletBox;