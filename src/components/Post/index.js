import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';

import PropTypes from 'prop-types';

import { Container } from './style';

moment.locale('pt-br');

const Post = (data) => {
    const { title, domain, author, created_utc, thumbnail } = data.data;

    return (
        <>
            <Container>
                <img
                    src={
                        thumbnail.includes('http')
                            ? thumbnail
                            : 'http://placehold.it/84x84'
                    }
                    alt="Thumb"
                    className="post-thumb"
                />
                <div className="post-container-info">
                    <h3 className="post-title">{title}</h3>
                    <p className="post-info">
                        {`enviado ${moment.unix(created_utc).fromNow()} por`}
                        <span className="post-user"> {author}</span>
                    </p>
                    <a
                        className="post-link"
                        href={domain}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {domain}
                    </a>
                </div>
            </Container>
        </>
    );
};

Post.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Post;
