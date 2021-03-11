import React from 'react';

import {  
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';

import formatCurrency from '../../utils/formatCurrency';

import { Container, ChartContainer, Header, LegendContainer, Legend } from './styles';

interface ILineChartBox {
    data: {
        month: string;
        amountEntry: number;
        amountOutput: number;
    }[],
    lineColorAmountOutput: string;
    lineColorAmountEntry: string;
}

const LineChartBox: React.FC<ILineChartBox> = ({
    data,
    lineColorAmountEntry,
    lineColorAmountOutput
}) => {
    return (
        <Container>
            <Header>
                <h2>Histórico de saldo</h2>
                <LegendContainer>
                    <Legend color={lineColorAmountEntry}>
                        <div></div>
                        <span>Entradas</span>
                    </Legend>
                    <Legend color={lineColorAmountOutput}>
                        <div></div>
                        <span>Saídas</span>
                    </Legend>
                </LegendContainer>
            </Header>
            <ChartContainer>
                <ResponsiveContainer>
                    <LineChart data={data} margin={{ top: 5, right: 20, left: 30, bottom: 5 }}>
                        <CartesianGrid strokeDasharray='3 3' stroke='#cecece' />
                        <XAxis dataKey='month' stroke='#cecece' />
                        <Tooltip formatter={(value: number) => formatCurrency(Number(value))} />
                        <Line 
                            type='monotone'
                            dataKey='amountOutput'
                            name='Saídas'
                            stroke={lineColorAmountOutput}
                            strokeWidth={5}
                            dot={{ r: 5 }}
                            activeDot={{ r: 8 }}
                        />
                        <Line 
                            type='monotone'
                            dataKey='amountEntry'
                            name='Entradas'
                            stroke={lineColorAmountEntry}
                            strokeWidth={5}
                            dot={{ r: 5 }}
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </ChartContainer>
        </Container>
    );
}

export default LineChartBox;