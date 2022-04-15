import styled from 'styled-components'

const Input = styled.input`
  box-sizing: border-box;
  outline: none;
  height: 32px;
  padding: 2px 8px;
  border: 1px solid var(--grey-200);
  border-radius: 4px;
  &:focus,
  &:focus-visible {
    border-color: var(--primary-500);
    box-shadow: 0 0 0 1px var(--primary-500);
  }
`

export default Input
