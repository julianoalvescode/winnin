import React from 'react';
import { useSelector } from 'react-redux';

import Post from '../Post/index';

import { Container } from './styles';

const ListPosts = () => {
    const posts = useSelector((state) => state.posts.posts);

    return (
        <>
            <Container>
                {posts !== null
                    ? posts.map((i) => (
                          <Post key={i.data.created_utc} data={i.data} />
                      ))
                    : null}
            </Container>
        </>
    );
};

export default ListPosts;
