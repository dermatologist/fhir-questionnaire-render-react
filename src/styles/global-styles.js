import { injectGlobal } from 'styled-components'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-size: 16px;
    margin: 20px;
    padding: 25px;
    font-family: sans-serif;
  }
`
