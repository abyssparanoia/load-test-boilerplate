export const Font = {
  notaSansJp: 'Noto Sans JP',
  roboto: 'Roboto',
  inter: 'Inter'
} as const

export enum Depth {
  DRAWER_MENU = 100,
  SNACKBAR = 200,
  DIALOG = 300
}

export enum Radius {
  SMALL = '2px',
  NORMAL = '4px',
  LARGE = '50%'
}

export const Color = {
  WHITE: '#FFFFFF',
  BLACK: '#313131',
  PINK: '#C76972',
  BLUE: '#688FAC',
  LIGHT_GRAY_10: '#F6F4F2',
  LIGHT_GRAY_20: '#E9E9E9',
  GRAY: '#9D9D9D',
  DARK_GRAY_10: '#676767',
  DARK_GRAY_20: '#4D4D4D',
  ORANGE: '#D4503E',
  GREEN: '#72C53F'
}

export const LineHeight = {
  0: '1.0',
  10: '1.4',
  20: '1.6',
  30: '1.8'
} as const

export const FontSize = {
  0: '1rem',
  10: '1.2rem',
  20: '1.4rem',
  30: '1.6rem',
  40: '1.8rem',
  45: '2.0rem',
  50: '2.4rem',
  53: '2.6rem',
  60: '3.2rem',
  70: '4.0rem'
} as const

export const Typography = {
  TEXT_NORMAL_0: `font-family: ${Font.notaSansJp}; font-size: ${FontSize[0]};`,
  TEXT_NORMAL_10: `font-family: ${Font.notaSansJp}; font-size: ${FontSize[10]};`,
  TEXT_NORMAL_20: `font-family: ${Font.notaSansJp}; font-size: ${FontSize[20]};`,
  TEXT_NORMAL_30: `font-family: ${Font.notaSansJp}; font-size: ${FontSize[30]};`,
  TEXT_NORMAL_40: `font-family: ${Font.notaSansJp}; font-size: ${FontSize[40]};`,
  TEXT_NORMAL_45: `font-family: ${Font.notaSansJp}; font-size: ${FontSize[45]};`,
  TEXT_NORMAL_50: `font-family: ${Font.notaSansJp}; font-size: ${FontSize[50]};`,
  TEXT_NORMAL_53: `font-family: ${Font.notaSansJp}; font-size: ${FontSize[53]};`,
  TEXT_NORMAL_60: `font-family: ${Font.notaSansJp}; font-size: ${FontSize[60]};`,
  TEXT_NORMAL_70: `font-family: ${Font.notaSansJp}; font-size: ${FontSize[70]};`,
  TEXT_PARAGRAGH_0: `font-family: ${Font.notaSansJp}; font-size: ${FontSize[0]}; line-height: ${LineHeight[20]};`,
  TEXT_PARAGRAGH_10: `font-family: ${Font.notaSansJp}; font-size: ${FontSize[10]}; line-height: ${LineHeight[20]};`,
  TEXT_PARAGRAGH_20: `font-family: ${Font.notaSansJp}; font-size: ${FontSize[20]}; line-height: ${LineHeight[20]};`,
  TEXT_PARAGRAGH_30: `font-family: ${Font.notaSansJp}; font-size: ${FontSize[30]}; line-height: ${LineHeight[20]};`,
  TEXT_PARAGRAGH_40: `font-family: ${Font.notaSansJp}; font-size: ${FontSize[40]}; line-height: ${LineHeight[20]};`,
  TEXT_PARAGRAGH_45: `font-family: ${Font.notaSansJp}; font-size: ${FontSize[45]}; line-height: ${LineHeight[20]};`,
  TEXT_PARAGRAGH_50: `font-family: ${Font.notaSansJp}; font-size: ${FontSize[50]}; line-height: ${LineHeight[20]};`,
  TEXT_PARAGRAGH_53: `font-family: ${Font.notaSansJp}; font-size: ${FontSize[53]}; line-height: ${LineHeight[20]};`,
  TEXT_PARAGRAGH_60: `font-family: ${Font.notaSansJp}; font-size: ${FontSize[60]}; line-height: ${LineHeight[20]};`,
  TEXT_PARAGRAGH_70: `font-family: ${Font.notaSansJp}; font-size: ${FontSize[70]}; line-height: ${LineHeight[20]};`
} as const
