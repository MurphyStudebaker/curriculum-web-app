import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Tags from '../components/tags'
//import algoliasearch from 'algoliasearch/lite'
//import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'

import { useState } from 'react'

export default function Index({ allPosts }) {
  const [morePosts, setPosts] = useState(allPosts)

//  const searchClient = algoliasearch(process.env.ALGOLIA_UID, process.env.ALGOLIA_SEARCH_KEY)

  const getTags = (posts) => {
    let uniqueTags = []
    posts.map(post => {
      post.tags.map(t => !uniqueTags.includes(t) ? uniqueTags.push(t) : '')
    })
    return uniqueTags
  }

  const filterPosts = (tag) => {
    console.log('Filtering...')
    let rawPosts = [...allPosts]
    if (tag !== 'all') {
      rawPosts = rawPosts.filter(p => p.tags.includes(tag))
    }
    setPosts(rawPosts)
    console.log(morePosts)
  }

  const uniqueTags = getTags(allPosts)

  return (
    <>
      <Layout>
        <Head>
          <title>Curriculum</title>
        </Head>
          <Intro />
        <Container>
        {/* <InstantSearch searchClient={searchClient} indexName="curriculum">
          <SearchBox />
          <Hits />
        </InstantSearch> */}
          <Tags tags={uniqueTags} change={filterPosts}/>
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
