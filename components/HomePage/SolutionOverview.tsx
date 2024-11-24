import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, TrendingDown, Recycle, BarChart } from 'lucide-react'

export default function SolutionOverview() {
  const solutions = [
    {
      title: "Optimisation des Stocks avec l'IA",
      problem: "Environ 30% des produits sont gaspillés à cause du surstockage et d'une gestion inefficace des stocks.",
      solution: "Nous proposons une gestion intelligente des stocks avec l'intelligence artificielle pour prédire la demande, anticiper les expirations et optimiser l'approvisionnement. Notre système d'alerte avancé permet aux entreprises de suivre les produits en temps réel, d'éviter les excédents et de maintenir un stock optimal. Grâce à notre plateforme, les entreprises peuvent ajuster leurs achats et réduire le gaspillage dû à un excédent de stock.",
      icon: AlertTriangle
    },
    {
      title: "Vente de Produits Proches de l'Expiration",
      problem: "Chaque année, 20% des produits alimentaires ne sont pas vendus avant leur expiration, créant des pertes importantes.",
      solution: "Nous offrons une marketplace dédiée pour la vente de produits proches de leur date d'expiration à des prix réduits. Cette plateforme permet aux entreprises de liquider leur stock excédentaire et de réduire les pertes financières. Les consommateurs, en retour, peuvent profiter de produits à prix attractifs avant leur péremption, tout en contribuant à la réduction du gaspillage. Grâce à cette solution, les entreprises récupèrent des revenus qu'elles auraient autrement perdus et laissent moins de produits inutilisables.",
      icon: TrendingDown
    },
    {
      title: "Recyclage des Produits Expirés",
      problem: "Moins de 10% des produits périmés sont correctement recyclés, augmentant l'impact environnemental et le gaspillage de ressources.",
      solution: "Nous avons créé une connexion directe avec des sociétés de recyclage spécialisées. Lorsqu'un produit expire, notre plateforme permet à l'entreprise de le proposer pour recyclage, en choisissant la société la plus appropriée en fonction de son type (emballage, matière organique, etc.). Cette solution aide à réduire l'empreinte écologique des entreprises tout en contribuant à l'économie circulaire. Les entreprises peuvent également bénéficier de tarifs avantageux pour la collecte et le recyclage de leurs produits, tout en étant en conformité avec les normes environnementales.",
      icon: Recycle
    },
    {
      title: "Analyse de Données et Optimisation des Ventes",
      problem: "Les entreprises perdent jusqu'à 25% de leurs revenus à cause d'un manque de données et d'analyses sur leur stock, leurs ventes et le gaspillage.",
      solution: "Nous proposons une analyse de données avancée permettant aux entreprises de mieux comprendre leurs cycles de vente, d'identifier les produits les plus vulnérables à l'expiration et d'optimiser leur stratégie d'achat. Notre plateforme fournit des rapports personnalisés sur les tendances de vente, les produits qui expirent bientôt, et des prévisions basées sur les comportements des consommateurs. Grâce à ces données, les entreprises peuvent ajuster leurs stratégies, minimiser le gaspillage et maximiser leurs profits.",
      icon: BarChart
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Nos Solutions : Optimisation des Ressources et Réduction du Gaspillage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <solution.icon className="w-6 h-6 text-green-600" />
                  <CardTitle className="text-xl font-semibold">{solution.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-red-600 font-semibold mb-2">
                  Problème : {solution.problem}
                </CardDescription>
                <p className="text-gray-600">{solution.solution}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">En résumé, nos solutions permettent :</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>D&#39;éviter le gaspillage des produits en optimisant l&#39;approvisionnement et la gestion des stocks.</li>
            <li>De générer des revenus supplémentaires grâce à la vente de produits proches de leur expiration à des prix réduits.</li>
            <li>De contribuer à la durabilité en facilitant le recyclage des produits expirés.</li>
            <li>D&#39;optimiser les processus de vente grâce à l&#39;analyse des données, réduisant ainsi les pertes financières et les ressources gaspillées.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

