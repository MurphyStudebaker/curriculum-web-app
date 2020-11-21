import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import PostTitle from '../components/post-title'

const TEXT = `
Curriculum was inspired after I read an excerpt from Chris Guillebeau's book The Art of Non-Conformity, 
where he gives an example syllabus for a do-it-yourself 'Master's' program.
The idea is that you take a fraction of the money you would have spent on two years of tuition 
and instead take those two years off, travel the world, and dedicate your time to a particular area of self-study. 

I was so enchanted by this idea that I began to plan my own DIY Master's in sustainability, 
in which I would volunteer on permaculture farms around the world, reading books and participating in local experiences to learn about renewable energy, 
regenerative agriculture, and responsible government and economics. I found myself getting carried away with all of the potential other areas of study 
I'd like to pursue: foreign language, music theory, culinary arts, etc. 

Thus, the idea of curriculum was born: an online resource of self-study syllabi designed for a gap year.
I cold-emailed hundreds of experts in a wide variety of fields and herded together the original syllabi and categories for launch. 

My hope for this site is to grow our topics into all of the niche areas of life, 
and eventually share stories of those pursuing their own self-studies around the world. 
If you'd like to contribute a syllabus or testimonial, please contact me. 

With pride,
Murphy Studebaker
`

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>About | Curriculum</title>
        </Head>
        <Container>
            <PostTitle>About</PostTitle>
            <p>
              {TEXT}
            </p>
        </Container>
      </Layout>
    </>
  )
}