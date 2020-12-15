import Container from './container'
import Link from 'next/link'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-yellow py-10">
      <Container>
        <h2 className='font-bold text-2xl'>
        <Link href='/' >Teach Yourself Already</Link>
        </h2>
        <p>Self-study curriculum on any topic.</p>
      
        <p>Our site is open source! Read <a href='https://github.com/MurphyStudebaker/curriculum-web-app/blob/master/README.md' className='font-bold'>our contribution guide.</a></p>
      </Container>
    </footer>
  )
}
