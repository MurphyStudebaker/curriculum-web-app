import Link from 'next/link'

export default function Tags({ tags, change }) {
  tags.push('all')  
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Categories
      </h2>
      <div className="mb-32 flex flex-wrap">
        {tags.map(t => (
            <p onClick={e => change(t)} className='cursor-pointer border-4 border-black rounded-lg py-4 px-6 mx-2 my-2 hover:shadow-xl font-bold text-lg'>#{t}</p>
          ))}
      </div>
    </section>
    )
}