import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="grid grid-cols-1 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            author={post.author}
            slug={post.slug}
            tags={post.tags}
          />
        ))}
      </div>
    </section>
  )
}
