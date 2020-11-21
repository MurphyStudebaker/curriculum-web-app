import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'

export default function CategoryPage() {
  const router = useRouter()
  if (!router.isFallback) {
    return <ErrorPage statusCode={404} />
  }
  return (
      <Container>
        <p>category page</p>
      </Container>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostsByCategory(params.slug, [
    'title',
    'slug',
    'author',
    'content',
    'tags',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
