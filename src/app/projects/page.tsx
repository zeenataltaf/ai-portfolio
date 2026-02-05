import Image from "next/image"

const projects = [
  {
    title: "AI Image Generator",
    description: "A deep learning model that generates realistic images from text descriptions.",
    image: "/imagegenerator.jfif",
  },
  {
    title: "Chatbot with Personality",
    description: "An advanced conversational AI with customizable personality traits.",
    image: "/chatbot.jfif",
  },
  {
    title: "Predictive Text Engine",
    description: "A sophisticated text prediction system for enhancing writing efficiency.",
    image: "/predictive text.jfif",
  },
]

export default function Projects() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-green-800">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={300}
              height={200}
              className="w-full"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
