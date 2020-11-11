export default function TagPills({ tags }) {
    return <div className='flex'>
        {tags.map(t => <p className='bg-gray-100 border rounded-full px-4 py-2 mt-4 mr-2'>{t}</p>)}
    </div>
}