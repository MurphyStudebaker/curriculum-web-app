import Container from './container'
import Link from 'next/link'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-yellow py-10">
      <Container>
        <h3 className='font-bold text-2xl'>Curriculum</h3>
        <p>Self-study curriculum on any topic from industry professionals.</p>
      
        <p>Our site is open source! Read <a href='' className='font-bold'>our contribution guide.</a></p>
      </Container>
    </footer>
  )
}
