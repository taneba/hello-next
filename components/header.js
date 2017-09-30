import Link from 'next/link'
import styled from 'styled-components'
import A from './a'

const Header = () => (
  <Wrapper>
    <Link href='/'>
      <A >Home</A>
    </Link>
    <Link href='/about'>
      <A >About</A>
    </Link>
  </Wrapper>
)

const Wrapper = styled.div`
  padding: 12px;
  border: 2px solid #dddddd;
`

export default Header
