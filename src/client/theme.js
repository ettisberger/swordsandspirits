import { createMuiTheme } from '@material-ui/core/styles'; // v1.x
import styled from 'styled-components'

export const backgroundColor = '#ECF0F1';
export const brandPrimary = '#25408f';
export const accent1Color = '#ECF0F1';
export const linkColor = '#333';

export const xsMaxSize = '768px';
export const mdMinSize = '769px';
export const mdMaxSize = '1023px';
export const laMinSize = '1024px';

export const Inlay = styled.div`
  ${createMuiTheme().breakpoints.up('xs')}{
    width: 1000px;
    margin: 0 auto;
  }
`;

export default createMuiTheme({
    palette: {
        primary: {
            main: brandPrimary,
            contrastText: accent1Color,
        },
    },
});