import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Tags from '../components/tags'
export default function Index({ allPosts }) {
  const morePosts = allPosts

  const getTags = (posts) => {
    let uniqueTags = []
    posts.map(post => {
      post.tags.map(t => !uniqueTags.includes(t) ? uniqueTags.push(t) : '')
    })
    return uniqueTags
  }

  const uniqueTags = getTags(allPosts)

  return (
    <>
      <Layout>
        <Head>
          <title>Curriculum</title>
        </Head>
        <Container>
          <Intro />
          <Tags tags={uniqueTags}/>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tags'
  ])

  return {
    props: { allPosts },
  }
}
