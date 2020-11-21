import Container from './container'
import Link from 'next/link'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-6 flex flex-col lg:flex-row justify-between items-center">
          <p>Built with 🏳️‍🌈 by Murphy Studebaker</p>
          <div>
            <Link className='pr-4' href='/about'>About</Link>
            <Link href='/contribute'>Contribute</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
