import { colors } from '@material-ui/core';

const WHITE = '#FFFFFF';
const BLACK = '#000000';

const palette = {
  BLACK,
  WHITE,
  primary: {
    contrastText: WHITE,
    dark: colors.red['A200'],
    main: colors.red['A200'],
    light: colors.red['A150']
  },
  secondary: {
    contrastText: WHITE,
    dark: colors.blue[900],
    main: colors.blue['A400'],
    light: colors.blue['A400']
  },
  success: {
    contrastText: WHITE,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: WHITE,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: WHITE,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: WHITE,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: BLACK,
    secondary: WHITE,
    subtitle: colors.grey[500],
    link: colors.blue[600]
  },
  background: {
    default: '#F4F6F8',
    paper: WHITE
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200]
};

export default palette
