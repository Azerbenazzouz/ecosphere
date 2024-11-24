import Image from 'next/image'

export default function ProblemStatement() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Titre principal */}
        <h2 className="text-4xl font-extrabold text-center text-green-700 mb-12">
          Des Ressources Gaspiées, des Revenus Perdus
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Image */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <Image
              src="/ProblemStatement.png"
              alt="Visualisation des pertes alimentaires"
              width={500}
              height={300}
              className="rounded-xl shadow-xl hover:shadow-2xl transition-shadow"
            />
          </div>
          {/* Liste des problèmes */}
          <div className="md:w-1/2 md:pl-10">
            <ul className="space-y-6">
              <li className="flex items-start bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition">
                <div className="flex items-center justify-center w-16 h-10 bg-red-100 rounded-full">
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <span className="text-xl font-semibold text-gray-800">
                    30% des produits alimentaires
                  </span>
                  <p className="text-gray-600">
                    Chaque année, une grande partie des produits alimentaires est gaspillée à cause d’un mauvais suivi des stocks.
                  </p>
                </div>
              </li>
              <li className="flex items-start bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition">
                <div className="flex items-center justify-center w-16 h-10 bg-yellow-100 rounded-full">
                  <svg
                    className="w-6 h-6 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <span className="text-xl font-semibold text-gray-800">
                    Perte de revenus massifs
                  </span>
                  <p className="text-gray-600">
                    Les produits proches de leur expiration représentent 20% des pertes annuelles pour les entreprises.
                  </p>
                </div>
              </li>
              <li className="flex items-start bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition">
                <div className="flex items-center justify-center w-16 h-10 bg-green-100 rounded-full">
                  <svg
                    className="w-6 h-6 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <span className="text-xl font-semibold text-gray-800">
                    Mauvais recyclage
                  </span>
                  <p className="text-gray-600">
                    Seulement 10% des produits périmés sont recyclés, aggravant les impacts environnementaux.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
