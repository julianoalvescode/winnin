import React from 'react';

import { ContainerHeader } from './styles';

const Header = () => (
    <>
        <ContainerHeader>
            <h1 className="header-title">
                React<span className="header-orange">JS</span>
            </h1>
        </ContainerHeader>
    </>
);

export default Header;
