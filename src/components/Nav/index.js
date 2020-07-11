import React from 'react';

import { Container } from './styles';

const Nav = () => {
    return (
        <>
            <Container>
                <button className="nav-button" type="button">
                    Hot
                </button>
                <button className="nav-button" type="button">
                    News
                </button>
                <button className="nav-button" type="button">
                    Rising
                </button>
            </Container>
        </>
    );
};

export default Nav;
