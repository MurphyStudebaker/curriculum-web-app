export default function Tags({ tags }) {
    return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Categories
      </h2>
      <div className="grid grid-cols-1 mb-32">
        {tags.map(t => <p className='cursor-pointer border-4 border-black rounded-lg p-6 my-4 hover:shadow-xl'>{t}</p>)}
      </div>
    </section>
    )
}