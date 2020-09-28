import 'styled-components';

// Extend original module declarations
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      body: string;
      contentHeading: string;
      bgButton: string;
      bgButtonHover: string;
      borderButton: string;
      yellow: any;
      text: string;
      textTag: string;
      bgDirectionTag: string;
      borderShadow: string;
      borderDashed: string;
      borderShadowDarkBg: string;
      cardBackground: string;
      pageCounterBg: string;
      pageCounterText: string;
      white: string;
      grey20: string;
      grey30: string;
      subTitle: string;
      pageHeading: string;
      white?: string;
      grey20?: string;
      grey30?: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
