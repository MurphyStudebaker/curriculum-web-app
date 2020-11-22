import Container from './container'
import Link from 'next/link'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-yellow">
      <Container>
        <h3>Curriculum</h3>
        <p>Self-study curriculum on any topic from industry professionals.</p>
      
        <p>Our curriculum is open source! Read our contribution guide.</p>
      </Container>
    </footer>
  )
}
