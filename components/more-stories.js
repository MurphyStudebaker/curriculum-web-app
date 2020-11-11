import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Featured Curriculum
      </h2>
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
