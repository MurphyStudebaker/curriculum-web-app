import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import TagPills from './TagPills'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags
}) {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
    <div className='cursor-pointer bg-white border-4 border-black rounded-lg p-6 my-4 hover:shadow-xl'>
      <h3 className="text-3xl mb-3">
          <a>{title}</a>
      </h3>
      <p className='text-lg'>by <span className='font-bold'>{author.name}</span>, a {author.bio}</p>
      <TagPills tags={tags} />
    </div>
    </Link>

  )
}
