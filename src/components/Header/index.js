import React, { useContext } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';

import { shade } from 'polished';

import { changeTheme } from '../../store/modules/app/actions';
import { ContainerHeader } from './styles';

const Header = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.app.theme);
    const { colors } = useContext(ThemeContext);

    return (
        <>
            <ContainerHeader>
                <h1 className="header-title">
                    React<span className="header-orange">JS</span>
                </h1>
                <Switch
                    className="switch-brabo"
                    onChange={() => {
                        dispatch(
                            changeTheme(theme === 'light' ? 'dark' : 'light')
                        );
                    }}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    checked={theme === 'dark'}
                    width={45}
                    height={15}
                    handleDiameter={20}
                    offColor={shade(0.5, colors.primary)}
                    onColor={colors.primary}
                />
            </ContainerHeader>
        </>
    );
};

export default Header;
