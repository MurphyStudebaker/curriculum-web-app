import Link from 'next/link'

export default function Tags({ tags, change }) {
  if (!tags.includes('all')) {
    tags.push('all')  
  }
  return (
    <section>
      <div className="flex flex-wrap">
        {tags.map(t => (
            <p onClick={e => change(t)} className='cursor-pointer bg-yellow border-4 border-black rounded-lg py-4 px-6 mx-2 my-2 hover:shadow-xl font-bold text-lg'>#{t}</p>
          ))}
      </div>
    </section>
    )
}