import React from 'react';

import { useSelector } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/global';

import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';

import { Container } from './styles';

import Header from '../../components/Header';
import Nav from '../../components/Nav';
import ListPosts from '../../components/ListPosts';

const Home = () => {
    const theme = useSelector((state) => state.app.theme);

    return (
        <>
            <ThemeProvider theme={theme === 'light' ? light : dark}>
                <GlobalStyle />
                <Header />
                <Container>
                    <Nav />
                    <ListPosts />
                </Container>
            </ThemeProvider>
        </>
    );
};

export default Home;
