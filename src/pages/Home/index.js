import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import ListPosts from '../../components/ListPosts';

const Home = () => (
    <>
        <Header />
        <Container>
            <ListPosts />
        </Container>
    </>
);

export default Home;
