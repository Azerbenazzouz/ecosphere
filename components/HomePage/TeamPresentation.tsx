import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LinkedinIcon } from 'lucide-react'

const teamMembers = [
  {
    name: "Azer Ben Azzouz",
    role: "CEO & Co-fondateur",
    bio: "Full Stack Developer @ Roomify | Python, React, NextJs, PostgreSQL.",
    image: "/azer.jpg",
    linkedin: "https://www.linkedin.com/in/azer-ben-azzouz/",
  },
  {
    name: "Klali Firas",
    role: "CEO & Co-fondateur",
    bio: "Web & Mobile Developer | Student at Higher Institute of Technological Studies of Rades (ISET Rades)",
    image: "/firas.jpg",
    linkedin: "https://www.linkedin.com/in/klali-firas/",
  },
]

export default function TeamPresentation() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Notre Équipe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
              {/* Centered image with fixed dimensions */}
              <div className="relative w-full h-64 flex justify-center items-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}  // Fixed width
                  height={300} // Fixed height
                  className="rounded-full object-cover"
                />
              </div>
              <CardHeader className="bg-white p-4 rounded-b-lg">
                <CardTitle className="text-2xl font-semibold text-gray-800">{member.name}</CardTitle>
                <CardDescription className="text-sm text-gray-500">{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="bg-white p-4">
                <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out transform hover:scale-110">
                    <LinkedinIcon className="w-6 h-6" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
