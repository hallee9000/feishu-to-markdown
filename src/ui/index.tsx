import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'

import GlobalStyle from '@ui/assets/global'
import { injectRootNode } from './utils/init'

injectRootNode(function () {
  ReactDOM.render(
    <>
      <GlobalStyle/>
      <App />
    </>,
    document.getElementById('feishu-to-markdown')
  )  
})
