import Header from './header'
import styled from 'styled-components'

const Layout = (props) => (
  <StyledLayout>
    <Header />
    {props.children}
  </StyledLayout>
)

const StyledLayout = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
`

export default Layout
