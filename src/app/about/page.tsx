import Image from "next/image"

export default function About() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-green-800">About Me</h1>
      <div className="flex items-start mb-8">
        <div className="w-1/3 pr-4">
          <Image
            src="/aipic2.jfif"
            alt="Profile Picture"
            width={300}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-2/3">
          <p className="text-lg mb-4">
Key Skills & Expertise:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>🔄 n8n Workflow Automation expert – building automated workflows for:
Form submissions,CRM & API integrations, Email, WhatsApp & third-party service automation
</li>

            <li>🚀 Development of modern web applications using Next.js, TypeScript & Tailwind CSS
</li>
            <li>🤖 AI chatbot development for customer support, lead generation, and automation
</li>
            <li>🧠 AI Agents expert – designing intelligent agents for task execution, data handling, and decision support
</li>
            <li>⚙️ Automated systems for reducing manual work and improving efficiency
</li>
            <li>📊 Integration of APIs, dashboards, and data-driven features
</li>
<li>🌐 Deployment-ready, SEO-friendly, and mobile-first applications
</li>
          </ul>
          <p className="text-lg">
            I'm always excited to take on new challenges and collaborate on innovative AI projects. Feel free to explore
            my portfolio and get in touch if you'd like to work together!
          </p>
        </div>
      </div>
    </div>
  )
}
