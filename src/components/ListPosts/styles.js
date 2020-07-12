import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minMax(100%, auto));
    gap: 15px;
    padding: 0 1rem;
    margin: 1rem 0;

    .list-load {
        background-color: #666666;
        border: none;
        font-weight: 500;
        padding: 1rem 0;
        border-radius: 4px;
        font-size: 20px;
        color: #ffff;
        text-transform: uppercase;
        cursor: pointer;
    }

    .list-load-active {
        background-color: #d9d9d9;
        border: none;
        padding: 1rem 0;
        border-radius: 4px;
        font-weight: 500;
        font-size: 20px;
        color: #ffff;
        text-transform: uppercase;
        cursor: pointer;
    }
`;
