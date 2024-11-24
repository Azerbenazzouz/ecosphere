import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, TrendingUp, PieChart, AlertCircle, DollarSign, Zap } from 'lucide-react'

export default function DataInsightsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Analyse de Données et Optimisation des Ventes
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transformez vos données en insights actionnables pour réduire le gaspillage et maximiser vos profits.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4">
            Découvrir nos solutions
          </Button>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Fonctionnalités Clés
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart className="w-6 h-6 mr-2 text-green-600" />
                  Analyse des Tendances
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Identifiez les tendances de vente et anticipez la demande pour optimiser votre stock.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="w-6 h-6 mr-2 text-red-600" />
                  Détection des Risques
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Repérez les produits à risque d&#39;expiration et prenez des mesures proactives.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="w-6 h-6 mr-2 text-blue-600" />
                  Segmentation Clients
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Analysez le comportement des consommateurs pour cibler vos offres efficacement.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Avantages pour votre Entreprise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
                  Réduction du Gaspillage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Minimisez les pertes en optimisant votre gestion des stocks grâce à des prévisions précises.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="w-6 h-6 mr-2 text-green-600" />
                  Augmentation des Revenus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Maximisez vos ventes en ajustant vos stratégies de prix et de promotion en fonction des données.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-yellow-600" />
                  Prise de Décision Éclairée
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Prenez des décisions basées sur des données concrètes plutôt que sur des intuitions.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart className="w-6 h-6 mr-2 text-blue-600" />
                  Rapports Personnalisés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Obtenez des rapports sur mesure adaptés aux besoins spécifiques de votre entreprise.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Comment ça marche ?</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-4">
                <li>Connectez vos sources de données (ventes, inventaire, etc.) à notre plateforme.</li>
                <li>Nos algorithmes d&#39;IA analysent vos données en temps réel.</li>
                <li>Recevez des insights et des recommandations personnalisées.</li>
                <li>Prenez des décisions éclairées pour optimiser vos opérations.</li>
                <li>Suivez vos progrès et ajustez vos stratégies en continu.</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Prêt à transformer vos données en opportunités ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Commencez dès aujourd&#39;hui à optimiser vos ventes et à réduire le gaspillage grâce à nos solutions d&#39;analyse de données.
          </p>
          <div className="space-x-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4">
              Démarrer l&#39;essai gratuit
            </Button>
            <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-600 hover:text-white text-lg px-8 py-4">
              Demander une démo
            </Button>
          </div>
        </section>
      </main>

    </div>
  )
}

