import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { searchPosts } from '../../store/modules/posts/actions';

import { Container } from './styles';

const Nav = () => {
    const dispatch = useDispatch();
    const active = useSelector((state) => state.posts.active);

    function ResquestPosts(type) {
        dispatch(searchPosts(type));
    }

    return (
        <>
            <Container>
                <button
                    onClick={() => ResquestPosts('hot')}
                    className={active !== 'hot' ? 'nav-disable' : 'nav-active'}
                    type="button"
                >
                    Hot
                </button>
                <button
                    onClick={() => ResquestPosts('new')}
                    className={active !== 'new' ? 'nav-disable' : 'nav-active'}
                    type="button"
                >
                    News
                </button>
                <button
                    onClick={() => ResquestPosts('rising')}
                    className={
                        active !== 'rising' ? 'nav-disable' : 'nav-active'
                    }
                    type="button"
                >
                    Rising
                </button>
            </Container>
        </>
    );
};

export default Nav;
