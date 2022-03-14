import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
@font-face {
    font-family: 'Helvetica Neue';
    src: url('/fonts/HelveticaNeueCyr-Roman.woff2') format('woff2'),
        url('/fonts/HelveticaNeueCyr-Roman.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Helvetica Neue';
    src: url('/fonts/HelveticaNeueCyr-Bold.woff2') format('woff2'),
        url('/fonts/HelveticaNeueCyr-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    
    color: #232323;
}

button {
display: flex;
justify-content: center;
align-items: center;
border: none;
padding: 0;
margin: 0;

background-color: transparent;
cursor: pointer;
font: inherit;
color: inherit;
}
`;