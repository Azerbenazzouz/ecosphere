import { Button } from '@/components/ui/button'

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Ready to Reduce Waste and Increase Profits?
        </h2>
        <div className="justify-center">
          
          <Button className="bg-white text-green-600 hover:bg-gray-100">
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  )
}

