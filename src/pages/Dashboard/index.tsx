import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

import { Container } from './styles';

const Dashboard: React.FC = () => {

    const options = [
        { value: 'Janeiro', label: 'Janeiro' },
        { value: 'Fevereiro', label: 'Fevereiro' },
        { value: 'Março', label: 'Março' },
    ];

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="orange">
                <SelectInput options={options} onChange={() => {}} />
            </ContentHeader>
        </Container>
    )
}

export default Dashboard;