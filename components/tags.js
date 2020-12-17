import Link from 'next/link'
import { useState } from 'react'
export default function Tags({ tags, change }) {
  if (!tags.includes('all')) {
    tags.unshift('all')  
  }
  
  const [selected, setSelected] = useState('all')

  return (
    <section>
      <div className="flex flex-wrap">
        {tags.map(t => {
        let background = t == selected ? 'bg-pink' : 'bg-yellow'
        return (
            <p onClick={e => {
              setSelected(t)
              change(t)
            }} 
            className={`cursor-pointer border-4 border-black rounded-lg py-4 px-6 mx-2 my-2 hover:shadow-xl font-bold text-lg ${background}`}>#{t}</p>
          )
          })}
      </div>
    </section>
    )
}