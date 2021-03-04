import styled from 'styled-components/macro';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 100px auto;

    grid-template-areas: 'ASIDE MAINHEADER' 'ASIDE CONTENT';

    height: 100vh;
`;