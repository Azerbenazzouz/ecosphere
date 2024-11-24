import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">EcoAI</h3>
            <p className="text-gray-400">Transforming waste into opportunity with AI-powered solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/features" className="text-gray-400 hover:text-white">Features</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">For</h4>
            <ul className="space-y-2">
              <li><Link href="/for-businesses" className="text-gray-400 hover:text-white">Businesses</Link></li>
              <li><Link href="/for-consumers" className="text-gray-400 hover:text-white">Consumers</Link></li>
              <li><Link href="/for-recyclers" className="text-gray-400 hover:text-white">Recyclers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">Email: info@ecosphere.com</p>
            <p className="text-gray-400">Phone: +216 56-793-609</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2024 EcoSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

