import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, ShoppingCart, TrendingDown, Percent, Users, Building } from 'lucide-react'

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Marketplace de Produits Proches de l&#39;Expiration
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Réduisez le gaspillage, augmentez vos revenus et offrez des opportunités d&#39;économies aux consommateurs.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4">
            Rejoindre la Marketplace
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
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Réduisez vos pertes financières en vendant des produits proches de l&#39;expiration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Attirez de nouveaux clients sensibles aux prix et à l&#39;environnement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Améliorez votre image de marque en réduisant le gaspillage</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-6 h-6 mr-2 text-blue-600" />
                Pour les Consommateurs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Accédez à des produits de qualité à prix réduits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Contribuez à la réduction du gaspillage alimentaire</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Découvrez de nouvelles marques et produits</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Comment ça marche ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <ShoppingCart className="w-8 h-8 mr-2 text-green-600" />
                  Listez vos produits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">Les entreprises ajoutent leurs produits proches de l&#39;expiration sur notre plateforme.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Percent className="w-8 h-8 mr-2 text-blue-600" />
                  Fixez les prix
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">Définissez des prix attractifs pour vendre rapidement avant la date d&#39;expiration.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <TrendingDown className="w-8 h-8 mr-2 text-green-600" />
                  Vendez et économisez
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">Les consommateurs achètent à prix réduit, vous réduisez vos pertes et le gaspillage.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Prêt à réduire le gaspillage et augmenter vos revenus ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Rejoignez notre marketplace dès aujourd&#39;hui et faites partie de la solution contre le gaspillage alimentaire.
          </p>
          <div className="space-x-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4">
              S&#39;inscrire en tant qu&#39;Entreprise
            </Button>
            <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-600 hover:text-white text-lg px-8 py-4">
              Explorer en tant que Consommateur
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

