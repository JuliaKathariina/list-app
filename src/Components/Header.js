import styled from 'styled-components'

function Header() {
  return (
    <Headline>Shopping-App</Headline>
  )
}
const Headline = styled.h2`
color: var(--textColor);
background-color: var(--backgroundColor);
padding: 20px;
box-shadow: 0 0 0px black;
`

export default Header