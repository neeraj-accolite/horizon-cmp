import { MultiTenantThemeProps } from '.';

export const theme: MultiTenantThemeProps = {
  extend: {
    colors: {
      primary: '#fff200',
      secondary: '#0056a3',
      accent: '#00ff00',
      error: '#ff0000',
      warning: '#0d2bac',
      success: '#fff000',
      grey: {
        '50': '#fafafa',
        '100': '#f5f5f5',
        '200': '#eeeeee',
        '300': '#e0e0e0',
        '400': '#bdbdbd',
        '500': '#9e9e9e',
        '600': '#757575',
        '700': '#616161',
        '800': '#424242',
        '900': '#212121',
        A100: '#f5f5f5',
        A200: '#eeeeee',
        A400: '#bdbdbd',
        A700: '#616161',
      },
      action: {
        active: '#013874',
        hover: '#bbc123',
        selected: '#9abc23',
        disabled: '#BDBDBD',
        'disabled-background': '#ff00cc',
        focus: '#bc34ca',
      },
      breadcrumb: {
        'label-color': '#111111',
        'current-page-color': '#222222',
        'current-page-color2': '#222222',
      },
      hero: {
        background: '#F5F6F6',
        heading: '#3F3E46',
        overview: '#3F3E46',
        callout: '#3F3E46',
      },
      card: {
        'background-color': '#F5F6F6',
        'link-color': '#374151',
        'link-underline': 'underline',
        'link-decoration-color': '#374151',
      },
      accordion: {
        'divider-color': '#111111',
      },
      buttonTextColor: {
        primary: '#f16327',
        secondary: '#ffff',
        outline: '#111111',
        success: '#AFE1AF',
        warning: '#C9CC3F',
        danger: '#ffff',
      },
    },
  },
};
