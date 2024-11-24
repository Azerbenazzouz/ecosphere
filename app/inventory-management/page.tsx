import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart2, TrendingDown, AlertTriangle, ShoppingCart, Zap, DollarSign } from 'lucide-react'

export default function InventoryManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">


      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Gestion Intelligente des Stocks
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Optimisez votre inventaire, réduisez le gaspillage et augmentez vos profits grâce à notre système de gestion des stocks propulsé par l&#39;IA.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4">
            Commencer l&#39;optimisation
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
                  <BarChart2 className="w-6 h-6 mr-2 text-green-600" />
                  Prévision de la Demande
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Utilisez l&#39;IA pour prédire avec précision la demande future et ajuster vos niveaux de stock en conséquence.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2 text-yellow-600" />
                  Alertes d&#39;Expiration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Recevez des notifications en temps réel pour les produits approchant de leur date d&#39;expiration.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingCart className="w-6 h-6 mr-2 text-blue-600" />
                  Optimisation des Commandes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Obtenez des recommandations intelligentes pour vos commandes basées sur l&#39;historique des ventes et les tendances du marché.</p>
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
                  <TrendingDown className="w-6 h-6 mr-2 text-green-600" />
                  Réduction du Gaspillage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Minimisez les pertes dues aux produits périmés en maintenant des niveaux de stock optimaux.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="w-6 h-6 mr-2 text-green-600" />
                  Augmentation des Profits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Optimisez vos coûts d&#39;inventaire et augmentez vos marges en réduisant les surstocks et les ruptures de stock.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-yellow-600" />
                  Efficacité Opérationnelle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Améliorez vos processus de gestion des stocks grâce à l&#39;automatisation et aux insights en temps réel.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart2 className="w-6 h-6 mr-2 text-blue-600" />
                  Prise de Décision Éclairée
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Prenez des décisions basées sur des données concrètes grâce à nos tableaux de bord et rapports détaillés.</p>
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
                <li>Connectez vos systèmes de gestion des stocks et de point de vente à notre plateforme.</li>
                <li>Notre IA analyse vos données historiques et les tendances du marché.</li>
                <li>Recevez des prévisions de demande précises et des recommandations d&#39;approvisionnement.</li>
                <li>Optimisez vos niveaux de stock en fonction des insights fournis.</li>
                <li>Surveillez les performances en temps réel et ajustez votre stratégie au besoin.</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Prêt à révolutionner votre gestion des stocks ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Rejoignez les entreprises qui ont déjà réduit leur gaspillage de 30% et augmenté leurs profits grâce à notre solution.
          </p>
          <div className="space-x-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4">
              Commencer l&#39;essai gratuit
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

