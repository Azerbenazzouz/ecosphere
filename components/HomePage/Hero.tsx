// "use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
// import { useRouter } from 'next/navigation'

export default function Hero() {
  // const { locale } = useRouter()
  return (
    <section className="bg-gradient-to-r from-green-50 to-blue-50 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Optimisez, Économisez, Recyclez
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Votre solution intelligente pour réduire le gaspillage et favoriser la durabilité.
          </p>
          <div className="space-x-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white">Get Started</Button>
          </div>
        </div>
        <div className="md:w-1/2 justify-center flex">
          <Image
            src="/heroImage.png"
            alt="Products being saved from waste"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

