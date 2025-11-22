'use client'

import { BuyerLayout } from '@/components/buyer-layout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { HomeIcon, CompareIcon } from '@/components/icons'
import Image from 'next/image'

export default function BuyerCompare() {
  const properties = [
    {
      id: 1,
      title: 'Luxury Beachfront Villa',
      location: 'Malibu, CA',
      price: 2500000,
      bedrooms: 5,
      bathrooms: 4,
      sqft: 4500,
      yearBuilt: 2020,
      lotSize: '0.5 acres',
      features: ['Pool', 'Ocean View', 'Smart Home', 'Gym'],
      image: '/waterfront-estate.jpg'
    },
    {
      id: 2,
      title: 'Modern Downtown Condo',
      location: 'Los Angeles, CA',
      price: 850000,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1400,
      yearBuilt: 2022,
      lotSize: 'N/A',
      features: ['Rooftop Access', 'Concierge', 'Parking'],
      image: '/penthouse-modern.jpg'
    },
    {
      id: 3,
      title: 'Victorian Mansion',
      location: 'San Francisco, CA',
      price: 3200000,
      bedrooms: 6,
      bathrooms: 5,
      sqft: 6000,
      yearBuilt: 1895,
      lotSize: '0.8 acres',
      features: ['Historic', 'Garden', 'Wine Cellar', 'Library'],
      image: '/victorian-mansion.jpg'
    }
  ]

  const comparisonData = [
    { 
      label: 'Price', 
      key: 'price', 
      format: function(v) { return '$' + (v / 1000000).toFixed(2) + 'M' } 
    },
    { label: 'Bedrooms', key: 'bedrooms' },
    { label: 'Bathrooms', key: 'bathrooms' },
    { 
      label: 'Square Feet', 
      key: 'sqft', 
      format: function(v) { return v.toLocaleString() } 
    },
    { label: 'Year Built', key: 'yearBuilt' },
    { label: 'Lot Size', key: 'lotSize' }
  ]

  return (
    <BuyerLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <CompareIcon size={32} />
            Property Comparison
          </h1>
          <p className="text-muted-foreground">Compare up to 3 properties side by side</p>
        </div>

        <Card className="overflow-hidden">
          <div className="grid grid-cols-3 gap-6 p-6">
            {properties.map((property) => (
              <div key={property.id} className="space-y-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image 
                    src={property.image || "/placeholder.svg"} 
                    alt={property.title} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{property.title}</h3>
                  <p className="text-sm text-muted-foreground">{property.location}</p>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Remove
                </Button>
              </div>
            ))}
          </div>

          <div className="border-t border-border">
            {comparisonData.map((row, idx) => {
              const bgClass = idx % 2 === 0 ? 'bg-muted/30' : '';
              return (
                <div key={row.label} className={`grid grid-cols-4 ${bgClass}`}>
                  <div className="p-4 font-semibold border-r border-border">
                    {row.label}
                  </div>
                  {properties.map((property) => (
                    <div key={property.id} className="p-4 text-center">
                      {row.format ? row.format(property[row.key]) : property[row.key]}
                    </div>
                  ))}
                </div>
              );
            })}

            <div className="grid grid-cols-4">
              <div className="p-4 font-semibold border-r border-border">
                Features
              </div>
              {properties.map((property) => (
                <div key={property.id} className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature) => (
                      <Badge key={feature} variant="secondary">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="mt-6 text-center">
          <Button size="lg">
            <HomeIcon className="mr-2" />
            Add More Properties
          </Button>
        </div>
      </div>
    </BuyerLayout>
  )
}