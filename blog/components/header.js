import Container from 'components/container'
import Logo from 'components/logo'
import Nav from 'components/nav'

export default function Header () {
  return (
    <header>
      <Container>
        <Logo boxOn />
        <Nav />
      </Container>
    </header>
  )
}
