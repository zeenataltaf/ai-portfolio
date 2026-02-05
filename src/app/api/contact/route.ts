import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  // Here you would typically send an email using a service like SendGrid or Nodemailer
  // For this example, we'll just log the data and return a success response

  console.log("Contact form submission:", { name, email, message })

  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return NextResponse.json({ message: "Message sent successfully" })
}
