import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import TagPills from './TagPills'
import { SocialIcon } from 'react-social-icons';

export default function PostHeader({ title, coverImage, date, author, tags }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto">
        <p className='text-lg'>by <span className='font-bold'>{author.name}</span>, <br /> {author.bio}</p>
        <div className='mt-4 flex'>
        {
          author.links && author.links.map(l => (
            <SocialIcon url={l} />
          )) 
        } </div>
        {/* <TagPills tags={tags} /> */}
        {/* <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div> */}
      </div>
    </>
  )
}
