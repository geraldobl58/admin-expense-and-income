import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import FinancialCard from '../../components/FinancialCard';

import { Container, Content } from './styles';

const List: React.FC = () => {

    const options = [
        { value: 'Janeiro', label: 'Janeiro' },
        { value: 'Fevereiro', label: 'Fevereiro' },
        { value: 'Março', label: 'Março' },
    ];

    return (
        <Container>
            <ContentHeader title="Entrada" lineColor="green">
                <SelectInput options={options} />
            </ContentHeader>
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