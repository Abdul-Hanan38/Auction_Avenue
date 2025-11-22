'use client'

import { BuyerLayout } from '@/components/buyer-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const watchlistItems = [
  { id: 1, title: 'Luxury Waterfront Estate', location: 'Miami, FL', image: '/placeholder.svg?key=watch1', currentBid: '$2.5M', addedDate: '2024-01-15' },
  { id: 2, title: 'Downtown Penthouse', location: 'New York, NY', image: '/placeholder.svg?key=watch2', currentBid: '$1.8M', addedDate: '2024-01-14' },
]

export default function Watchlist() {
  return (
    <BuyerLayout>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">My Watchlist</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {watchlistItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                <Button variant="ghost" size="icon" className="absolute top-3 right-3 bg-background/80 hover:bg-background rounded-full">
                  ❤️
                </Button>
              </div>
              <CardContent className="p-5">
                <h3 className="font-bold mb-1">{item.title}</h3>
                <div className="flex items-center gap-1 text-sm text-foreground/60 mb-3">
                  📍 {item.location}
                </div>
                <div className="flex items-baseline justify-between border-t border-border pt-3">
                  <div>
                    <p className="text-xs text-foreground/50">Current Bid</p>
                    <p className="text-lg font-bold text-accent">{item.currentBid}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10">
                    🗑️
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