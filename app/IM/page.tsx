import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, BarChart2, TrendingUp, DollarSign } from 'lucide-react'

export default function InventoryManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            AI-Powered Inventory Management
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Optimize your stock levels, reduce waste, and increase profits with our intelligent inventory management system.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4" disabled>
            Get Started Now
          </Button>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>AI analyzes your historical sales data and market trends</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Predicts optimal stock levels for each product</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Provides recommendations for purchase orders</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Continuously learns and improves from new data</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <BarChart2 className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Reduce overstock and stockouts</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Increase inventory turnover</span>
                </li>
                <li className="flex items-start">
                  <DollarSign className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Minimize product waste and associated costs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Improve overall operational efficiency</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Subscription Plans
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose the plan that best fits your business needs
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Basic", price: "29 TND", period: "per month", 
                features: [
                    "Système de gestion des produits basique (ajout manuel, notifications pour produits proches de l'expiration).", 
                    "Vente B2B des produits proches de l'expiration : jusqu’à 20 annonces/mois.", 
                    "Recyclage des produits expirés : accès limité aux sociétés de recyclage partenaires",
                    "B2C : Vente de produits à prix réduits avant expiration : accès pour acheter uniquement."
                ] },
              { name: "Pro", price: "99 TND", period: "per month", features: [
                "Système de gestion des produits avec IA : suivi avancé, alertes personnalisées et suggestions pour éviter le surstockage.",
                "Vente B2B des produits proches de l'expiration : jusqu’à 50 annonces/mois.",
                "Recyclage des produits expirés : matching optimisé avec des sociétés de recyclage",
                "B2C : Vente de produits à prix réduits avant expiration : possibilité de vendre et d’acheter jusqu’à 50 annonces/mois.",
                "Rapports analytiques : analyse des ventes, économies réalisées et prévisions d’expiration.",
              ]},
              { name: "Enterprise", price: "299 TND", period: "per month" , features: [
                "Système de gestion des produits avec IA avancée : optimisation complète de l’inventaire et prévisions.",
                "Vente B2B des produits proches de l'expiration : annonces illimitées.",
                "Recyclage des produits expirés : intégration personnalisée avec plusieurs sociétés de recyclage.",
                "B2C : Vente de produits à prix réduits avant expiration : ventes illimitées et options de promotion.",
                "Vente de données pour les grandes surfaces : données collectées pour aider à optimiser leurs processus.",
                "API et intégration personnalisée : pour connecter vos systèmes existants à la plateforme.",
                "Support dédié 24/7 avec gestionnaire de compte."
              ]},
            ].map((plan) => (
            <Card key={plan.name} className="flex flex-col border rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white width-full">
                <CardHeader className="p-6 text-center border-b">
                    <CardTitle className="text-2xl font-bold text-gray-800">{plan.name}</CardTitle>
                    <CardDescription className="mt-2">
                    <span className="text-4xl font-extrabold text-green-600">{plan.price}</span>
                    <span className="text-sm text-gray-500"> / {plan.period}</span>
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                    <ul className="space-y-4 text-gray-600">
                    {plan.features.map((feature) => (
                        <li className="flex items-center gap-2" key={feature}>
                        <svg className="w-5 h-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                        </li>
                    ))}
                    </ul>
                </CardContent>
                <div className="p-6 mt-auto">
                    <Button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors">
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                    </Button>
                </div>
            </Card>

            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Optimize Your Inventory?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your free trial today and experience the power of AI-driven inventory management.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4">
            Get Started Now
          </Button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 EcoAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

