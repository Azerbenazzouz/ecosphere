import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { AlertTriangle, TrendingDown, Recycle, BarChart } from 'lucide-react'

export default function AdvancedFeatures() {
  const features = [
    {
      title: "Optimisation des Stocks avec l'IA",
      description: "Utilisez l'intelligence artificielle pour prédire la demande, anticiper les expirations et optimiser l'approvisionnement. Notre système d'alerte avancé permet un suivi en temps réel pour maintenir un stock optimal.",
      icon: AlertTriangle,
      link: "/inventory-management"
    },
    {
      title: "Marketplace de Produits Proches de l'Expiration",
      description: "Vendez vos produits proches de la date d'expiration à prix réduit. Réduisez vos pertes financières tout en offrant des opportunités aux consommateurs de faire des économies.",
      icon: TrendingDown,
      link: "/marketplace"
    },
    {
      title: "Recyclage Intelligent des Produits Expirés",
      description: "Connectez-vous directement avec des sociétés de recyclage spécialisées. Choisissez la meilleure option de recyclage pour chaque type de produit expiré, réduisant ainsi votre empreinte écologique.",
      icon: Recycle,
      link: "/recycling"
    },
    {
      title: "Analyse de Données et Optimisation des Ventes",
      description: "Bénéficiez d'analyses avancées pour comprendre vos cycles de vente, identifier les produits à risque et optimiser vos stratégies d'achat et de vente. Maximisez vos profits et minimisez le gaspillage.",
      icon: BarChart,
      link: "/data-insights"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Fonctionnalités Avancées
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <feature.icon className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <Link href={feature.link}>
                <Button variant="outline" className="w-full text-green-600 border-green-600 hover:bg-green-600 hover:text-white">
                  En savoir plus
                </Button>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Prêt à optimiser votre gestion des ressources ?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Découvrez comment nos solutions peuvent transformer votre approche du gaspillage et augmenter vos profits.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4">
            Commencer maintenant
          </Button>
        </div>
      </div>
    </section>
  )
}

