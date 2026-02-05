import ContactForm from "../components/ContactForm"

export default function Contact() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-green-800">Contact Me</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="mb-4">
          I'd love to hear from you! Whether you have a project idea, a question, or just want to say hello, feel free
          to reach out using the form below.
        </p>
        <ContactForm />
      </div>
    </div>
  )
}
