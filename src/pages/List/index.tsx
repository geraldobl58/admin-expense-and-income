import React, { useMemo, useState, useEffect } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import FinancialCard from '../../components/FinancialCard';

import { Container, Content, Filters } from './styles';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {
    const [data, setData] = useState<IData[]>([]);

    const { type } = match.params;

    const customTitle = useMemo(() => {
        return type === 'entry-balance' ? {
            title: 'Entrada Renda',
            lineColor: '#92e44c'
        } : {
            title: 'Saída Despesas',
            lineColor: '#e44c4e'
        };
    }, [type]);

    const months = [
        { value: 3, label: 'Março' },
        { value: 4, label: 'Abril' },
        { value: 5, label: 'Maio' },
    ];

    const years = [
        { value: 2021, label: 2021 },
        { value: 2022, label: 2022 },
        { value: 2023, label: 2023 },
    ];

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
    }, [type]);

    useEffect(() => {
        const response = listData.map((item) => {
            return {
                id: String(Math.random() * data.length),
                description: item.description,
                amountFormatted: item.amount,
                frequency: item.frequency,
                dateFormatted: item.date,
                tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44c4e'
            }
        });
        setData(response);
    }, []);

    return (
        <Container>
            <ContentHeader title={customTitle.title} lineColor={customTitle.lineColor}>
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>
            <Filters>
                <button 
                    type="button" 
                    className="tag-filter tag-filter-recurrent"
                >
                    Recorrentes
                </button>
                <button 
                    type="button" 
                    className="tag-filter tag-filter-eventual"
                >
                    Eventuais
                </button>
            </Filters>
            <Content>
                {data.map((item) => (
                    <FinancialCard
                        key={item.id} 
                        tagColor={item.tagColor}
                        title={item.description}
                        subtitle={item.dateFormatted}
                        amount={item.amountFormatted}
                    />
                ))}
            </Content>
        </Container>
    )
}

export default List;