import React from 'react';

import { Container } from './style';

const Post = () => (
    <>
        <Container>
            <img
                src="https://cdn.ome.lt/_1KF0rLSFPxVwCR-u5XA6Mc-k4E=/1200x630/smart/extras/conteudos/goku3.jpg"
                alt="Thumb"
                className="post-thumb"
            />
            <div className="post-container-info">
                <h3 className="post-title">
                    Título da parada bem grande assim mais ou menos
                </h3>
                <p className="post-info">
                    enviado a 6 horas por
                    <span className="post-user"> nickname</span>
                </p>
                <a className="post-link" href="./">
                    dominio.io
                </a>
            </div>
        </Container>
    </>
);

export default Post;
