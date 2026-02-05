import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-green-800">Welcome to My AI Engineering Portfolio</h1>
      <div className="flex items-center mb-8">
        <div className="w-1/2 pr-4">
          <p className="text-lg mb-4">
       |I am a passionate AI Web Developer with strong expertise in building fast, modern, and responsive web applications using Next.js, TypeScript, and Tailwind CSS. I specialize in creating scalable, user-friendly, and performance-optimized solutions tailored to real-world business needs.
          </p>
          <Link href="/projects" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            View My Projects
          </Link>
        </div>
        <div className="w-1/2">
          <Image
            src="/aipic.jfif"
            alt="AI Robot"
            width={400}
            height={300}
            priority
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}
