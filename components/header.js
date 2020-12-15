import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight pb-16 pt-8 mb-4 ">
      <Link href="/">
        <a className="hover:underline">Teach Yourself Already</a>
      </Link>
      .
    </h2>
  )
}
