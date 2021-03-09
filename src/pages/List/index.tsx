import React, { useMemo, useState, useEffect } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import FinancialCard from '../../components/FinancialCard';

import { Container, Content, Filters } from './styles';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import listOfMonths from '../../utils/months';

import { v4 } from 'uuid';
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
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    const [selectedFrequency, setSelectedFrequency] = useState(['recorrente', 'eventual']);

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


    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
    }, [type]);

    const years = useMemo(() => {
        let uniqueYears: number[] = [];
        
        listData.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year);
            }
        });

        return uniqueYears.map((year) => {
            return {
                value: year,
                label: year
            }
        });

    }, [listData]);
    

    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month,
            }
        });
    }, []);

    const handleFrequencyClick = (frequency: string) => {
        const alreadySelected = selectedFrequency.findIndex(item => item === frequency);
        
        if (alreadySelected >= 0) {
            const filtered = selectedFrequency.filter(item => item !== frequency);
            setSelectedFrequency(filtered);
        } else {
            setSelectedFrequency((prev) => [...prev, frequency]);
        }
    }

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

    useEffect(() => {
        const filteredData = listData.filter((item) => {
            const date = new Date(item.date);
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return  month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency);
        });

        const formattedData = filteredData.map((item) => {
            return {
                id: v4(),
                description: item.description,
                amountFormatted: formatCurrency(Number((item.amount))),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44c4e'
            }
        });
        
        setData(formattedData);
    }, [listData, monthSelected, yearSelected, selectedFrequency]);

    return (
        <Container>
            <ContentHeader title={customTitle.title} lineColor={customTitle.lineColor}>
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
            <Filters>
                <button 
                    type="button" 
                    className={`
                        tag-filter tag-filter-recurrent 
                        ${selectedFrequency.includes('recorrente') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('recorrente')}
                >
                    Recorrentes
                </button>
                <button 
                    type="button" 
                    className={`
                        tag-filter tag-filter-eventual
                        ${selectedFrequency.includes('eventual') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('eventual')}
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