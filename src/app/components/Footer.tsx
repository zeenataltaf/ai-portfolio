import Link from "next/link"
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa"
import { SiVercel } from "react-icons/si"

export default function Footer() {
  return (
    <footer className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2026 AI Engineer Portfolio</p>
        <div className="flex space-x-4">
          <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-green-200" />
          </Link>
          <Link href="https://vercel.com/yourusername" target="_blank" rel="noopener noreferrer">
            <SiVercel className="text-2xl hover:text-green-200" />
          </Link>
          <Link href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-green-200" />
          </Link>
          <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-green-200" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
