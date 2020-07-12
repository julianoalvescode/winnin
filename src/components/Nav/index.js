import React from 'react';

import { useDispatch } from 'react-redux';
import { searchPosts } from '../../store/modules/posts/actions';

import { Container } from './styles';

const Nav = () => {
    const dispatch = useDispatch();

    function ResquestPosts(type) {
        dispatch(searchPosts(type));
    }

    return (
        <>
            <Container>
                <button
                    onClick={() => ResquestPosts('hot')}
                    className="nav-button"
                    type="button"
                >
                    Hot
                </button>
                <button
                    onClick={() => ResquestPosts('new')}
                    className="nav-button"
                    type="button"
                >
                    News
                </button>
                <button
                    onClick={() => ResquestPosts('rising')}
                    className="nav-button"
                    type="button"
                >
                    Rising
                </button>
            </Container>
        </>
    );
};

export default Nav;
