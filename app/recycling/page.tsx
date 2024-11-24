import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Recycle, Truck, BarChart, Leaf, Building, Factory, ArrowRight } from 'lucide-react'

export default function RecyclingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Recyclage Intelligent des Produits Expirés
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transformez vos déchets en opportunités écologiques et économiques grâce à notre plateforme de recyclage intelligente.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4">
            Rejoindre la Plateforme de Recyclage
          </Button>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="w-6 h-6 mr-2 text-green-600" />
                Pour les Entreprises
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Recycle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Réduisez votre impact environnemental en recyclant vos produits expirés</span>
                </li>
                <li className="flex items-start">
                  <BarChart className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Optimisez vos coûts de gestion des déchets</span>
                </li>
                <li className="flex items-start">
                  <Leaf className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Améliorez votre image de marque éco-responsable</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Factory className="w-6 h-6 mr-2 text-blue-600" />
                Pour les Sociétés de Recyclage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Truck className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Accédez à un flux constant de matières à recycler</span>
                </li>
                <li className="flex items-start">
                  <BarChart className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Optimisez vos opérations grâce à des prévisions précises</span>
                </li>
                <li className="flex items-start">
                  <Leaf className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Contribuez à l&#39;économie circulaire et au développement durable</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Comment ça marche ?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Classification IA",
                description: "Notre IA classe automatiquement les produits expirés pour un recyclage optimal.",
                icon: Recycle
              },
              {
                title: "Mise en relation",
                description: "Connectez-vous avec les sociétés de recyclage les plus adaptées à vos produits.",
                icon: Building
              },
              {
                title: "Choix optimal",
                description: "Comparez les offres et choisissez la meilleure option de recyclage.",
                icon: BarChart
              },
              {
                title: "Collecte et recyclage",
                description: "Organisez la collecte et suivez le processus de recyclage de vos produits.",
                icon: Truck
              }
            ].map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex flex-col items-center text-center">
                    <step.icon className="w-12 h-12 mb-2 text-green-600" />
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Pourquoi choisir notre plateforme ?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <ArrowRight className="w-6 h-6 mr-2" />
                  <span>Technologie IA avancée pour une classification précise des produits</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-6 h-6 mr-2" />
                  <span>Réseau étendu de sociétés de recyclage certifiées</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-6 h-6 mr-2" />
                  <span>Processus transparent et traçable de bout en bout</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-6 h-6 mr-2" />
                  <span>Rapports détaillés sur l&#39;impact environnemental et les économies réalisées</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Prêt à révolutionner votre approche du recyclage ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Rejoignez notre plateforme de recyclage intelligent et contribuez à un avenir plus durable.
          </p>
          <div className="space-x-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4">
              S&#39;inscrire en tant qu&#39;Entreprise
            </Button>
            <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-600 hover:text-white text-lg px-8 py-4">
              Devenir Partenaire de Recyclage
            </Button>
          </div>
        </section>
      </main>

    </div>
  )
}

