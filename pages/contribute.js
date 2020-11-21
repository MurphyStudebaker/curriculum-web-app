import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import PostTitle from '../components/post-title'

const TEXT = `
Passionate about a niche topic and want to share your expertise? Contribute a syllabus!

Curriculum is proudly open source and welcome submissions for new syllabi on a rolling basis.
Check out the instructions on our GitHub, or email us for more information. 
`

export default function Contribute() {
  return (
    <>
      <Layout>
        <Head>
          <title>Contribute | Curriculum</title>
        </Head>
        <Container>
            <PostTitle>Contribute</PostTitle>
            <p>
              {TEXT}
            </p>
        </Container>
      </Layout>
    </>
  )
}