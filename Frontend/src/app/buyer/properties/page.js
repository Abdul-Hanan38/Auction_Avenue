'use client'

import { BuyerLayout } from '@/components/buyer-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useState } from 'react'
import { SearchIcon, HeartIcon, ClockIcon, HomeIcon } from '@/components/icons'

const properties = [
  { id: 1, title: 'Luxury Waterfront Estate', location: 'Miami, FL', image: '/placeholder.svg?key=water1', currentBid: '$2.5M', bids: 24, timeLeft: '2h 30m', bedrooms: 5, bathrooms: 4, sqft: 8500 },
  { id: 2, title: 'Modern Downtown Penthouse', location: 'New York, NY', image: '/placeholder.svg?key=downtown1', currentBid: '$1.8M', bids: 18, timeLeft: '5h 15m', bedrooms: 4, bathrooms: 3, sqft: 6200 },
  { id: 3, title: 'Historic Victorian Manor', location: 'Boston, MA', image: '/placeholder.svg?key=victorian1', currentBid: '$950K', bids: 12, timeLeft: '12h 45m', bedrooms: 6, bathrooms: 4, sqft: 7800 },
  { id: 4, title: 'Contemporary Beach Villa', location: 'Malibu, CA', image: '/placeholder.svg?key=beach1', currentBid: '$3.2M', bids: 31, timeLeft: '1h 20m', bedrooms: 5, bathrooms: 5, sqft: 9000 },
  { id: 5, title: 'Mountain Resort Estate', location: 'Aspen, CO', image: '/placeholder.svg?key=mountain1', currentBid: '$1.5M', bids: 14, timeLeft: '8h 10m', bedrooms: 4, bathrooms: 3, sqft: 5500 },
  { id: 6, title: 'Country Estate', location: 'Nashville, TN', image: '/placeholder.svg?key=country1', currentBid: '$1.1M', bids: 9, timeLeft: '18h 30m', bedrooms: 5, bathrooms: 3, sqft: 6800 },
]

export default function BuyerProperties() {
  const [watchlist, setWatchlist] = useState([])

  const toggleWatchlist = (id) => {
    setWatchlist(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  return (
    <BuyerLayout>
      <div className="space-y-8">
        <Card className="border-2">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <SearchIcon size={20} className="text-accent" />
              <h3 className="font-semibold text-lg">Search & Filters</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Input type="text" placeholder="Min Price" className="bg-background" />
              <Input type="text" placeholder="Max Price" className="bg-background" />
              <Input type="text" placeholder="Location" className="bg-background" />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                <SearchIcon size={18} className="mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Available Properties</h2>
            <Badge className="px-4 py-2 bg-accent/10 text-accent border-accent/20">
              {properties.length} Active Listings
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property, index) => (
              <Link key={property.id} href={`/buyer/property/${property.id}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full cursor-pointer slide-up border-2 hover:border-accent/50" style={{animationDelay: `${index * 50}ms`}}>
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img src={property.image || "/placeholder.svg"} alt={property.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="absolute top-3 right-3 bg-background/90 hover:bg-background rounded-full shadow-lg" 
                      onClick={(e) => { 
                        e.preventDefault()
                        e.stopPropagation()
                        toggleWatchlist(property.id)
                      }}
                    >
                      <HeartIcon size={18} filled={watchlist.includes(property.id)} className={watchlist.includes(property.id) ? 'text-accent' : 'text-foreground/60'} />
                    </Button>
                    {property.timeLeft && (
                      <Badge className="absolute bottom-3 left-3 bg-accent text-accent-foreground font-semibold shadow-lg">
                        <ClockIcon size={14} className="inline mr-1" />
                        {property.timeLeft}
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition">{property.title}</h3>
                    <div className="flex items-center gap-1 text-sm text-foreground/60 mb-4">
                      <HomeIcon size={14} />
                      {property.location}
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4 text-xs text-foreground/60 font-medium">
                      <div>{property.bedrooms} bed</div>
                      <div>{property.bathrooms} bath</div>
                      <div>{(property.sqft / 1000).toFixed(1)}k sqft</div>
                    </div>

                    <div className="border-t border-border pt-4 flex items-baseline justify-between">
                      <div>
                        <p className="text-xs text-foreground/50 mb-1 font-medium">Current Bid</p>
                        <p className="text-2xl font-bold text-accent">{property.currentBid}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-foreground/50 mb-1 font-medium">{property.bids} Bids</p>
                        <Button size="sm" className="bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground h-8 font-semibold">
                          Bid →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </BuyerLayout>
  )
}