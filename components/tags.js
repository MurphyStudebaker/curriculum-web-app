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
        let selectedStyles = t == selected ? 'border-8 border-black' : 'border-4 border-black'
        return (
            <p onClick={e => {
              setSelected(t)
              change(t)
            }} 
            className={`bg-yellow cursor-pointer rounded-lg py-4 px-6 mx-2 my-2 hover:shadow-xl font-bold text-lg ${selectedStyles}`}>#{t}</p>
          )
          })}
      </div>
    </section>
    )
}