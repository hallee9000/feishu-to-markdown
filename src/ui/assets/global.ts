import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* Vars */
  #feishu-to-markdown {
    /* COLORS */
    --primary-50: #f2f7ff;
    --primary-100: #d2e5ff;
    --primary-200: #b2d3ff;
    --primary-300: #73aeff;
    --primary-400: #3c8cff;
    --primary-500: #0f6fff;
    --primary-600: #005fee;
    --primary-700: #004dc1;
    --primary-800: #0042a4;
    --primary-900: #003687;
    --grey-50: rgba(247, 250, 252, 1);
    --grey-100: rgba(237, 242, 247, 1);
    --grey-200: rgba(226, 232, 240, 1);
    --grey-300: rgba(203, 213, 224, 1);
    --grey-400: rgba(160, 174, 192, 1);
    --grey-500: rgba(113, 128, 150, 1);
    --grey-600: rgba(74, 85, 104, 1);
    --grey-700: rgba(45, 55, 72, 1);
    --grey-800: rgba(26, 32, 44, 1);
    --grey-900: rgba(23, 25, 35, 1);
    --black-8: rgba(0, 0, 0, 0.08);
    --black-16: rgba(0, 0, 0, 0.16);
    --black-36: rgba(0, 0, 0, 0.36);
    --black-66: rgba(0, 0, 0, 0.66);
    --black-86: rgba(0, 0, 0, 0.86);
    --black-100: rgba(0, 0, 0, 1);
    --black: rgba(0, 0, 0, 1);
    --white-8: rgba(255, 255, 255, 0.08);
    --white-16: rgba(255, 255, 255, 0.16);
    --white-36: rgba(255, 255, 255, 0.36);
    --white-66: rgba(255, 255, 255, 0.66);
    --white-86: rgba(255, 255, 255, 0.86);
    --white: rgba(255, 255, 255, 1);
    --yellow: #FDC100;
    --purple: #7b61ff;
    --orange: rgba(242, 153, 74, 1);
    --red: rgba(235, 87, 87, 1);
    --green: rgba(39, 174, 96, 1);
    --blue: rgba(15, 111, 255, 1);
  }
`

export default GlobalStyle
