import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, TrendingUp, Recycle, BarChart, CloudLightning } from 'lucide-react'

const statistics = [
  {
    title: "Réduction du gaspillage alimentaire",
    value: "30%",
    icon: Leaf,
    color: "text-green-600"
  },
  {
    title: "Recouvrement de revenus",
    value: "10-15%",
    description: "grâce à la vente de produits proches de l'expiration",
    icon: TrendingUp,
    color: "text-blue-600"
  },
  {
    title: "Augmentation du recyclage",
    value: "10% à 50%",
    description: "des produits périmés",
    icon: Recycle,
    color: "text-yellow-600"
  },
  {
    title: "Réduction des pertes de revenus",
    value: "25%",
    description: "grâce à l'optimisation des stocks et des ventes",
    icon: BarChart,
    color: "text-purple-600"
  },
  {
    title: "Réduction des émissions de CO2",
    value: "10 000 à 15 000 tonnes",
    description: "par an grâce à la gestion du gaspillage et au recyclage",
    icon: CloudLightning,
    color: "text-teal-600"
  }
]

export default function ImpactStatistics() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Notre Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statistics.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  <stat.icon className={`w-12 h-12 mb-4 ${stat.color}`} />
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</p>
                {stat.description && (
                  <p className="text-gray-600">{stat.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

