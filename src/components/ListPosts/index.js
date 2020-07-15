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
    const items = useSelector((state) => state.posts.posts);
    const after = useSelector((state) => state.posts.after);

    async function load() {
        setLoading(true);
        await dispatch(loadMore(items, category, after));
        setLoading(false);
    }

    return (
        <>
            <Container data-cy="container-post">
                {posts !== null
                    ? posts.map((i) => (
                          <Post key={i.data.created_utc} data={i.data} />
                      ))
                    : null}
                {posts !== null ? (
                    <button
                        data-cy="load-more"
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
