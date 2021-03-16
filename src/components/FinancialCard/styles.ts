import styled, { keyframes } from 'styled-components/macro';

interface ITagProps {
    color: string;
}

const animate = keyframes`
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }
    50% {
        opacity: .3s;
    }
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const Container = styled.li`
    background-color: ${props => props.theme.colors.tertiary};

    list-style-type: none;

    border-radius: 5px;

    margin: 10px 0;
    padding: 12px 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;

    transition: all .3s;

    position: relative;

    animation: ${animate} .5s ease;

    &:hover {
        opacity: .7;
        transform: translateX(10px);
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    > div span {
        font-weight: 500;
    }

`;

export const Tag = styled.div<ITagProps>`
    width: 3px;
    height: 100%;

    position: absolute;
    left: 0;

    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    background-color: ${props => props.color};
`;
