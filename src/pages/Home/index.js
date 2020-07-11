import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import Nav from '../../components/Nav';
import ListPosts from '../../components/ListPosts';

const Home = () => (
    <>
        <Header />
        <Container>
            <Nav />
            <ListPosts />
        </Container>
    </>
);

export default Home;
