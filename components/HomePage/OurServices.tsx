import Link from 'next/link'
import { BarChart2, ShoppingCart, Recycle, TrendingUp } from 'lucide-react'
import React from 'react'

const services : {
    title: string,
    description: string,
    icon: React.FC<React.SVGProps<SVGSVGElement>>,
    link: string
}[] = [
  {
    title: "Gestion Intelligente des Stocks",
    description: "Optimisez votre inventaire et réduisez le gaspillage grâce à l'IA.",
    icon: BarChart2,
    link: "/inventory-management"
  },
  {
    title: "Marketplace de Produits Proches de l'Expiration",
    description: "Vendez vos produits proches de l'expiration et réduisez vos pertes.",
    icon: ShoppingCart,
    link: "/marketplace"
  },
  {
    title: "Recyclage Intelligent des Produits Expirés",
    description: "Connectez-vous avec des recycleurs pour une gestion durable des déchets.",
    icon: Recycle,
    link: "/recycling"
  },
  {
    title: "Analyse de Données et Optimisation des Ventes",
    description: "Prenez des décisions éclairées basées sur des insights data.",
    icon: TrendingUp,
    link: "/data-insights"
  }
]

export default function OurServices() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Nos Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link href={service.link} key={index} className="group">
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <service.icon className="w-12 h-12 text-green-600" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                
                <p className="mt-4 block text-green-600 hover:underline">En savoir plus</p>

              </div>
              
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

