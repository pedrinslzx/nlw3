import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${p => p.theme.back.default};
    color: ${p => p.theme.fore.default};
  }
  body, input, button, textarea{
    font: 600 18px Nunito, sans-serif;
  }
  a {
    cursor: pointer;
  }
`
