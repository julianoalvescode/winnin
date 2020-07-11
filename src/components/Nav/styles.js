import styled from 'styled-components';

export const Container = styled.nav`
    margin-top: 15px;
    padding: 1.25rem 0;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minMax(120px, auto));
    gap: 10px;
    align-items: center;

    .nav-button {
        background-color: #ff5500;
        border: none;
        border-radius: 4px;
        height: 40px;
        color: #fff;
        font-weight: 500;
        text-transform: uppercase;
        cursor: pointer;
    }
`;
