import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

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
        color: #333333;
    }

    .post-info {
        color: #666666;
        .post-user {
            color: #ff5500;
        }
    }

    .post-link {
        color: #000000;
        text-decoration-color: #000000;
        margin-top: 5px;
    }
`;
