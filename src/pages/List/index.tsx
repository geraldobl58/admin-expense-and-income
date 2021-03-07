import React, { useMemo } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import FinancialCard from '../../components/FinancialCard';

import { Container, Content, Filters } from './styles';
interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

const List: React.FC<IRouteParams> = ({ match }) => {

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
                <FinancialCard 
                    tagColor='#e44c4e'
                    title='Conta de Luz'
                    subtitle='05/03/2021'
                    amount='R$100,00'
                />
            </Content>
        </Container>
    )
}

export default List;