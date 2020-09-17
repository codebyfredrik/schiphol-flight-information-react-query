import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { darken } from 'polished';
import { bp } from '../styles/constants';

interface IThemeProps {
  isDarkMode: boolean;
  children: any;
}

const lightTheme = {
  body: 'rgb(240,240,240)',
  contentHeading: 'white',
  bgButton: 'rgba(0, 0, 0, 0.05)',
  bgButtonHover: 'rgba(0, 0, 0, 0.1)',
  borderButton: 'rgba(0, 0, 0, 0.05)',
  yellow: '#ffd700',
  text: '#262b2f',
  textTag: '#FFFFFF',
  bgDirectionTag: '#262b2f',
  borderShadow: 'rgba(0,0,0,0.25)',
  borderDashed: 'rgba(0, 0, 0, 0.15)',
  borderShadowDarkBg: 'rgba(0,0,0,0.25)',
  cardBackground: 'rgba(255, 255, 255, 0.5)',
  pageCounterBg: 'rgba(0, 0, 0, 0.05)',
  pageCounterText: '#ffd700',
  white: '#ffffff',
  grey20: 'rgba(0,0,0,0.05)',
  grey30: 'rgba(0,0,0,0.1)',
  subTitle: '#ffffff',
  pageHeading: '#210e71',
};

const darkTheme = {
  body: '#18191A',
  contentHeading: 'black',
  bgButton: '#3A3B3C',
  bgButtonHover: '#272728',
  borderButton: 'rgba(255, 255, 255, 0.05)',
  yellow: darken(0.1, '#ffd700'),
  text: '#B0B3B8',
  textTag: '#242526',
  bgDirectionTag: '#151617',
  borderShadow: '#151617',
  borderDashed: 'rgba(255, 255, 255, 0.15)',
  borderShadowDarkBg: 'rgba(255,255,255,0.25)',
  cardBackground: '#242526',
  pageCounterBg: '#3A3B3C',
  pageCounterText: '#ffd700',
  subTitle: '#B0B3B8',
  pageHeading: '#B0B3B8',
};

const Theme = ({ isDarkMode, children }: IThemeProps) => {
  const themeObject: DefaultTheme = {
    colors: isDarkMode ? darkTheme : lightTheme,
    breakpoints: bp,
  };

  return <ThemeProvider theme={themeObject}>{children}</ThemeProvider>;
};

export { Theme, lightTheme };
