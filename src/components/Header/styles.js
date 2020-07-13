import styled from 'styled-components';

export const ContainerHeader = styled.header`
    background-color: ${(props) => props.theme.colors.secondary};
    padding: 1rem 0;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    .switch-style {
        margin-left: 18px;
    }

    .header-title {
        color: #fff;
        .header-orange {
            color: #ff5500;
        }
    }
`;
