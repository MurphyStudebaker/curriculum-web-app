import { CMS_NAME } from '../lib/constants'
import Container from './container'
//import Image from 'next/image'

export default function Intro() {
  return (
    <div className='pt-12 mx-5 md:mx-15 xl:mx-25 flex flex-col-reverse justify-center items-center xl:flex-row'>
      {/* <svg className='background-blob-right' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFD6E8" d="M48.3,-58.7C60.9,-47,68.2,-30.1,66.4,-15.4C64.7,-0.6,53.7,12,43.7,21.4C33.8,30.8,24.7,36.9,14.6,40.8C4.6,44.8,-6.5,46.5,-15.5,43.1C-24.5,39.6,-31.4,30.9,-38,21.1C-44.5,11.4,-50.7,0.7,-53.3,-13.8C-56,-28.2,-55.1,-46.4,-45.6,-58.7C-36.1,-71,-18.1,-77.4,-0.1,-77.2C17.8,-77.1,35.7,-70.4,48.3,-58.7Z" transform="translate(100 100)" />
      </svg> */}
      <div className='mt-10'>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Teach Yourself Already.
        </h1>
        <div className='py-8 lg:py-32'>
          <h2 className='text-lg lg:text-4xl'>
            Self-study curriculum on any topic. It's time to teach yourself.
          </h2>
          <p className="text-center mt-2">Passionate about something? <a href='https://github.com/MurphyStudebaker/curriculum-web-app/blob/master/README.md' className='font-bold hover:underline text-center'> Submit a curriculum ➜</a></p>
        </div>
      </div>
      <div>
        {/* <Image src='/05.png' width={500} height={500}/>  */}
        <svg className='background-blob-left' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#F1C21B" d="M41,-59C55.3,-54.5,70.7,-46.9,78,-34.5C85.3,-22.2,84.6,-5.1,77.1,7.4C69.7,20,55.5,27.8,45.7,40.4C36,52.9,30.8,70,20.4,76.2C9.9,82.4,-5.7,77.6,-21.1,72.6C-36.4,67.7,-51.5,62.7,-62.6,52.7C-73.7,42.7,-80.9,27.7,-81.2,12.9C-81.5,-1.9,-74.8,-16.5,-67.9,-30.8C-61,-45,-53.8,-58.8,-42.5,-64.6C-31.1,-70.4,-15.6,-68.2,-1.1,-66.5C13.3,-64.7,26.6,-63.4,41,-59Z" transform="translate(100 100)" />
      </svg>
      </div>
      </div>
  )
}
