import styled from 'styled-components'

const Button = styled.button`
  height: 32px;
  padding: 4px 8px;
  font-weight: 400;
  line-height: 24px;
  color: var(--black);
  background-color: var(--primary-500);
  border: 1px solid var(--primary-500);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  &:disabled {
    background-color: var(--grey-200);
    border-color: var(--grey-200);
  }
`

export default Button
