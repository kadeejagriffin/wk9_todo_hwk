import Container from 'react-bootstrap/Container'
import Navigation from "./components/Navigation"
import ToDo from './components/views/ToDo'



export default function App() {
  return (
    <>
    <Navigation />
    <Container>
      <ToDo/>
    </Container>
    </>
  )
}