export default function Avatar({ name, bio }) {
  return (
    <div className="flex items-center">
      <img src={bio} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
