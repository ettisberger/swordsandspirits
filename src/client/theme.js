import { createMuiTheme } from '@material-ui/core/styles'; // v1.x
import styled, {css} from 'styled-components'

export const backgroundColor = '#edebe9';
export const brandPrimary = '#25408f';
export const accent1Color = '#ECF0F1';
export const linkColor = '#fff';

export const blackColor = '#333';
export const whiteColor = '#FFFFFE';

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

export const Section = styled.section`
  padding: 3rem 0;
  overflow: hidden;
  
    ${props => props.odd && css`
        background-color: ${backgroundColor};
        color: ${blackColor};
    `}
  
    ${props => props.even && css`
        background-color: ${backgroundColor};
        color: ${blackColor};
    `}
`;

export default createMuiTheme({
    palette: {
        primary: {
            main: brandPrimary,
            contrastText: accent1Color,
        },
    },
});