import { darken } from 'polished';

const lightTheme = {
  body: 'rgb(235,235,235)',
  bgButton: 'rgba(0, 0, 0, 0.05)',
  bgButtonHover: 'rgba(0, 0, 0, 0.1)',
  yellow: '#ffd700',
  text: '#262b2f',
  textTag: '#FFFFFF',
  bgDirectionTag: '#262b2f',
  borderShadow: 'rgba(0,0,0,0.25)',
  borderDashed: 'rgba(0, 0, 0, 0.15)',
  cardBackground: 'rgba(255, 255, 255, 0.5)',
  pageCounterBg: 'rgba(0, 0, 0, 0.05)',
  pageCounterText: '#ffd700',
  white: '#ffffff',
  grey20: 'rgba(0,0,0,0.05)',
  grey30: 'rgba(0,0,0,0.1)',
  subTitle: '#ffffff',
};

const darkTheme = {
  body: '#18191A',
  bgButton: '#3A3B3C',
  bgButtonHover: '#272728',
  yellow: darken(0.1, '#ffd700'),
  text: '#B0B3B8',
  textTag: '#242526',
  bgDirectionTag: '#151617',
  borderShadow: '#151617',
  borderDashed: 'rgba(255, 255, 255, 0.15)',
  cardBackground: '#242526',
  pageCounterBg: '#3A3B3C',
  pageCounterText: '#ffd700',
  subTitle: '#B0B3B8',
};

export { lightTheme, darkTheme };
