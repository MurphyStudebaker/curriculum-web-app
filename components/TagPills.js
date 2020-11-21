export default function TagPills({ tags }) {
    return <div className='flex mt-4'>
        {tags.map(t => <p className='font-bold m-2 text-purple-600 text-lg'>#{t}</p>)}
    </div>
}