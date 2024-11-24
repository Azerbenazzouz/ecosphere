export default function Testimonials() {
    return (
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font
  -bold text-center text-gray-800 mb-12">
            Impact Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: "10,000+", description: "Products saved from waste" },
              { metric: "25%", description: "Average reduction in stock waste" },
              { metric: "100+", description: "Businesses empowered to recycle responsibly" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-4xl font-bold text-green-600 mb-2">{item.metric}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  