import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { loadMore } from '../../store/modules/posts/actions';

import Post from '../Post/index';

import { Container } from './styles';

const ListPosts = () => {
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const category = useSelector((state) => state.posts.active);

    async function load() {
        setLoading(true);
        await dispatch(loadMore(category));
        setLoading(false);
    }

    return (
        <>
            <Container>
                {posts !== null
                    ? posts.map((i) => (
                          <Post key={i.data.created_utc} data={i.data} />
                      ))
                    : null}
                {posts !== null ? (
                    <button
                        onClick={load}
                        className={loading ? 'list-load-active' : 'list-load'}
                        type="button"
                    >
                        {loading ? 'Carregando...' : ' + Ver mais'}
                    </button>
                ) : null}
            </Container>
        </>
    );
};

export default ListPosts;
