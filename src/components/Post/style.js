import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    border-top: 1px solid #707070;
    border-bottom: 1px solid #707070;
    padding: 0.8rem 0;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${(props) => props.theme.colors.hover};
        cursor: pointer;
    }

    .post-thumb {
        width: 84px;
        height: 84px;
    }

    .post-container-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;
    }

    .post-title {
        color: ${(props) => props.theme.colors.title};
        font-size: 23px;
        font-weight: 700;
    }

    .post-info {
        color: #666666;
        font-size: 15px;
        margin-top: 3px;
        .post-user {
            color: #ff5500;
        }
    }

    .post-link {
        color: ${(props) => props.theme.colors.link};
        text-decoration-color: ${(props) => props.theme.colors.link};
        margin-top: 6px;
    }
`;
