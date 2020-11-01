import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-6 flex flex-col lg:flex-row items-center">
          <p>Built with 🏳️‍🌈 by Murphy Studebaker</p>
        </div>
      </Container>
    </footer>
  )
}
