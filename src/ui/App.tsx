import React from 'react'
import styled from 'styled-components'
import { Download } from 'react-feather'
import FeishuToMarkdown from './utils/feishu'

const Container = styled.div`
  position: fixed;
  bottom: 38px;
  right: 138px;
  width: 36px;
  height: 36px;
  padding: 9px;
  overflow: hidden;
  font-size: 12px;
  color: var(--black-86);
  background-color: var(--white);
  border: 1px solid var(--black-16);
  border-radius: 50%;
  box-shadow: 0px 6px 20px var(--black-8);
  cursor: pointer;
  z-index: 1000;
  &:hover {
    color: var(--primary-500);
  }
`

function App () {

  async function parseMarkdown () {
    const feishuToMarkdown = new FeishuToMarkdown()
    await feishuToMarkdown.parseMarkdown()
  }

  return (
    <Container onClick={parseMarkdown}>
      <Download size={16}/>
    </Container>
  )
}

export default App
