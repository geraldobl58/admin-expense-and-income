import React from 'react';

import { Container, Title, Controllers } from './styles';

interface IContentHeader {
    title: string;
    lineColor: string;
    children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeader> = ({ 
    title, 
    lineColor, 
    children 
}) => {

    return (
        <Container>
            <Title lineColor={lineColor}>
                <h3>{title}</h3>
            </Title>
            <Controllers>
                {children}
            </Controllers>
        </Container>
    );
}

export default ContentHeader;