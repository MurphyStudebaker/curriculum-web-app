import Container from './container'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <footer className="bg-yellow py-10">
      <Container>
        <div>
          <h2 className='font-bold text-2xl'>
          <Link href='/' >Teach Yourself Already</Link>
          </h2>
          <p>Self-study curriculum on any topic.</p>
        
          <p>Our site is open source! Read <a href='https://github.com/MurphyStudebaker/curriculum-web-app/blob/master/README.md' className='font-bold'>our contribution guide.</a></p>
      

        </div>
        <div>
          <SocialIcon url='https://twitter.com/goteachyourself' fgColor='#FEFEFE' bgColor='transparent' />
        </div>
      </Container>
    </footer>
  )
}
