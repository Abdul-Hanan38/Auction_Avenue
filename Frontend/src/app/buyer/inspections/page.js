'use client'

import { BuyerLayout } from '@/components/buyer-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'

export default function InspectionsPage() {
  const router = useRouter()

  const inspectionServices = [
    {
      id: 1,
      name: 'Premium Home Inspectors',
      rating: 4.9,
      reviews: 342,
      price: 450,
      specialties: ['Structural', 'Electrical', 'Plumbing', 'HVAC'],
      responseTime: '2 hours',
      available: true,
      description: 'Certified professionals with 20+ years experience',
      image: '/professional-home-inspector.jpg'
    },
    {
      id: 2,
      name: 'Elite Property Inspection',
      rating: 4.8,
      reviews: 289,
      price: 380,
      specialties: ['Foundation', 'Roofing', 'Pest Control'],
      responseTime: '4 hours',
      available: true,
      description: 'Thorough inspections with detailed reports',
      image: '/property-inspection-service.jpg'
    },
    {
      id: 3,
      name: 'TrustGuard Inspections',
      rating: 4.7,
      reviews: 456,
      price: 420,
      specialties: ['General', 'Safety', 'Code Compliance'],
      responseTime: '3 hours',
      available: true,
      description: 'Fast turnaround with comprehensive documentation',
      image: '/house-inspection-expert.jpg'
    },
    {
      id: 4,
      name: 'Precision Home Check',
      rating: 4.9,
      reviews: 198,
      price: 500,
      specialties: ['Luxury Homes', 'Historical', 'Commercial'],
      responseTime: '1 hour',
      available: false,
      description: 'Specialized in high-end property inspections',
      image: '/luxury-home-inspection.jpg'
    },
  ]

  return (
    <BuyerLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">House Inspection Services</h1>
          <p className="text-foreground/60">Book professional inspections for properties you're interested in</p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <Button variant="outline" size="sm">All Services</Button>
          <Button variant="outline" size="sm">Structural</Button>
          <Button variant="outline" size="sm">Electrical</Button>
          <Button variant="outline" size="sm">Plumbing</Button>
          <Button variant="outline" size="sm">HVAC</Button>
          <Button variant="outline" size="sm">Pest Control</Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {inspectionServices.map((service) => (
            <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative">
                <img 
                  src={service.image || "/placeholder.svg"} 
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                {!service.available && (
                  <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                    <Badge variant="secondary">Currently Unavailable</Badge>
                  </div>
                )}
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-semibold">{service.rating}</span>
                      <span className="text-foreground/50 text-sm">({service.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent">${service.price}</div>
                    <div className="text-xs text-foreground/50">per inspection</div>
                  </div>
                </div>
                <CardDescription className="mt-2">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm font-semibold mb-2">Specialties:</div>
                  <div className="flex flex-wrap gap-2">
                    {service.specialties.map((specialty) => (
                      <Badge key={specialty} variant="outline">{specialty}</Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-foreground/60">Response time: </span>
                    <span className="font-semibold text-accent">{service.responseTime}</span>
                  </div>
                  <Button 
                    onClick={() => router.push(`/buyer/inspections/${service.id}`)}
                    disabled={!service.available}
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    {service.available ? 'Book Now' : 'Unavailable'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </BuyerLayout>
  )
}